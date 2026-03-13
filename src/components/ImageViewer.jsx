import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";

const ViewerContext = createContext(null);
function useViewer() {
  return useContext(ViewerContext);
}

export default function ImageViewer({
  images = [],
  autoPlay = true,
  interval = 4000,
  autoPause = true,
  thumbnails = false,
  ariaLabel = "Image viewer",
  slideClass = "w-full h-80 sm:h-96 md:h-[40rem] object-cover",
  initialIndex = 0,
  onIndexChange = null,
  paused = false,
  captionThreshold = 60,
  children,
}) {
  const [index, setIndex] = useState(initialIndex || 0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  // Normalize images: allow array of strings or array of {src, caption}
  const normalizedImages = images.map((img) =>
    typeof img === "string" ? { src: img, caption: "" } : img
  );
  const value = { index, setIndex, images: normalizedImages };

  useEffect(() => {
    if (!autoPlay || normalizedImages.length <= 1) return;
    if (isPaused || paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % normalizedImages.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, normalizedImages.length, isPaused, paused]);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    el.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  useEffect(() => {
    if (typeof onIndexChange === "function") onIndexChange(index);
  }, [index, onIndexChange]);

  useEffect(() => {
    setIndex(initialIndex || 0);
  }, [initialIndex]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(i + 1, normalizedImages.length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [normalizedImages.length]);

  // touch / swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let delta = 0;
    function onPointerDown(e) {
      startX = e.clientX || e.touches?.[0]?.clientX || 0;
      el.style.transition = "none";
    }
    function onPointerMove(e) {
      const x = e.clientX || e.touches?.[0]?.clientX || 0;
      delta = x - startX;
    }
    function onPointerUp() {
      el.style.transition = "transform 400ms ease";
      if (Math.abs(delta) > 50) {
        if (delta < 0)
          setIndex((i) => Math.min(i + 1, normalizedImages.length - 1));
        else setIndex((i) => Math.max(i - 1, 0));
      }
      delta = 0;
    }
    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [normalizedImages.length]);

  return (
    <ViewerContext.Provider value={value}>
      <div
        className="relative w-full"
        onMouseEnter={() => autoPause && setIsPaused(true)}
        onMouseLeave={() => autoPause && setIsPaused(false)}
        aria-label={ariaLabel}
      >
        {children ? (
          children
        ) : (
          <>
            {/* Image area — relative scope keeps arrows, counter, dots pinned to the image */}
            <div className="relative w-full overflow-hidden rounded-2xl">
              {/* Sliding strip */}
              <div
                ref={containerRef}
                className="flex w-full transition-transform duration-500"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {normalizedImages.map((img, i) => (
                  <div key={i} className="w-full flex-shrink-0 relative">
                    <img
                      src={img.src}
                      alt={img.caption || `slide-${i}`}
                      className={slideClass}
                      loading="lazy"
                    />
                    {/* Short caption: gradient overlay pinned to bottom of image */}
                    {img.caption && img.caption.length <= captionThreshold && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pb-4 pt-12 pointer-events-none">
                        <p className="text-sm font-semibold text-white text-center [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">
                          {img.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Slide counter badge — top-left */}
              {normalizedImages.length > 1 && (
                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white/90 text-xs px-2.5 py-1 rounded-full font-medium pointer-events-none select-none">
                  {index + 1} / {normalizedImages.length}
                </div>
              )}

              {/* Nav arrows — hidden on mobile, swipe handles it */}
              {normalizedImages.length > 1 && (
                <>
                  <button
                    onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                    className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-9 h-9 items-center justify-center rounded-full shadow-md hover:bg-black/60 transition-colors text-2xl leading-none"
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() =>
                      setIndex((i) =>
                        Math.min(i + 1, normalizedImages.length - 1)
                      )
                    }
                    className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-9 h-9 items-center justify-center rounded-full shadow-md hover:bg-black/60 transition-colors text-2xl leading-none"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Dot indicators — always visible */}
              {normalizedImages.length > 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2 z-10">
                  {normalizedImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === index ? "bg-emerald-400" : "bg-white/40"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Long caption panel — rendered below image for captions > threshold */}
            {(() => {
              const cap = normalizedImages[index]?.caption;
              return cap && cap.length > captionThreshold ? (
                <div className="bg-slate-800/90 rounded-b-2xl border-t border-emerald-400/10 px-4 py-3">
                  <p className="text-sm text-slate-200 leading-relaxed text-center">
                    {cap}
                  </p>
                </div>
              ) : null;
            })()}
          </>
        )}
      </div>
    </ViewerContext.Provider>
  );
}
