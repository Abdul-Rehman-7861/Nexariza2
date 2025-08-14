import { useState, useEffect, useCallback } from 'react';
import { PerformanceService } from '../services/performance';

interface UseOptimizedImagesOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
}

export const useOptimizedImages = (
  urls: string[],
  options: UseOptimizedImagesOptions = {}
) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const optimizeImageUrl = useCallback((url: string) => {
    return PerformanceService.optimizeImage(url, options.width, options.height);
  }, [options.width, options.height]);

  const preloadImages = useCallback(async () => {
    setIsLoading(true);
    
    try {
      const optimizedUrls = urls.map(optimizeImageUrl);
      const results = await PerformanceService.preloadImages(optimizedUrls);
      
      const loaded = new Set<string>();
      const failed = new Set<string>();
      
      results.forEach((result, index) => {
        if (result instanceof Error) {
          failed.add(urls[index]);
        } else {
          loaded.add(urls[index]);
        }
      });
      
      setLoadedImages(loaded);
      setFailedImages(failed);
    } catch (error) {
      console.error('Failed to preload images:', error);
    } finally {
      setIsLoading(false);
    }
  }, [urls, optimizeImageUrl]);

  useEffect(() => {
    if (urls.length > 0) {
      preloadImages();
    }
  }, [preloadImages]);

  const getOptimizedUrl = useCallback((url: string) => {
    return optimizeImageUrl(url);
  }, [optimizeImageUrl]);

  const isImageLoaded = useCallback((url: string) => {
    return loadedImages.has(url);
  }, [loadedImages]);

  const hasImageFailed = useCallback((url: string) => {
    return failedImages.has(url);
  }, [failedImages]);

  return {
    isLoading,
    loadedImages: Array.from(loadedImages),
    failedImages: Array.from(failedImages),
    getOptimizedUrl,
    isImageLoaded,
    hasImageFailed,
    preloadImages,
  };
};