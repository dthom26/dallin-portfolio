import Button from "./Button";
import dragonSlayerImage from "../assets/images/dragon-slayer.png";
import brainwaveImage from "../assets/images/brainwaveImage.png";
import nasaPod from "../assets/images/nasaPod.webp";
import chefAi from "../assets/images/chefAi.png";

const projects = [
  {
    id: 1,
    name: "Landing Page Template",
    technologies: "HTML, CSS, JavaScript. Tailwind, React.js",
    image: brainwaveImage,
    github: "https://dthom26.github.io/landing-page-example/",
  },
  {
    id: 2,
    name: "Dragon Slayer (Text Based RPG)",
    technologies: "HTML, CSS, JavaScript",
    image: dragonSlayerImage,
    github: "https://dthom26.github.io/rpg-js/",
  },
  {
    id: 3,
    name: "AI Chef Web App",
    technologies: "HTML, CSS, JavaScript, React.JS, Tailwind",
    image: chefAi,
    github: "https://dthom26.github.io/pocket-chef/",
  },
  {
    id: 4,
    name: "Nasa Photo of The Day Web App",
    technologies: "HTML, CSS, JavaScript, React.JS, Tailwind",
    image: nasaPod,
    github: "https://dthom26.github.io/nasa-picture-of-the-day/",
  },
  // {
  //   id: 5,
  //   name: "Shopify Site For Fitness Clothing Brand",
  //   technologies: "HTML, CSS, JavaScript, Liquid",
  //   image: null,
  //   github: "URL",
  // },
];
export const Projects = () => {
  return (
    <div className=" text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/80 border border-sky-400/20 rounded-xl p-6 shadow-lg shadow-blue-900/30 hover:bg-slate-800/90 transition hover:shadow-lg
                     transform transform-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              {/* <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </a> */}
              <div className="flex  justify-center">
                <Button href={project.github} title={"See Project"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
