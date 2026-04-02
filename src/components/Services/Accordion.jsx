import React, { createContext, useContext } from "react";
import { useAccordion } from "./useAccordion";

const AccordionContext = createContext(null);

export function Accordion({ children, multiple = true, defaultOpen = [] }) {
  const api = useAccordion({ multiple, defaultOpen });
  return (
    <AccordionContext.Provider value={api}>
      {children}
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, children }) {
  return (
    <div className="accordion-item" data-value={value}>
      {children}
    </div>
  );
}

export function AccordionHeader({ value, children }) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionHeader must be used inside Accordion");
  const { isOpen, toggle } = ctx;
  const open = isOpen(value);
  const id = `accordion-header-${value}`;
  const panelId = `accordion-panel-${value}`;
  return (
    <button
      type="button"
      id={id}
      aria-controls={panelId}
      aria-expanded={open}
      className="accordion-header"
      onClick={() => toggle(value)}
    >
      {children}
      <span className="accordion-icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

export function AccordionPanel({ value, children }) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionPanel must be used inside Accordion");
  const { isOpen } = ctx;
  const open = isOpen(value);
  const id = `accordion-panel-${value}`;
  const headerId = `accordion-header-${value}`;
  return (
    <div
      id={id}
      role="region"
      aria-labelledby={headerId}
      aria-hidden={!open}
      tabIndex={open ? 0 : -1}
      className={`accordion-panel ${open ? "open" : "closed"}`}
    >
      {children}
    </div>
  );
}

// Prefer named exports; consumers should import the specific components above.
