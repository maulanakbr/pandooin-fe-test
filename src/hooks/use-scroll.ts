'use client';

import * as React from 'react';

export const useScroll = () => {
  const [isScroll, setIsScroll] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        typeof window !== 'undefined' &&
        window.scrollY > 0 &&
        window.innerWidth > 1280
      ) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });

    return () =>
      window.removeEventListener('scroll', () => {
        setIsScroll(false);
      });
  }, []);

  return { isScroll };
};
