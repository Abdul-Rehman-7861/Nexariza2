// Performance monitoring utilities for production optimization
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number[]> = new Map();
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!this.instance) {
      this.instance = new PerformanceMonitor();
    }
    return this.instance;
  }

  // Initialize performance monitoring
  init(): void {
    if (typeof window === 'undefined') return;

    this.observeResourceTiming();
    this.observeNavigationTiming();
    this.observeLongTasks();
    this.observeLayoutShifts();
  }

  // Monitor resource loading times
  private observeResourceTiming(): void {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          this.recordMetric(`resource_${resource.initiatorType}`, resource.duration);
          
          // Alert on slow resources
          if (resource.duration > 1000) {
            console.warn(`Slow resource: ${resource.name} took ${resource.duration.toFixed(2)}ms`);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
    this.observers.push(observer);
  }

  // Monitor navigation timing
  private observeNavigationTiming(): void {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const nav = entry as PerformanceNavigationTiming;
          this.recordMetric('page_load_time', nav.loadEventEnd - nav.fetchStart);
          this.recordMetric('dom_content_loaded', nav.domContentLoadedEventEnd - nav.fetchStart);
          this.recordMetric('first_byte', nav.responseStart - nav.fetchStart);
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });
    this.observers.push(observer);
  }

  // Monitor long tasks that block the main thread
  private observeLongTasks(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration.toFixed(2)}ms`);
            this.recordMetric('long_tasks', entry.duration);
          }
        });
      });

      observer.observe({ entryTypes: ['longtask'] });
      this.observers.push(observer);
    } catch (e) {
      console.warn('Long task monitoring not supported');
    }
  }

  // Monitor layout shifts
  private observeLayoutShifts(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.recordMetric('cumulative_layout_shift', clsValue);
          }
        });
      });

      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (e) {
      console.warn('Layout shift monitoring not supported');
    }
  }

  // Record performance metric
  private recordMetric(name: string, value: number): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)!.push(value);
  }

  // Get performance report
  getReport(): any {
    const report: any = {};
    
    this.metrics.forEach((values, name) => {
      const avg = values.reduce((a, b) => a + b, 0) / values.length;
      const max = Math.max(...values);
      const min = Math.min(...values);
      
      report[name] = {
        average: Math.round(avg * 100) / 100,
        max: Math.round(max * 100) / 100,
        min: Math.round(min * 100) / 100,
        count: values.length
      };
    });

    return report;
  }

  // Check if performance is within acceptable limits
  isPerformanceGood(): boolean {
    const report = this.getReport();
    
    // Check key metrics
    const pageLoadTime = report.page_load_time?.average || 0;
    const cls = report.cumulative_layout_shift?.average || 0;
    const longTasks = report.long_tasks?.count || 0;

    return pageLoadTime < 3000 && cls < 0.1 && longTasks < 5;
  }

  // Cleanup observers
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics.clear();
  }

  // Get real-time performance score
  getPerformanceScore(): number {
    const report = this.getReport();
    let score = 100;

    // Deduct points for poor metrics
    if (report.page_load_time?.average > 3000) score -= 20;
    if (report.page_load_time?.average > 5000) score -= 30;
    if (report.cumulative_layout_shift?.average > 0.1) score -= 15;
    if (report.cumulative_layout_shift?.average > 0.25) score -= 25;
    if (report.long_tasks?.count > 5) score -= 10;
    if (report.long_tasks?.count > 10) score -= 20;

    return Math.max(0, score);
  }
}

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  const monitor = PerformanceMonitor.getInstance();
  monitor.init();
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    monitor.cleanup();
  });
}