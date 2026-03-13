import dashboard from "../assets/images/cms-hsl-pic.png";
import kwartler from "../assets/images/Screenshot_kwartler_lab.png";
import caffined from "../assets/images/caffiend-pic.png";
import chefAi from "../assets/images/chefAi.png";
import dragonSlayerImage from "../assets/images/dragon-slayer.png";
import brainwaveImage from "../assets/images/brainwaveImage.png";
import ScreenShot from "../assets/images/Screenshot.png";
import cardCoverPic from "../assets/images/card cover pic.png";
import studentCalendarScheduleView from "../assets/images/student-calender-schedule-new.png";
import assignmentGridNew from "../assets/images/assignment-grid-new-1.png";
import assignmentGridNewTwo from "../assets/images/assignment-grid-new-2.png";
import assignmentGridNewThree from "../assets/images/assignment-grid-new-3.png";
import studentLogin from "../assets/images/student-access-1.png";
import studentForm from "../assets/images/student-access-2.png";
import studentFromFilledIn from "../assets/images/student-access-4.png";
const projects = [
  {
    id: 7,
    name: "Student Scheduler - Full Stack Application",
    technologies: "React, TypeScript, Node.js, Express.js, MongoDB, JWT",
    image: studentCalendarScheduleView,
    images: [
      { src: studentCalendarScheduleView, caption: "Calendar schedule view" },
      { src: assignmentGridNew, caption: "Assignment grid (week view)" },
      { src: assignmentGridNewTwo, caption: "Assignment grid (day view)" },
      { src: assignmentGridNewThree, caption: "Manager dashboard" },
      { src: studentLogin, caption: "Student login page" },
      { src: studentForm, caption: "Student availability form" },
      { src: studentFromFilledIn, caption: "Filled-in availability form" },
    ],
    github: "https://github.com/dthom26/student-scheduler",
    description:
      "A lightweight, web based scheduling application built for the Health Sciences Library at the University of Houston. It streamlines collecting student availability with an interactive weekly grid and gives managers a single, visual interface to filter by location, review submissions, and assemble weekly schedules quickly — reducing coordination time and missed shifts. Optimized for performance on phones and desktops, it improves manager efficiency while making student submissions fast and simple.",
    features: [
      "Interactive availability grid with touch-friendly drag/tap input",
      "Simple student onboarding (name, ID, location) for fast submissions",
      "Manager dashboard with authentication and location filters",
      "Visual assignment tools: range adjustment and calendar views",
      "Confirm modals and toast notifications for safe reversible actions",
      "Performance-focused UX: lazy loading, caching, optimistic updates",
      "Single-day and week modes with color-coded availability statuses",
      "Student filtering, search, and bulk manager actions",
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
    images: [{ src: ScreenShot, caption: "Main dashboard screenshot" }],
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
    images: [
      { src: dashboard, caption: "Library dashboard" },
      { src: cardCoverPic, caption: "Card cover example" },
    ],
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
    images: [kwartler],
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
    images: [brainwaveImage],
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
