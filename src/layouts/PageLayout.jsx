import { cn } from '../utils/cn';

export function PageLayout({
  children,
  className,
  containerClassName = 'section-container',
  paddingClassName = 'section-padding',
}) {
  return (
    <div className={cn(className)}>
      <div className={cn(containerClassName, paddingClassName)}>
        {children}
      </div>
    </div>
  );
}

export function SectionWrapper({
  children,
  className,
  id,
  background,
}) {
  return (
    <section
      id={id}
      className={cn('relative', background, className)}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {children}
    </section>
  );
}
