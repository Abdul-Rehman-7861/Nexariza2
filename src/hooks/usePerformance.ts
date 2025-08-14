import { useEffect, useCallback } from 'react';
import { PerformanceService } from '../services/performance';

export const usePerformance = () => {
  const measureAsync = useCallback(
    <T>(name: string, operation: () => Promise<T>) => 
      PerformanceService.measureAsync(name, operation),
    []
  );

  const measure = useCallback(
    <T>(name: string, operation: () => T) => 
      PerformanceService.measure(name, operation),
    []
  );

  const debounce = useCallback(
    <T extends (...args: any[]) => any>(func: T, wait: number) =>
      PerformanceService.debounce(func, wait),
    []
  );

  const throttle = useCallback(
    <T extends (...args: any[]) => any>(func: T, limit: number) =>
      PerformanceService.throttle(func, limit),
    []
  );

  useEffect(() => {
    // Log performance metrics on component mount
    const metrics = PerformanceService.getMetrics();
    if (Object.keys(metrics).length > 0) {
      console.log('Performance Metrics:', metrics);
    }
  }, []);

  return {
    measureAsync,
    measure,
    debounce,
    throttle,
    getMetrics: PerformanceService.getMetrics,
    clearMetrics: PerformanceService.clearMetrics,
    prefersReducedMotion: PerformanceService.prefersReducedMotion,
    getConnectionSpeed: PerformanceService.getConnectionSpeed,
  };
};