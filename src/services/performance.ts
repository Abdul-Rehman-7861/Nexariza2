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
  static preloadImages(urls: string[]): Promise<(void | Error)[]> {
    return Promise.all(
      urls.map(url => 
        new Promise<void | Error>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(new Error(`Failed to load image: ${url}`));
          img.src = url;
          
          // Timeout after 5 seconds
          setTimeout(() => resolve(new Error(`Image load timeout: ${url}`)), 5000);
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
    // Only monitor in development
    if (process.env.NODE_ENV !== 'development') return;

    // Largest Contentful Paint
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', Math.round(lastEntry.startTime), 'ms');
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP monitoring not supported');
    }

    // First Input Delay
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          console.log('FID:', Math.round(entry.processingStart - entry.startTime), 'ms');
        });
      }).observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID monitoring not supported');
    }

    // Cumulative Layout Shift
    try {
      new PerformanceObserver((entryList) => {
        let clsValue = 0;
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', Math.round(clsValue * 1000) / 1000);
      }).observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS monitoring not supported');
    }
  }

  // Optimize images for performance
  static optimizeImage(url: string, width?: number, height?: number): string {
    if (url.includes('unsplash.com') || url.includes('pexels.com')) {
      const params = new URLSearchParams();
      if (width) params.set('w', width.toString());
      if (height) params.set('h', height.toString());
      params.set('auto', 'compress');
      params.set('cs', 'tinysrgb');
      params.set('fit', 'crop');
      
      return `${url}?${params.toString()}`;
    }
    return url;
  }

  // Lazy load components
  static createIntersectionObserver(
    callback: (entries: IntersectionObserverEntry[]) => void,
    options?: IntersectionObserverInit
  ): IntersectionObserver {
    return new IntersectionObserver(callback, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options,
    });
  }

  // Memory management
  static cleanupUnusedResources(): void {
    // Clear unused images from memory
    const images = document.querySelectorAll('img[data-loaded="true"]');
    images.forEach((img: any) => {
      if (!img.getBoundingClientRect().top < window.innerHeight + 1000) {
        img.src = '';
        img.removeAttribute('data-loaded');
      }
    });
  }

  // Performance budget monitoring
  static checkPerformanceBudget(): void {
    if (process.env.NODE_ENV !== 'development') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    
    if (loadTime > 3000) {
      console.warn(`Page load time exceeded budget: ${Math.round(loadTime)}ms`);
    }
    
    // Check bundle size
    const resources = performance.getEntriesByType('resource');
    const jsSize = resources
      .filter((r: any) => r.name.includes('.js'))
      .reduce((total: number, r: any) => total + (r.transferSize || 0), 0);
    
    if (jsSize > 500000) { // 500KB budget
      console.warn(`JavaScript bundle size exceeded budget: ${Math.round(jsSize / 1024)}KB`);
    }
  }
}

// Initialize performance monitoring in development
if (process.env.NODE_ENV === 'development') {
  PerformanceService.monitorWebVitals();
}