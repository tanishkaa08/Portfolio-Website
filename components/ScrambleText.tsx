'use client';
import React, { useRef, useState, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export interface ScrambleTextHandle {
  scramble: () => void;
  reset: () => void;
}

const ScrambleText = forwardRef<ScrambleTextHandle, ScrambleTextProps>(({ text, className }, ref) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = '!<>-_\\/[]{}—=+*^?#_';

  const scramble = useCallback(() => {
    let counter = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const newText = text
        .split('')
        .map((char, index) => {
          if (index < counter) return text[index];
          if (char === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(newText);

      if (counter >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }
      counter += 1 / 2;
    }, 30);
  }, [text]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  }, [text]);

  useImperativeHandle(ref, () => ({
    scramble,
    reset,
  }));

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span onMouseEnter={scramble} onMouseLeave={reset} className={className}>
      {displayText}
    </span>
  );
});

ScrambleText.displayName = 'ScrambleText';

export default ScrambleText;