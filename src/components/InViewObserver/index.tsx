import React, { useRef, useEffect, useState, ReactNode } from "react";

interface InViewObserverProps {
  children: (props: { ref: React.RefObject<HTMLDivElement> }) => ReactNode;
  threshold?: number;
  className?: string;
}

const InViewObserver: React.FC<InViewObserverProps> = ({
  children,
  threshold = 0.5,
  className,
}) => {
  const [inView, setInView] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: threshold,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [threshold]);

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <div ref={targetRef} className={`${className} ${inView ? "active" : ""}`}>
      {children({ ref: targetRef })}
    </div>
  );
};

export default InViewObserver;
