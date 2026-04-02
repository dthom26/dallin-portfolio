import React from "react";
import { Navbar } from "../Navbar.jsx";
import services from "../servicesData.js";
import { Accordion } from "./Accordion";
import ExpandableServiceCard from "./ExpandableServiceCard";
import useScrollRevealOnce from "../../hooks/useScrollRevealOnce";

function RevealCard({ service, index }) {
  const [isVisible, ref] = useScrollRevealOnce({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 0.15}s` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <ExpandableServiceCard service={service} index={index} />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6 md:px-12 py-16">
        <section className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-muted mt-6 md:mt-10">
            I offer a range of web development services—from custom websites and
            Shopify e-commerce stores to full-stack applications—each designed
            to solve real business problems and deliver lasting value.
          </p>
        </section>

        <section className="services-list max-w-4xl mx-auto">
          <Accordion multiple={true}>
            {services.map((s, i) => (
              <RevealCard key={s.slug} service={s} index={i} />
            ))}
          </Accordion>
        </section>
      </main>
    </>
  );
}
