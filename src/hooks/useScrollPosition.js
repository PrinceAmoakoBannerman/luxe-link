import { useEffect, useState } from "react";

/**
 * Tracks window.scrollY. Returns 0 and never updates if the user has
 * prefers-reduced-motion enabled, so consumers can skip parallax-style effects.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleScroll = () => {
      if (!prefersReducedMotion) setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
