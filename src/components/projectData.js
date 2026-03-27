import img from "../assets/imageManifest.js";

const projects = [
  {
    id: 7,
    name: "SemesterShiftBuilder ",
    technologies: "React, TypeScript, Node.js, Express.js, MongoDB, JWT",
    image:
      img[
        "student-scheduler/schedule-builder-manager-student-schedules-view-1.png"
      ],
    images: [
      {
        src: img[
          "student-scheduler/schedule-builder-manager-student-schedules-view-1.png"
        ],
        caption: "Manager schedule view",
      },
      {
        src: img[
          "student-scheduler/schedule-builder-manager-student-schedules-view-2.png"
        ],
        caption: "Manager schedule view (2)",
      },
      {
        src: img[
          "student-scheduler/schedule-builder-manager-student-schedules-view-3.png"
        ],
        caption: "Manager schedule view (3)",
      },
      {
        src: img[
          "student-scheduler/schedule-builder-manager-student-schedules-view-4.png"
        ],
        caption: "Manager schedule view (4)",
      },
      {
        src: img[
          "student-scheduler/schedule-builder-manager-student-schedules-view-5.png"
        ],
        caption: "Manager schedule view (5)",
      },
      {
        src: img[
          "student-scheduler/schedule-builder-manager-student-schedules-view-6.png"
        ],
        caption: "Manager schedule view (6)",
      },
      {
        src: img[
          "student-scheduler/schedule-builder-manager-student-schedules-view-7.png"
        ],
        caption: "Manager schedule view (7)",
      },
      {
        src: img["student-scheduler/builder-1.png"],
        caption: "Schedule builder (1)",
      },
      {
        src: img["student-scheduler/builder-2.png"],
        caption: "Schedule builder (2)",
      },
      {
        src: img["student-scheduler/builder-3.png"],
        caption: "Schedule builder (3)",
      },
      {
        src: img["student-scheduler/builder-4.png"],
        caption: "Schedule builder (4)",
      },
      {
        src: img["student-scheduler/student-view-1.png"],
        caption: "Student availability form (1)",
      },
      {
        src: img["student-scheduler/student-view-2.png"],
        caption: "Student availability form (2)",
      },
      {
        src: img["student-scheduler/student-view-3.png"],
        caption: "Student availability form (3)",
      },
      {
        src: img["student-scheduler/student-view-4.png"],
        caption: "Student availability form (4)",
      },
      {
        src: img["student-scheduler/student-view-5.png"],
        caption: "Student availability form (5)",
      },
    ],
    github: "",
    description: `A web-based scheduling tool designed for university managers and coordinators. Gathering student availability for a semester schedule is often a time-consuming process—chasing down responses, manually cross-referencing spreadsheets, and piecing together a schedule that works for everyone. This application replaces that workflow entirely.

  Students submit their availability once through an interactive weekly grid, and managers get a single dashboard to review every submission, apply scheduling rules, and build out the semester schedule—no Excel sheets, no back-and-forth emails. The focus is on getting the schedule right the first time, resulting in a faster, less stressful process for coordinators and a simpler, clearer experience for students.`,
    features: [
      "Drag-and-drop availability grid — students submit weekly schedules in minutes, on any device",
      "Smart manager dashboard — view, filter, and compare all submissions across multiple locations from one screen",
      "AI-assisted scheduling — generate optimized shift assignments instantly based on student preferences and configurable rules",
      "Multi-location support — manage separate schedules, rules, and drafts per facility without overlap",
      "Draft management — save and revisit up to 10 schedule versions per location, with timestamps",
      "Fully configurable — managers control active days, operational hours, availability types, and scheduling constraints",
      "Built for real use — confirmation flows, error recovery, and live feedback keep both students and managers unblocked",
      "Effortless schedule builder — managers can assign shifts, adjust coverage, and experiment with scenarios in just a few clicks",
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
    image: img["fitness-tracker/screenshot.png"],
    images: [
      {
        src: img["fitness-tracker/screenshot.png"],
        caption: "Main dashboard screenshot",
      },
    ],
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
    image: img["hsl-dashboard/cms-hsl-pic.png"],
    images: [
      {
        src: img["hsl-dashboard/cms-hsl-pic.png"],
        caption: "Library dashboard",
      },
      {
        src: img["hsl-dashboard/card-cover.png"],
        caption: "Card cover example",
      },
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
    image: img["kwartler-lab/screenshot.png"],
    images: [
      {
        src: img["kwartler-lab/screenshot.png"],
        caption: "Kwartler Research Lab website",
      },
    ],
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
  // {
  //   id: 5,
  //   name: "Landing Page Template",
  //   technologies: "HTML, CSS, JavaScript. Tailwind, React.js",
  //   image: brainwaveImage,
  //   images: [brainwaveImage],
  //   github: "https://dthom26.github.io/landing-page-example/",
  //   description:
  //     "A modern, responsive landing page template for startups and SaaS products.",
  // },
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
