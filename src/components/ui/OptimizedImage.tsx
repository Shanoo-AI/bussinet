import { forwardRef, useState, useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'skeleton' | 'none';
  blurDataURL?: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = forwardRef<HTMLDivElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      priority = false,
      placeholder = 'skeleton',
      blurDataURL,
      className,
      onLoad,
      onError,
      ...props
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(ref);

    useEffect(() => {
      if (priority) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '100px', threshold: 0.1 }
      );

      const element = containerRef.current;
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    }, [priority]);

    const handleLoad = () => {
      setIsLoading(false);
      onLoad?.();
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      onError?.();
    };

    if (hasError) {
      return (
        <div
          ref={containerRef}
          className={cn('bg-dark-100 flex items-center justify-center text-dark-400', className)}
          style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}
          role="img"
          aria-label={alt}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      );
    }

    const imageStyles = {
      width: width ? `${width}px` : '100%',
      height: height ? `${height}px` : 'auto',
      opacity: isLoading ? 0 : 1,
      transition: 'opacity 0.3s ease-out',
    } as React.CSSProperties;

    const skeletonStyles = {
      width: width ? `${width}px` : '100%',
      height: height ? `${height}px` : '200px',
    } as React.CSSProperties;

    return (
      <div
        ref={containerRef}
        className={cn('relative overflow-hidden bg-dark-100', className)}
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : undefined }}
        role="img"
        aria-label={alt}
      >
        {isLoading && placeholder === 'skeleton' && (
          <div
            className="absolute inset-0 skeleton animate-pulse"
            style={skeletonStyles}
            aria-hidden="true"
          />
        )}

        {isLoading && placeholder === 'blur' && blurDataURL && (
          <img
            src={blurDataURL}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
            aria-hidden="true"
            style={imageStyles}
          />
        )}

        <img
          ref={imgRef}
          src={isInView ? src : undefined}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            'block transition-opacity duration-300',
            isLoading ? 'invisible' : 'visible'
          )}
          style={imageStyles}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          {...props}
        />
      </div>
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';

interface PictureProps {
  sources: {
    srcSet: string;
    type?: string;
    media?: string;
  }[];
  fallback: OptimizedImageProps;
  className?: string;
}

export function Picture({ sources, fallback, className }: PictureProps) {
  return (
    <picture className={className}>
      {sources.map((source, index) => (
        <source key={index} srcSet={source.srcSet} type={source.type} media={source.media} />
      ))}
      <OptimizedImage {...fallback} />
    </picture>
  );
}

export function ResponsiveImage({
  src,
  alt,
  widths = [400, 800, 1200, 1600],
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  className,
  ...props
}: Omit<OptimizedImageProps, 'src'> & {
  src: string;
  widths?: number[];
  sizes?: string;
}) {
  const srcSet = widths
    .map((w) => `${src}?w=${w}&q=80&auto=format&fit=crop ${w}w`)
    .join(', ');

  return (
    <OptimizedImage
      src={`${src}?w=${widths[widths.length - 1]}&q=80&auto=format&fit=crop`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      {...props}
    />
  );
}

export default OptimizedImage;