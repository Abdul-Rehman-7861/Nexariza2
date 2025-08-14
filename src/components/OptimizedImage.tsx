import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useOptimizedImages } from '../hooks/useOptimizedImages';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  onLoad,
  onError,
}) => {
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const { getOptimizedUrl, isImageLoaded, hasImageFailed } = useOptimizedImages(
    [src],
    { width, height }
  );

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const optimizedSrc = getOptimizedUrl(src);
  const loaded = isImageLoaded(src);
  const failed = hasImageFailed(src);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading State */}
      {!loaded && !failed && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="premium-spinner"></div>
        </div>
      )}

      {/* Error State */}
      {failed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-400"
        >
          <div className="text-center">
            <div className="text-3xl mb-2">⚠️</div>
            <div className="font-medium">Image unavailable</div>
          </div>
        </motion.div>
      )}

      {/* Actual Image */}
      {isInView && !failed && (
        <motion.img
          src={optimizedSrc}
          alt={alt}
          className="w-full h-full object-cover gpu-accelerated"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: loaded ? 1 : 0,
            scale: loaded ? 1 : 1.1
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          onLoad={() => {
            onLoad?.();
          }}
          onError={() => {
            onError?.();
          }}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...(width && { width })}
          {...(height && { height })}
        />
      )}

      {/* Placeholder for non-priority images */}
      {!isInView && !priority && (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <div className="loading-skeleton w-full h-full"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;