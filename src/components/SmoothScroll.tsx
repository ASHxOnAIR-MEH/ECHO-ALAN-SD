'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Dynamic sync with GSAP
    let scrollTriggerUpdate: any;
    import('gsap').then(({ default: gsap }) => {
      import('gsap/ScrollTrigger').then(({ default: ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        scrollTriggerUpdate = () => ScrollTrigger.update();
        lenis.on('scroll', scrollTriggerUpdate);
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (scrollTriggerUpdate) {
        lenis.off('scroll', scrollTriggerUpdate);
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
