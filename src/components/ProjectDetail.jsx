import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import projects from "./projectData";
import useScrollReveal, { scrollRevealClass } from "../hooks/useScrollReveal";
import useScrollRevealOnce from "../hooks/useScrollRevealOnce";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(projectId));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Scroll reveal hooks
  const [headerVisible, headerRef] = useScrollReveal({ threshold: 0.1 });
  const [imageVisible, imageRef] = useScrollRevealOnce({ threshold: 0.2 });
  const [descriptionVisible, descriptionRef] = useScrollRevealOnce({
    threshold: 0.2,
  });
  const [skillsVisible, skillsRef] = useScrollRevealOnce({ threshold: 0.2 });
  const [featuresVisible, featuresRef] = useScrollRevealOnce({
    threshold: 0.2,
  });
  const [ctaVisible, ctaRef] = useScrollRevealOnce({ threshold: 0.2 });

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">
          Sorry, the project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-emerald-400/20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-16">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`mb-12 ${scrollRevealClass} ${
            headerVisible ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {project.name}
          </h1>
          <p className="text-lg text-gray-400 mb-6">{project.technologies}</p>
        </div>

        {/* Project Image */}
        <div
          ref={imageRef}
          className={`mb-12 transition-all duration-1000 ${
            imageVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-8"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/30 border border-emerald-400/20">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
        </div>

        {/* Description Section */}
        <div
          ref={descriptionRef}
          className={`mb-12 transition-all duration-1000 ${
            descriptionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-slate-900/50 border border-emerald-400/20 rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              About This Project
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
          </div>
        </div>

        {/* Key Skills Section */}
        {project.skills && (
          <div
            ref={skillsRef}
            className={`mb-12 transition-all duration-1000 ${
              skillsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-slate-900/50 border border-emerald-400/20 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-emerald-400">
                Key Skills Demonstrated
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium hover:from-emerald-500/30 hover:to-teal-500/30 hover:scale-105 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {project.features && (
          <div
            ref={featuresRef}
            className={`mb-12 transition-all duration-1000 ${
              featuresVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-slate-900/50 border border-emerald-400/20 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-emerald-400">
                Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="text-emerald-400 mt-1 group-hover:scale-110 transition-transform">
                      ✓
                    </span>
                    <span className="text-gray-300 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div
          ref={ctaRef}
          className={`transition-all duration-1000 ${
            ctaVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-400/30 rounded-2xl p-8 md:p-10 text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in this project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Check out the live project or get in touch to discuss how I can
              build something similar for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
              )}
              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                  setTimeout(() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="flex items-center gap-2 bg-slate-800 border border-emerald-400/30 text-emerald-400 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Back to Projects Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium inline-flex items-center gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
