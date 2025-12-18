import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimation.css';

function ScrollAnimation({ children, animation = 'fadeInUp', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`scroll-animate ${isVisible ? `animate-${animation}` : ''}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimation;

