import { cn } from '@/utils/cn';

const socialIcons = {
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  x: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24-3.363.867-7.474-8.09L3.867 18.75H0l8.936-9.74-3.192-3.43 7.535-8.632z" />
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export function SocialIcon({ platform, className, ...props }) {
  return (
    <span className={cn('flex items-center justify-center', className)} {...props}>
      {socialIcons[platform]}
    </span>
  );
}

export function SocialLinks({ links, className, size = 'md', ...props }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <div className={cn('flex items-center gap-3', className)} {...props}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.ariaLabel || link.label}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center justify-center rounded-full bg-dark-100 text-dark-600',
            'transition-all duration-300',
            'hover:bg-primary-700 hover:text-white',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
            sizeClasses[size]
          )}
        >
          <SocialIcon platform={link.icon} />
        </a>
      ))}
    </div>
  );
}
