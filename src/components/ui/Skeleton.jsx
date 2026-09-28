import { cn } from '@/utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export function Skeleton({
  variant = 'rectangular',
  width = '100%',
  height,
  lines = 1,
  className,
  ...props
}: SkeletonProps) {
  const baseStyles = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  } as React.CSSProperties;

  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-xl',
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={cn('space-y-2', className)} {...props}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn('skeleton animate-pulse bg-dark-200 rounded', i === lines - 1 && 'w-3/4')}
            style={{ height: '1rem', width: i === lines - 1 ? '75%' : '100%' }}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn('skeleton animate-pulse bg-dark-200', variants[variant], className)}
      style={baseStyles}
      aria-hidden="true"
      {...props}
    />
  );
}

export function SkeletonCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('skeleton-card p-6 space-y-4', className)} {...props}>
      <Skeleton variant="rectangular" width="60%" height={24} />
      <Skeleton variant="text" lines={3} />
      <Skeleton variant="rectangular" width="30%" height={40} />
    </div>
  );
}

export function SkeletonServiceCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('card-interactive animate-pulse', className)} {...props}>
      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-dark-200 mb-5 lg:mb-6 animate-pulse" aria-hidden="true" />
      <Skeleton variant="text" width="70%" height={28} />
      <Skeleton variant="text" lines={2} />
      <Skeleton variant="rectangular" width="25%" height={40} className="mt-4" />
    </div>
  );
}

export function SkeletonGrid({ count = 6, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { count?: number }) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8', className)} {...props}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonServiceCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonHero({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('relative min-h-[60vh] flex items-center justify-center', className)} {...props}>
      <div className="absolute inset-0 skeleton animate-pulse" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl space-y-6 p-4">
        <Skeleton variant="text" width="80%" height={48} />
        <Skeleton variant="text" lines={3} />
        <div className="flex gap-4">
          <Skeleton variant="rectangular" width={160} height={48} />
          <Skeleton variant="rectangular" width={160} height={48} />
        </div>
      </div>
    </div>
  );
}

export default Skeleton;