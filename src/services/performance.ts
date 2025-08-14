// Performance monitoring and optimization utilities
export class PerformanceService {
  private static metrics: { [key: string]: number } = {};

  // Measure performance of async operations
  static async measureAsync<T>(name: string, operation: () => Promise<T>): Promise<T> {
    const start = performance.now();
    try {
      const result = await operation();
      const duration = performance.now() - start;
      this.metrics[name] = duration;
      
      if (duration > 1000) {
        console.warn(`Slow operation detected: ${name} took ${duration.toFixed(2)}ms`);
      }
      
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      console.error(`Operation failed: ${name} after ${duration.toFixed(2)}ms`, error);
      throw error;
    }
  }

  // Measure performance of sync operations
  static measure<T>(name: string, operation: () => T): T {
    const start = performance.now();
    try {
      const result = operation();
      const duration = performance.now() - start;
      this.metrics[name] = duration;
      
      if (duration > 100) {
        console.warn(`Slow sync operation: ${name} took ${duration.toFixed(2)}ms`);
      }
      
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      console.error(`Sync operation failed: ${name} after ${duration.toFixed(2)}ms`, error);
      throw error;
    }
  }

  // Get performance metrics
  static getMetrics(): { [key: string]: number } {
    return { ...this.metrics };
  }

  // Clear metrics
  static clearMetrics(): void {
    this.metrics = {};
  }

  // Debounce function for performance optimization
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Throttle function for performance optimization
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Preload images for better performance
  static preloadImages(urls: string[]): Promise<void[]> {
    return Promise.all(
      urls.map(url => 
        new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
          img.src = url;
        })
      )
    );
  }

  // Check if user prefers reduced motion
  static prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Get connection speed estimate
  static getConnectionSpeed(): string {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    if (!connection) return 'unknown';
    
    if (connection.effectiveType) {
      return connection.effectiveType;
    }
    
    if (connection.downlink) {
      if (connection.downlink >= 10) return '4g';
      if (connection.downlink >= 1.5) return '3g';
      return '2g';
    }
    
    return 'unknown';
  }

  // Monitor Core Web Vitals
  static monitorWebVitals(): void {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      let clsValue = 0;
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }
}

// Initialize performance monitoring in development
if (process.env.NODE_ENV === 'development') {
  PerformanceService.monitorWebVitals();
}