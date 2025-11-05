import { useState, useCallback } from 'react';

export function useCardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const reset = useCallback(() => {
    setIsFlipped(false);
  }, []);

  const flipToFront = useCallback(() => {
    setIsFlipped(false);
  }, []);

  const flipToBack = useCallback(() => {
    setIsFlipped(true);
  }, []);

  return {
    isFlipped,
    flip,
    reset,
    flipToFront,
    flipToBack
  };
}
