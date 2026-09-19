'use client';

import { useEffect, useRef, useState } from 'react';

/* Fades its children up the first time they scroll into view.
   The hidden state lives behind the `js` class on <html>, so without
   JavaScript the content simply renders in place. */
const Reveal = ({ children, delay = 0, as: Tag = 'div', className = '' }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-shown={shown || undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
