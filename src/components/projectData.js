import dashboard from "../assets/images/cms-hsl-pic.png";
import kwartler from "../assets/images/Screenshot_kwartler_lab.png";
import caffined from "../assets/images/caffiend-pic.png";
import chefAi from "../assets/images/chefAi.png";
import dragonSlayerImage from "../assets/images/dragon-slayer.png";
import brainwaveImage from "../assets/images/brainwaveImage.png";

const projects = [
  {
    id: 1,
    name: "Dashboard For Health Sciences Library at University of Houston",
    technologies: "HTML, CSS, JavaScript, React.JS, Chart.js",
    image: dashboard,
    github: "https://dthom26.github.io/hsl-custom-dashboard-/",
    description:
      "A custom dashboard for the Health Sciences Library, featuring interactive charts and data visualization for library analytics.",
    features: [
      "Interactive charts and graphs",
      "Custom data filters",
      "Responsive dashboard layout",
      "Exportable reports",
    ],
    skills: [
      "React",
      "Chart.js",
      "Data Visualization",
      "Responsive Design",
      "API Integration",
    ],
  },
  {
    id: 6,
    name: "Website for Kwartler Research Lab",
    technologies: "HTML, CSS, JavaScript, React.JS, Github",
    image: kwartler,
    github: "https://thekwartlerlab.com/",
    description:
      "A modern research lab website built with React, showcasing publications, team members, and research projects.",
    features: [
      "Team member profiles",
      "Publication showcase",
      "Custom CMS integration",
      "Mobile-friendly design",
    ],
    skills: ["React", "CSS", "Content Management", "Responsive Design"],
  },
  {
    id: 2,
    name: "Coffee Tracker Full Stack React App",
    technologies: "HTML, CSS, JavaScript, React.JS, Firebase",
    image: caffined,
    github: "https://dthom26.github.io/caffiend-coffee-tracker/",
    description:
      "Track your daily coffee intake and preferences with this full stack React and Firebase app.",
    features: [
      "User authentication",
      "Daily coffee log",
      "Firebase backend",
      "Statistics dashboard",
    ],
    skills: ["React", "Firebase", "Authentication", "State Management"],
  },
  {
    id: 3,
    name: "AI Chef Web App",
    technologies: "HTML, CSS, JavaScript, React.JS, Tailwind",
    image: chefAi,
    github: "https://dthom26.github.io/pocket-chef/",
    description:
      "Generate recipes and meal plans using AI, with a clean and responsive UI.",
    features: [
      "AI-powered recipe generation",
      "Ingredient input",
      "Markdown recipe formatting",
      "Smooth modal interactions",
    ],
    skills: [
      "React",
      "AI Integration",
      "API Calls",
      "Prompt Engineering",
      "UI/UX Design",
    ],
  },
  {
    id: 4,
    name: "Dragon Slayer (Text Based RPG)",
    technologies: "HTML, CSS, JavaScript",
    image: dragonSlayerImage,
    github: "https://dthom26.github.io/rpg-js/",
    description:
      "A text-based RPG game built with vanilla JavaScript, featuring turn-based combat and story progression.",
    features: [
      "Turn-based combat",
      "Story progression",
      "Inventory system",
      "Multiple endings",
    ],
    skills: ["JavaScript", "Game Logic", "State Management"],
  },
  {
    id: 5,
    name: "Landing Page Template",
    technologies: "HTML, CSS, JavaScript. Tailwind, React.js",
    image: brainwaveImage,
    github: "https://dthom26.github.io/landing-page-example/",
    description:
      "A modern, responsive landing page template for startups and SaaS products.",
  },
];

export default projects;
