import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

const motionTags = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
};

export function AnimatedText({
  children,
  as: Component = 'p',
  className,
  delay = 0,
  stagger = 0.05,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motionTags[Component];

  if (!MotionComponent) {
    throw new Error(`Unsupported animated text element: ${Component}`);
  }

  const textChildren = typeof children === 'string'
    ? children.split(' ').map((word, i) => (
        <span key={i} style={{ display: 'inline-block', marginRight: '0.25em' }}>
          {word}
        </span>
      ))
    : children;

  if (shouldReduceMotion) {
    return <Component className={cn('opacity-100', className)} {...props}>{children}</Component>;
  }

  return (
    <MotionComponent
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      {...props}
    >
      {Array.isArray(textChildren)
        ? textChildren.map((child, i) =>
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + i * stagger,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {child}
            </motion.span>
          )
        : textChildren}
    </MotionComponent>
  );
}

export function AnimatedHeading({
  children,
  as: Component = 'h1',
  className,
  delay = 0,
  stagger = 0.03,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motionTags[Component];

  if (!MotionComponent) {
    throw new Error(`Unsupported animated heading element: ${Component}`);
  }

  if (shouldReduceMotion) {
    return <Component className={cn('opacity-100', className)} {...props}>{children}</Component>;
  }

  return (
    <MotionComponent
      className={cn(className)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      {...props}
    >
      {typeof children === 'string'
        ? children.split(' ').map((word, i) =>
            <motion.span
              key={i}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: delay + i * stagger,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {word}
            </motion.span>
          )
        : children}
    </MotionComponent>
  );
}

export function AnimatedLines({
  lines,
  as: Component = 'div',
  className,
  delay = 0,
  stagger = 0.1,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motionTags[Component];

  if (!MotionComponent) {
    throw new Error(`Unsupported animated lines element: ${Component}`);
  }

  if (shouldReduceMotion) {
    return (
      <Component className={cn('opacity-100', className)} {...props}>
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </Component>
    );
  }

  return (
    <MotionComponent className={cn(className)} {...props}>
      {lines.map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {line}
        </motion.p>
      ))}
    </MotionComponent>
  );
}
