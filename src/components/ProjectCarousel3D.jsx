import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useScrollReveal, { scrollRevealClass } from "../hooks/useScrollReveal";
import useScrollRevealOnce from "../hooks/useScrollRevealOnce";

function ProjectCard3D({
  project,
  position,
  totalCards,
  currentIndex,
  radius,
}) {
  const navigate = useNavigate();

  // Calculate the angle for each card in the circle
  const anglePerCard = 360 / totalCards;
  const angle = (position - currentIndex) * anglePerCard;

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

  const handleSeeProject = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className="absolute w-64 transition-all duration-700 ease-in-out"
      style={{
        transform: `translate(-50%,-50%) rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
        pointerEvents: isFront ? "auto" : "none",
        left: "50%",
        top: "50%",
      }}
    >
      <div className="bg-card/90 border border-primary/20 rounded-xl p-4 shadow-lg shadow-primary/30 hover:bg-card/95 transition hover:shadow-xl transform hover:scale-105 relative backface-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg mb-3 w-full h-36 object-cover"
        />
        <h3 className="text-lg font-bold mb-2 text-white">{project.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{project.technologies}</p>
        <div className="flex justify-center">
          <button
            onClick={handleSeeProject}
            className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded hover:from-primary-dark hover:to-accent transition-all transform hover:scale-105 shadow-md text-sm font-semibold"
          >
            See Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCarousel3D({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [radius, setRadius] = useState(280);
  const stageRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  // Responsive radius for 3D spread
  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 640) setRadius(180);
      else if (w < 1024) setRadius(220);
      else setRadius(280);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // Non-passive touch listeners attached directly to DOM so preventDefault() works
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      touchEndRef.current = null;
      touchStartRef.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      touchEndRef.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
      if (touchStartRef.current === null || touchEndRef.current === null)
        return;
      const distance = touchStartRef.current - touchEndRef.current;
      if (distance > 50) handleNext();
      else if (distance < -50) handlePrev();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [handleNext, handlePrev]);

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
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Client Work
          </h2>
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
          <div className="relative w-full h-[480px] sm:h-[480px] md:h-[550px] lg:h-[600px] flex items-center justify-center overflow-x-hidden">
            {/* 3D Stage */}
            <div
              ref={stageRef}
              className="relative w-full max-w-4xl h-full flex items-center justify-center touch-none mx-auto"
              style={{
                perspective: "1200px",
                perspectiveOrigin: "center center",
              }}
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
                    radius={radius}
                  />
                ))}
              </div>
            </div>

            {/* Overlayed arrows anchored to carousel container */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="relative w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8 pointer-events-none h-full">
                <button
                  onClick={handlePrev}
                  className="hidden md:inline-flex absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-slate-900/90 hover:bg-slate-800 border border-primary/30 text-accent hover:text-white p-2 rounded-full shadow-xl transition-all hover:scale-105 pointer-events-auto"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="hidden md:inline-flex absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-slate-900/90 hover:bg-slate-800 border border-primary/30 text-accent hover:text-white p-2 rounded-full shadow-xl transition-all hover:scale-105 pointer-events-auto"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
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
                      ? "bg-primary scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6 text-gray-500 text-sm">
            {/* <span className="hidden md:inline">
              Use arrow keys or buttons to navigate
            </span> */}
            <span className="md:hidden">Swipe or use buttons to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
