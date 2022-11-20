import {useRef} from 'react';

export default function useDebounce(func: any, delay: number) {
  const timeoutRef = useRef<number>();

  function debounced(...args) {
    if (timeoutRef?.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  }

  return debounced;
}
