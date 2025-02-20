import { useCallback, useState, useEffect } from 'react';

export default function useElementSize() {
  const [ref, setRef] = useState(null);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEffect(() => {
    handleSize();
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [handleSize]);

  return [setRef, size];
}
