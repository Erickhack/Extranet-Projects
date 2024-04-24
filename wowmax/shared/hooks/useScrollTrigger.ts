import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Params = {
  offset?: number;
  once?: boolean;
};

function useScrollTrigger(className: string, params?: Params) {
  const { offset = 600, once = true } = params || {};
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: `-=${offset}`,
        end: 'bottom',
        toggleClass: className,
        once,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

export { useScrollTrigger };
