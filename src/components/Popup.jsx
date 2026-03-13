import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ImageViewer from "./ImageViewer";

const Popup = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement;
    // Disable background scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e) {
      if (e.key === "Escape") onClose();
      // simple tab trap
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    window.addEventListener("keydown", onKey);
    // focus modal
    setTimeout(() => {
      const focusable = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      (focusable?.[0] || modalRef.current)?.focus();
      // trigger fade-in animation
      setTimeout(() => setEntered(true), 10);
    }, 0);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      // restore focus
      try {
        previouslyFocused.current?.focus();
      } catch (e) {}
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return createPortal(
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${entered ? "bg-black/40 backdrop-blur-sm opacity-100" : "bg-black/0 opacity-0"}`}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        className={`bg-white rounded-2xl p-4 sm:p-8 max-w-xs sm:max-w-md md:max-w-2xl w-full mx-2 sm:mx-4 relative shadow-lg overflow-y-auto max-h-[90vh] transition-all duration-300 ${entered ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        onClick={(e) => e.stopPropagation()}
        style={{ boxSizing: "border-box" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
          {project.name}
        </h2>

        <div className="rounded-lg mb-4 w-full">
          <ImageViewer
            images={project.images || [project.image]}
            autoPlay={false}
            thumbnails={true}
            ariaLabel={`Gallery for ${project.name}`}
          />
        </div>

        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          {project.description}
        </p>

        {/* Key Skills Section */}
        {project.skills && (
          <div className="mb-6">
            <h3 className="text-base sm:text-[1.2rem] font-semibold mb-2 text-gray-900">
              Key Skills Demonstrated
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Features Section */}
        {project.features && (
          <div>
            <h3 className="text-base sm:text-[1.2rem] font-semibold mb-2 text-gray-900">
              Features
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Popup;
