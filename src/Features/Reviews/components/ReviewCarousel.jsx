import React, { createContext, useContext, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../Reviews.module.css";

// ============================================================================
// 🎓 TEACHING MOMENT #1: Context for Implicit State Sharing
// ============================================================================
// This Context allows all child components to access carousel state
// WITHOUT explicitly passing props down through every level.
// It's like a "secret communication channel" between parent and children.

const CarouselContext = createContext(null);

// Custom hook to access carousel context - this is a best practice!
// It provides better error messages and type safety
const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel components must be used within ReviewCarousel");
  }
  return context;
};

// ============================================================================
// 🎓 TEACHING MOMENT #2: The Main Compound Component
// ============================================================================
// This is the "parent" component that holds all the state and logic.
// It uses Context.Provider to share state with its children.

function ReviewCarousel({
  children,
  autoPlay = true,
  autoPlayInterval = 5000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Count the total number of Card children
  // We look inside Container to find all Cards
  const containerChild = React.Children.toArray(children).find(
    (child) => child.type === Container
  );

  const totalReviews = containerChild
    ? React.Children.count(containerChild.props.children)
    : 0;

  // Navigation functions
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToIndex = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || totalReviews === 0) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex, totalReviews]);

  // ============================================================================
  // 🎓 TEACHING MOMENT #3: Context Value
  // ============================================================================
  // Everything in this object is available to ALL child components!
  // This is the "magic" that makes compound components work.

  const value = {
    currentIndex,
    totalReviews,
    goToNext,
    goToPrevious,
    goToIndex,
    isAnimating,
  };

  return (
    <CarouselContext.Provider value={value}>
      <div className={styles.carouselWrapper}>{children}</div>
    </CarouselContext.Provider>
  );
}

// ============================================================================
// 🎓 TEACHING MOMENT #4: Sub-components (The "Compound" Parts)
// ============================================================================
// Each of these components can access the carousel state through useCarousel()
// They're like puzzle pieces that users can arrange however they want!

// Container - holds the cards
function Container({ children }) {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>{children}</div>
    </div>
  );
}

// Individual card wrapper
function Card({ review, index, children }) {
  const { currentIndex, totalReviews } = useCarousel();

  // Calculate position in 3D space (similar to your ProjectCarousel3D)
  const anglePerCard = 360 / totalReviews;
  const angle = (index - currentIndex) * anglePerCard;
  const radius = 320; // Distance from center

  // Calculate visibility and scale
  const normalizedPosition =
    (index - currentIndex + totalReviews) % totalReviews;
  const isCurrent = normalizedPosition === 0;
  const isAdjacent =
    normalizedPosition === 1 || normalizedPosition === totalReviews - 1;

  const scale = isCurrent ? 1 : isAdjacent ? 0.8 : 0.6;
  const opacity = isCurrent ? 1 : isAdjacent ? 0.5 : 0;
  const zIndex = isCurrent ? 50 : isAdjacent ? 30 : 10;

  return (
    <div
      className={styles.carouselCard}
      style={{
        transform: `rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
        pointerEvents: isCurrent ? "auto" : "none",
      }}
    >
      {/* 🎓 Render children or pass review data to them */}
      {typeof children === "function" ? children(review) : children}
    </div>
  );
}

// Navigation controls
function Controls() {
  const { goToNext, goToPrevious, isAnimating } = useCarousel();

  return (
    <div className={styles.carouselControls}>
      <button
        onClick={goToPrevious}
        disabled={isAnimating}
        className={styles.controlButton}
        aria-label="Previous review"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={goToNext}
        disabled={isAnimating}
        className={styles.controlButton}
        aria-label="Next review"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}

// Mobile-specific navigation controls
function MobileControls() {
  const { goToNext, goToPrevious, isAnimating } = useCarousel();

  return (
    <div className={styles.mobileControls}>
      <button
        onClick={goToPrevious}
        disabled={isAnimating}
        className={styles.controlButton}
        aria-label="Previous review"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        disabled={isAnimating}
        className={styles.controlButton}
        aria-label="Next review"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

// Indicator dots
function Indicators() {
  const { currentIndex, totalReviews, goToIndex } = useCarousel();

  return (
    <div className={styles.carouselIndicators}>
      {Array.from({ length: totalReviews }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToIndex(index)}
          className={`${styles.indicator} ${
            index === currentIndex ? styles.indicatorActive : ""
          }`}
          aria-label={`Go to review ${index + 1}`}
        />
      ))}
    </div>
  );
}

// ============================================================================
// 🎓 TEACHING MOMENT #5: The Dot Notation Pattern
// ============================================================================
// This is how we attach sub-components to the main component!
// Now users can write: <ReviewCarousel.Container>, <ReviewCarousel.Card>, etc.
// It's just JavaScript object property assignment!

ReviewCarousel.Container = Container;
ReviewCarousel.Card = Card;
ReviewCarousel.Controls = Controls;
ReviewCarousel.MobileControls = MobileControls;
ReviewCarousel.Indicators = Indicators;

export default ReviewCarousel;
