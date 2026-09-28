import { cn } from '@/utils/cn';

export function Logo({ className, width = 180, height = 60, ...props }) {
  return (
    <span
      className={cn('brand-logo', className)}
      style={{ width, height }}
      {...props}
    >
      <img
        src="/images/logo/bussinet-mark.png"
        alt="Bussinet International"
        width={width}
        height={height}
        className="brand-logo__image"
      />
    </span>
  );
}

export function LogoMark({ className, size = 40, ...props }) {
  return (
    <img
      src="/images/logo/logo-180.png"
      alt="Bussinet International"
      width={size}
      height={size}
      className={cn('object-contain', className)}
      {...props}
    />
  );
}
