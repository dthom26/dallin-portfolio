import dashboard from "../assets/images/cms-hsl-pic.png";
import kwartler from "../assets/images/Screenshot_kwartler_lab.png";
import caffined from "../assets/images/caffiend-pic.png";
import chefAi from "../assets/images/chefAi.png";
import dragonSlayerImage from "../assets/images/dragon-slayer.png";
import brainwaveImage from "../assets/images/brainwaveImage.png";
import ScreenShot from "../assets/images/Screenshot.png";
import cardCoverPic from "../assets/images/card cover pic.png";

const projects = [
  {
    id: 7,
    name: "Student Scheduler - Full Stack Application",
    technologies: "React, TypeScript, Node.js, Express.js, MongoDB, JWT",
    image: cardCoverPic,
    github: "https://github.com/dthom26/student-scheduler",
    description:
      "A comprehensive full-stack scheduling application that enables students to submit weekly availability and allows managers to view and coordinate schedules across multiple students efficiently.",
    features: [
      "Dual role authentication system (Student & Manager)",
      "Interactive weekly availability grid with time slot selection",
      "Color-coded scheduling system (Available, Not Available, Class, Preferred Shift)",
      "Real-time manager dashboard for multi-student schedule coordination",
      "Single day and week view modes for flexibility",
      "Student filtering and search functionality",
      "Secure JWT token-based authentication",
      "MongoDB database for persistent data storage",
      "Deployed on GitHub Pages (frontend) and Render (backend)",
    ],
    skills: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "bcryptjs Password Hashing",
      "Helmet.js Security",
      "REST API Design",
      "Component Architecture",
      "Full-Stack Development",
      "Database Modeling",
      "Deployment & DevOps",
    ],
  },
  {
    id: 2,
    name: "Fitness Tracker Application (In Development)",
    technologies: "React, Firebase, Firestore, Vite, JavaScript",
    image: ScreenShot, // You'll want to update this image reference
    github: "https://dthom26.github.io/my-workout-tracker/",
    description:
      "A comprehensive workout tracking application that enables users to create custom fitness programs, track workout sessions, and monitor progress over time. Features a multi-step program builder, real-time session tracking with exercise completion status, and week-by-week workout organization with historical data comparison.",
    features: [
      "Custom workout program creation with multi-step builder",
      "Real-time session tracking with set/rep completion",
      "Week-by-week program organization and progression",
      "Previous session data comparison",
      "Firebase Firestore database integration",
      "User authentication (Email/Password & Google Sign-In)",
      "Exercise template management",
      "Dynamic workout editing and customization",
    ],
    skills: [
      "React",
      "Firebase",
      "Firestore Database",
      "Repository Pattern",
      "Data Modeling",
      "State Management",
      "React Router",
      "Authentication",
      "UI/UX Design",
      "Context API",
      "Form Validation",
    ],
  },
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
  // {
  //   id: 3,
  //   name: "Coffee Tracker Full Stack React App",
  //   technologies: "HTML, CSS, JavaScript, React.JS, Firebase",
  //   image: caffined,
  //   github: "https://dthom26.github.io/caffiend-coffee-tracker/",
  //   description:
  //     "Track your daily coffee intake and preferences with this full stack React and Firebase app.",
  //   features: [
  //     "User authentication",
  //     "Daily coffee log",
  //     "Firebase backend",
  //     "Statistics dashboard",
  //   ],
  //   skills: ["React", "Firebase", "Authentication", "State Management"],
  // },
  {
    id: 5,
    name: "Landing Page Template",
    technologies: "HTML, CSS, JavaScript. Tailwind, React.js",
    image: brainwaveImage,
    github: "https://dthom26.github.io/landing-page-example/",
    description:
      "A modern, responsive landing page template for startups and SaaS products.",
  },
  // {
  //   id: 4,
  //   name: "Dragon Slayer (Text Based RPG)",
  //   technologies: "HTML, CSS, JavaScript",
  //   image: dragonSlayerImage,
  //   github: "https://dthom26.github.io/rpg-js/",
  //   description:
  //     "A text-based RPG game built with vanilla JavaScript, featuring turn-based combat and story progression.",
  //   features: [
  //     "Turn-based combat",
  //     "Story progression",
  //     "Inventory system",
  //     "Multiple endings",
  //   ],
  //   skills: ["JavaScript", "Game Logic", "State Management"],
  // },
];

export default projects;
