import { useState, useEffect, useRef } from "react";

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const rafId = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      
      // Use requestAnimationFrame for smoother performance on mobile
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      rafId.current = requestAnimationFrame(() => {
        setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
        setScrollY(currentScrollY);
        lastScrollY.current = currentScrollY;
      });
    };

    // Throttle scroll events for better mobile performance
    const throttledUpdate = () => {
      updateScrollPosition();
    };

    // Use passive listeners for better scroll performance
    const options: AddEventListenerOptions = {
      passive: true,
      capture: false
    };

    window.addEventListener("scroll", throttledUpdate, options);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", throttledUpdate);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Mobile-specific threshold for better UX
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const scrollThreshold = isMobile ? 30 : 50;

  return {
    scrollY,
    scrollDirection,
    isScrolled: scrollY > scrollThreshold,
    isMobile
  };
};
