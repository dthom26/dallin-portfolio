import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ImageViewer from "./ImageViewer";

export default function ImagePopup({
  isOpen,
  onClose,
  images = [],
  ariaLabel = "Image gallery",
  initialIndex = 0,
}) {
  const modalRef = useRef(null);
  const previouslyFocused = useRef(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e) {
      if (e.key === "Escape") onClose();
      // basic tab trap
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
    setTimeout(() => {
      const focusable = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      (focusable?.[0] || modalRef.current)?.focus();
      setTimeout(() => setEntered(true), 10);
    }, 0);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      try {
        previouslyFocused.current?.focus();
      } catch (e) {}
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${entered ? "bg-black/85 opacity-100" : "bg-black/0 opacity-0"}`}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        className={`
          w-full md:max-w-5xl
          bg-slate-900 outline-none
          rounded-2xl mx-2 md:mx-8
          overflow-hidden
          transition-transform duration-300
          ${entered ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header strip — close button never overlaps the image */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 rounded-t-2xl border-b border-slate-700/50">
          <span className="text-sm font-medium text-slate-300 truncate pr-4">{ariaLabel}</span>
          <button
            onClick={onClose}
            className="flex-shrink-0 flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors"
            style={{ width: 36, height: 36 }}
            aria-label="Close gallery"
          >
            ✕
          </button>
        </div>

        {/* Image viewer */}
        <ImageViewer
          images={images}
          autoPlay={false}
          thumbnails={true}
          ariaLabel={ariaLabel}
          slideClass="w-full object-contain max-h-[72vh] md:max-h-[78vh] mx-auto"
          initialIndex={initialIndex}
        />
      </div>
    </div>,
    document.body
  );
}
