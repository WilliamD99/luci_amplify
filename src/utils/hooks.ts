import React, { RefObject, useEffect, useMemo, useState } from "react";

export const usePrevious = (value: any) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
        if (entry.rootBounds?.top) {
          setIsAtTop(entry.boundingClientRect.top <= entry.rootBounds?.top);
        }
      }),
    [ref]
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return { isIntersecting, isAtTop };
}
