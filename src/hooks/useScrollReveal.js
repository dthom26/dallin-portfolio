import { useEffect, useRef, useState } from "react";

// Usage: const [isVisible, ref] = useScrollReveal({ threshold: 0.2 });
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px",
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // Only reveal once
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [isVisible, ref];
}

// Helper class for scroll reveal animation
export const scrollRevealClass =
  "transition-all duration-700 ease-out opacity-0 translate-y-8";
