import React from "react";
import useScrollReveal, { scrollRevealClass } from "../hooks/useScrollReveal";
import useScrollRevealOnce from "../hooks/useScrollRevealOnce";
import ProfilePic from "../assets/images/ProfilePic.png";
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";

function TechCard({ tech, idx }) {
  const [cardVisible, cardRef] = useScrollRevealOnce({ threshold: 0.2 });
  const Icon = tech.icon;
  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center transition-all duration-700
        ${
          cardVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-8"
        }`}
      style={{ transitionDelay: `${idx * 0.1}s` }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg mb-2 hover:scale-110 hover:shadow-2xl">
        {Icon ? (
          <Icon className="w-10 h-10 text-white" />
        ) : (
          <span className="text-white text-xl font-bold">?</span>
        )}
      </div>
      <span className="text-sm text-white font-medium text-center whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

export const About = () => {
  const [isVisible, ref] = useScrollReveal({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`text-white py-12 md:py-16 ${scrollRevealClass} ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
      id="aboutMe"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-72 aspect-[3/4] relative overflow-hidden mb-8 md:mb-0">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-full h-full rounded object-cover object-[50%_15%] scale-[0.95]"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-white mb-8">
              A passionate web developer dedicated to crafting interactive,
              user-friendly websites that prioritize fluid and engaging user
              experiences. With a background in Psychology, principles of human
              behavior and design are thoughtfully integrated into every
              project, ensuring digital experiences are not only visually
              appealing but also intuitive and impactful. Expertise lies in
              blending science and technology to build functional, user-centric
              web applications that bridge the gap between innovation and
              usability. Focused on developing solutions that resonate deeply
              with users, the goal is to create meaningful digital experiences
              through data-driven design and cutting-edge web development
              techniques.
            </p>
          </div>
        </div>
        {/* Technologies row below profile and about text */}
        <div className="space-y-8 mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {[
              { name: "HTML", key: "html", icon: FaHtml5 },
              { name: "CSS", key: "css", icon: FaCss3Alt },
              {
                name: "Tailwind CSS",
                key: "tailwind",
                icon: RiTailwindCssFill,
              },
              { name: "JavaScript", key: "js", icon: FaJs },
              { name: "React JS", key: "react", icon: FaReact },
              { name: "Node.js", key: "node", icon: FaNodeJs },
              { name: "Express", key: "express", icon: SiExpress },
              { name: "MongoDB", key: "mongodb", icon: BiLogoMongodb },
              { name: "Firebase", key: "firebase", icon: SiFirebase },
            ].map((tech, idx) => (
              <TechCard key={tech.key} tech={tech} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
