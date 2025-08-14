import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PerformanceService } from '../services/performance';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = PerformanceService.createIntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    if (imgRef.current) {
      imgRef.current.setAttribute('data-loaded', 'true');
    }
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Optimize image URL
  const optimizedSrc = PerformanceService.optimizeImage(src, width, height);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className} lazy-loading`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <motion.img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-50"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isInView ? 0.3 : 0.8 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Actual Image */}
      {isInView && !hasError && (
        <motion.img
          src={optimizedSrc}
          alt={alt}
          className="w-full h-full object-cover gpu-accelerated"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          {...(width && { width })}
          {...(height && { height })}
        />
      )}

      {/* Error State */}
      {hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-400"
        >
          <div className="text-center">
            <div className="text-3xl mb-3">⚠️</div>
            <div className="font-medium">Failed to load image</div>
          </div>
        </motion.div>
      )}

      {/* Loading Spinner */}
      {isInView && !isLoaded && !hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="premium-spinner"></div>
        </motion.div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;