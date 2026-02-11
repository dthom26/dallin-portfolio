import React, { useState } from "react";
import Button from "./Button";
import { Info, ChevronLeft, ChevronRight } from "lucide-react";
import useScrollReveal, { scrollRevealClass } from "../hooks/useScrollReveal";
import useScrollRevealOnce from "../hooks/useScrollRevealOnce";

function ProjectCard3D({
  project,
  position,
  totalCards,
  currentIndex,
  onInfo,
}) {
  // Calculate the angle for each card in the circle
  const anglePerCard = 360 / totalCards;
  const angle = (position - currentIndex) * anglePerCard;

  // Calculate radius (distance from center) - adjust this for wider/narrower carousel
  const radius = 280;

  // Calculate scale and opacity based on position
  const normalizedPosition =
    (position - currentIndex + totalCards) % totalCards;
  const isFront = normalizedPosition === 0;
  const isNearFront =
    normalizedPosition <= 1 || normalizedPosition >= totalCards - 1;

  // Scale: front card is full size, others smaller
  const scale = isFront ? 1 : isNearFront ? 0.7 : 0.5;

  // Opacity: front card full, others fade
  const opacity = isFront ? 1 : isNearFront ? 0.6 : 0.3;

  // Z-index: front card on top
  const zIndex = isFront ? 50 : isNearFront ? 30 : 10;

  return (
    <div
      className="absolute w-64 transition-all duration-700 ease-in-out"
      style={{
        transform: `rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
        pointerEvents: isFront ? "auto" : "none",
        left: "50%",
        top: "50%",
        marginLeft: "-8rem", // -w-64/2 to center
        marginTop: "-12rem", // approximate center for card height
      }}
    >
      <div className="bg-slate-900/90 border border-emerald-400/20 rounded-xl p-4 shadow-lg shadow-emerald-900/30 hover:bg-slate-900/95 transition hover:shadow-xl transform hover:scale-105 relative backface-hidden">
        <button
          className="absolute top-3 right-3 text-emerald-300 hover:text-white bg-slate-700 rounded-full p-1.5 shadow z-10"
          onClick={() => onInfo(project)}
          aria-label="More Info"
        >
          <Info className="w-4 h-4" />
        </button>
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg mb-3 w-full h-36 object-cover"
        />
        <h3 className="text-lg font-bold mb-2 text-white">{project.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{project.technologies}</p>
        <div className="flex justify-center">
          <Button href={project.github} title={"See Project"} />
        </div>
      </div>
    </div>
  );
}

export default function ProjectCarousel3D({ projects, onInfo }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleNext, handlePrev]);

  // Scroll reveal animations
  const [titleVisible, titleRef] = useScrollReveal({ threshold: 0.3 });
  const [carouselVisible, carouselRef] = useScrollRevealOnce({
    threshold: 0.2,
  });
  const [controlsVisible, controlsRef] = useScrollRevealOnce({
    threshold: 0.1,
  });

  return (
    <div className="text-white py-12 md:py-16 overflow-x-hidden" id="projects">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Animated Title */}
        <div
          ref={titleRef}
          className={`${scrollRevealClass} ${
            titleVisible ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        </div>

        {/* Animated Carousel */}
        <div
          ref={carouselRef}
          className={`transition-all duration-1000 ease-out ${
            carouselVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-12"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* 3D Carousel Container */}
          <div className="relative w-full h-[550px] sm:h-[550px] md:h-[600px] flex items-center justify-center overflow-x-hidden">
            {/* Navigation Buttons - Desktop */}
            <button
              onClick={handlePrev}
              className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 z-50 bg-slate-900/90 hover:bg-slate-800 border border-emerald-400/30 text-emerald-200 hover:text-white p-3 rounded-full shadow-xl transition-all hover:scale-110"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* 3D Stage */}
            <div
              className="relative w-full max-w-4xl h-full flex items-center justify-center touch-pan-y"
              style={{
                perspective: "1200px",
                perspectiveOrigin: "center center",
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {projects.map((project, idx) => (
                  <ProjectCard3D
                    key={project.id}
                    project={project}
                    position={idx}
                    totalCards={projects.length}
                    currentIndex={currentIndex}
                    onInfo={onInfo}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-50 bg-slate-900/90 hover:bg-slate-800 border border-emerald-400/30 text-emerald-200 hover:text-white p-3 rounded-full shadow-xl transition-all hover:scale-110"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-3 mt-2">
            <button
              onClick={handlePrev}
              className="bg-slate-900/90 hover:bg-slate-800 border border-sky-400/30 text-sky-200 hover:text-white p-3 rounded-full shadow-xl transition-all hover:scale-110"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-slate-900/90 hover:bg-slate-800 border border-sky-400/30 text-sky-200 hover:text-white p-3 rounded-full shadow-xl transition-all hover:scale-110"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Animated Controls */}
        <div
          ref={controlsRef}
          className={`transition-all duration-800 ease-out ${
            controlsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* Project Counter */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Project {currentIndex + 1} of {projects.length}
            </p>
            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-emerald-400 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6 text-gray-500 text-sm">
            <span className="hidden md:inline">
              Use arrow keys or buttons to navigate
            </span>
            <span className="md:hidden">Swipe or use buttons to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
