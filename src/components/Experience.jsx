import useScrollReveal, { scrollRevealClass } from "../hooks/useScrollReveal";
import useScrollRevealOnce from "../hooks/useScrollRevealOnce";
import experienceData from "./experienceData";

function ExperienceCard({ exp, idx, align }) {
  const [cardVisible, cardRef] = useScrollRevealOnce({ threshold: 0.2 });
  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-16 z-10 ${
        align === "right" ? "md:flex-row-reverse" : ""
      } ${
        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } transition-all duration-700`}
    >
      {/* Card */}
      <div
        className={`w-full md:w-1/2 flex ${
          align === "right"
            ? "justify-start md:justify-end"
            : "justify-end md:justify-start"
        }`}
      >
        <div className="bg-slate-900/80 border border-emerald-400/20 rounded-xl p-4 md:p-6 shadow-lg shadow-emerald-900/30 max-w-xs sm:max-w-sm md:max-w-md w-full">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
            {exp.title}
          </h3>
          <div className="text-sm md:text-md text-blue-400 font-semibold mb-1">
            {exp.company}
          </div>
          <div className="text-xs md:text-sm text-gray-400 mb-3">
            {exp.date}
          </div>
          {Array.isArray(exp.description) ? (
            <ul className="list-disc pl-5 text-gray-300 text-sm md:text-base space-y-2">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="break-words leading-snug md:leading-normal"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300 text-sm md:text-base">
              {exp.description}
            </p>
          )}
        </div>
      </div>
      {/* Timeline dot */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full border-4 border-slate-900 z-20" />
    </div>
  );
}

const Experience = () => {
  const [isVisible, ref] = useScrollReveal({ threshold: 0.2 });
  return (
    <section
      ref={ref}
      className={`py-12 md:py-16 bg-transparent ${scrollRevealClass} ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
      id="experience"
    >
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Experience
        </h2>
        <div className="relative flex flex-col items-center">
          {/* Vertical timeline line with animation */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-500 z-0 ${
              isVisible ? "animate-timeline" : ""
            }`}
            style={{ height: isVisible ? "100%" : "0" }}
          />
          <div className="w-full">
            {experienceData.map((exp, idx) => (
              <ExperienceCard
                key={idx}
                exp={exp}
                idx={idx}
                align={idx % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
