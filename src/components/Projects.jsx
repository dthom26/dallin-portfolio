import Button from "./Button";
import useScrollReveal, { scrollRevealClass } from "../hooks/useScrollReveal";
import useScrollRevealOnce from "../hooks/useScrollRevealOnce";
import Popup from "./Popup";
import projects from "./projectData";
import { Info } from "lucide-react";
import React from "react";
function ProjectCard({ project, idx, onInfo }) {
  const [cardVisible, cardRef] = useScrollRevealOnce({ threshold: 0.2 });
  return (
    <div
      ref={cardRef}
      className={`bg-slate-800/80 border border-sky-400/20 rounded-xl p-6 shadow-lg shadow-blue-900/30 hover:bg-slate-800/90 transition hover:shadow-lg transform duration-500 hover:scale-105 max-w-full relative
        ${
          cardVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-8"
        }`}
      style={{ transitionDelay: `${idx * 0.1}s` }}
    >
      <button
        className="absolute top-4 right-4 text-sky-300 hover:text-white bg-slate-700 rounded-full p-2 shadow"
        onClick={() => onInfo(project)}
        aria-label="More Info"
      >
        <Info className="w-5 h-5" />
      </button>
      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />
      <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
      <p className="text-gray-400 mb-4">{project.technologies}</p>
      <div className="flex justify-center">
        <Button href={project.github} title={"See Project"} />
      </div>
    </div>
  );
}

export default function Projects({ onInfo }) {
  const [isVisible, ref] = useScrollReveal({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`text-white py-12 md:py-16 ${scrollRevealClass} ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
      id="projects"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              onInfo={onInfo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
