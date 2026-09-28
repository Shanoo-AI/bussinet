import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (event) => {
      setShouldReduceMotion(event.matches);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return shouldReduceMotion;
}