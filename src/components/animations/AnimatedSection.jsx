import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils/cn';

export function AnimatedSection({
  children,
  className,
  triggerOnce = true,
  rootMargin = '0px 0px -100px 0px',
  ...props
}) {
  const [ref, isInView] = useInView({ rootMargin, triggerOnce });

  return (
    <motion.section
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedContainer({
  children,
  className,
  stagger = 0.1,
  triggerOnce = true,
  rootMargin = '0px 0px -100px 0px',
  ...props
}) {
  const [ref, isInView] = useInView({ rootMargin, triggerOnce });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              variants: itemVariants,
            })
          : child
      )}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className,
  delay = 0,
  y = 30,
  ...props
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredContainer({
  children,
  className,
  stagger = 0.1,
  ...props
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: stagger },
        },
      }}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({
  children,
  className,
  ...props
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

import React from 'react';
