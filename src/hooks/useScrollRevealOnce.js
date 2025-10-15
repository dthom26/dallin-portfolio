import { useEffect, useRef, useState } from "react";

// Usage: const [isVisible, ref] = useScrollRevealOnce({ threshold: 0.2 });
export default function useScrollRevealOnce({
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
