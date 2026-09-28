import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useInView(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldReduceMotion, threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

export function useStaggeredInView(itemCount, options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [visibleItems, setVisibleItems] = useState(() => {
    if (shouldReduceMotion) {
      return new Set(Array.from({ length: itemCount }, (_, i) => i));
    }
    return new Set();
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = new Set();
          for (let i = 0; i < itemCount; i++) {
            items.add(i);
          }
          setVisibleItems(items);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldReduceMotion, itemCount, threshold, rootMargin, triggerOnce]);

  return [ref, visibleItems];
}