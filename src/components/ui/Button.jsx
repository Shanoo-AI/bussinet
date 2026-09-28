import { cloneElement, forwardRef, isValidElement } from 'react';
import { cn } from '@/utils/cn';

const Button = forwardRef(
  (
    {
      children,
      asChild = false,
      variant = 'primary',
      size = 'md',
      className,
      disabled,
      loading,
      leftIcon,
      rightIcon,
      fullWidth,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'text-white bg-primary-700 rounded-lg hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-800/30 active:scale-[0.98] focus-visible:ring-primary-500',
      secondary: 'text-primary-700 bg-white border-2 border-primary-700 rounded-lg hover:bg-primary-50 hover:shadow-lg hover:shadow-primary-800/20 active:scale-[0.98] focus-visible:ring-primary-500',
      accent: 'text-white bg-accent-500 rounded-lg hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-600/30 active:scale-[0.98] focus-visible:ring-accent-500',
      ghost: 'text-dark-700 bg-transparent rounded-lg hover:bg-dark-100 active:scale-[0.98] focus-visible:ring-dark-500',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-2.5',
      xl: 'px-10 py-5 text-xl gap-3',
    };

    const classNames = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
      className
    );

    if (asChild) {
      if (!isValidElement(children)) {
        throw new Error('Button with asChild requires a single valid element child.');
      }

      const handleClick = (event) => {
        if (disabled || loading) {
          event.preventDefault();
          return;
        }
        children.props.onClick?.(event);
      };

      return cloneElement(children, {
        ...props,
        className: cn(children.props.className, classNames),
        'aria-disabled': disabled || loading || children.props['aria-disabled'],
        tabIndex: disabled || loading ? -1 : children.props.tabIndex,
        onClick: handleClick,
      });
    }

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        <span>{children}</span>
        {!loading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
