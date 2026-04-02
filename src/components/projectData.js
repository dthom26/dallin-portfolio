import img from "../assets/imageManifest.js";

const projects = [
  {
    id: 7,
    slug: "student-scheduler",
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
    slug: "fitness-tracker",
    name: "Workout log Application",
    technologies: "React, Firebase, Firestore, Vite, JavaScript",
    image: img["fitness-tracker/workout-app-home.png"],
    images: [
      {
        src: img["fitness-tracker/workout-app-home.png"],
        caption: "Main dashboard screenshot",
      },
      {
        src: img["fitness-tracker/workout-app-create-one.png"],
        caption: "Program builder screenshot step 1",
      },
      {
        src: img["fitness-tracker/workout-app-create-two.png"],
        caption: "Program builder screenshot (exercise selection)",
      },
      {
        src: img["fitness-tracker/workout-app-create-three.png"],
        caption: "",
      },
      {
        src: img["fitness-tracker/workout-app-create-four.png"],
        caption: "",
      },
      {
        src: img["fitness-tracker/workout-app-create-five.png"],
        caption: "",
      },
      {
        src: img["fitness-tracker/workout-app-create-six.png"],
        caption: "",
      },
      {
        src: img["fitness-tracker/workout-app-create-seven.png"],
        caption: "",
      },
      {
        src: img["fitness-tracker/workout-app-create-ten.png"],
        caption: "",
      },
      {
        src: img["fitness-tracker/workout-app-create-eleven.png"],
        caption: "",
      },
      {
        src: img["fitness-tracker/workout-app-create-twelve.png"],
        caption: "",
      },
      {
        src: img["fitness-tracker/workout-app-create-thirteen.png"],
      },
      {
        src: img["fitness-tracker/workout-app-session.png"],
      },
      {
        src: img["fitness-tracker/workout-app-notes.png"],
      },
      {
        src: img["fitness-tracker/workout-app-session-two.png"],
      },
      {
        src: img["fitness-tracker/workout-app-session-prev.png"],
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
      "User authentication (Google Sign-In)",
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
  // {
  //   id: 1,
  //   name: "Dashboard For Health Sciences Library at University of Houston",
  //   technologies: "HTML, CSS, JavaScript, React.JS, Chart.js",
  //   image: img["hsl-dashboard/cms-hsl-pic.png"],
  //   images: [
  //     {
  //       src: img["hsl-dashboard/cms-hsl-pic.png"],
  //       caption: "Library dashboard",
  //     },
  //     {
  //       src: img["hsl-dashboard/card-cover.png"],
  //       caption: "Card cover example",
  //     },
  //   ],
  //   github: "https://dthom26.github.io/hsl-custom-dashboard-/",
  //   description:
  //     "A custom dashboard for the Health Sciences Library, featuring interactive charts and data visualization for library analytics.",
  //   features: [
  //     "Interactive charts and graphs",
  //     "Custom data filters",
  //     "Responsive dashboard layout",
  //     "Exportable reports",
  //   ],
  //   skills: [
  //     "React",
  //     "Chart.js",
  //     "Data Visualization",
  //     "Responsive Design",
  //     "API Integration",
  //   ],
  // },
  {
    id: 6,
    slug: "kwartler-lab",
    name: "Website for the Kwartler Research Lab",
    technologies: "HTML, CSS, JavaScript, React.JS, Github",
    image: img["kwartler-lab/screenshot.png"],
    images: [
      {
        src: img["kwartler-lab/screenshot.png"],
        caption: "Kwartler Research Lab website",
      },
      {
        src: img["kwartler-lab/lab-site-two.png"],
        caption: "",
      },
      {
        src: img["kwartler-lab/lab-site-three.png"],
        caption: "",
      },
      {
        src: img["kwartler-lab/lab-site-four.png"],
        caption: "",
      },
      {
        src: img["kwartler-lab/lab-site-five.png"],
        caption: "",
      },
      {
        src: img["kwartler-lab/lab-site-six.png"],
        caption: "",
      },
      {
        src: img["kwartler-lab/lab-site-seven.png"],
        caption: "",
      },
      {
        src: img["kwartler-lab/lab-site-popup.png"],
        caption: "",
      },
      {
        src: img["kwartler-lab/lab-site-news.png"],
        caption: "",
      },
      {
        src: img["kwartler-lab/lab-site-group.png"],
        caption: "",
      },
      {
        src: img["kwartler-lab/lab-site-footer.png"],
        caption: "",
      },
    ],
    github: "https://thekwartlerlab.com/",
    description:
      "The Kwartler Research Lab website was designed to showcase the team’s discoveries, projects, publications, and the stories of its members. With an emphasis on usability and visual appeal, the site reflects the lab’s culture while maintaining a clean, intuitive design. Practical features—such as card popups that reveal additional information about lab members—enhance the user experience without adding clutter or making the interface feel cramped.",
    features: [
      "Dynamic team directory with photos, roles, and bios—easy to browse and visually engaging.",
      "Interactive project showcase with detailed descriptions and images for each project.",
      "Responsive, mobile-first design—site looks and works great on phones, tablets, and desktops.",
      "Fast-loading pages—smooth navigation and quick access to content.",
      "Custom branding and visuals—distinctive colors, logos, and layouts that reflect the lab’s identity.",
      "Accessible navigation and clear structure—easy for all users to find information.",
      "Integrated media—photos, publication links, and project visuals enhance the browsing experience.",
    ],
    skills: ["React", "CSS", "Content Management", "Responsive Design"],
  },
  {
    id: 5,
    slug: "buff-asian-shopify",
    name: "Fitness Clothing Brand Shopify Store",
    technologies: "Shopify, Liquid, HTML, CSS, JavaScript",
    image: img["buff-asian-shopify/buffasian-hero.png"],
    images: [
      {
        src: img["buff-asian-shopify/buffasian-hero.png"],
        caption: "Buff Asian Shopify store homepage",
      },
      {
        src: img["buff-asian-shopify/buffasian-product-page.png"],
        caption: "Buff Asian product page",
      },
      {
        src: img["buff-asian-shopify/buffasian-mobile-one.png"],
        caption: "Buff Asian mobile view",
      },
      {
        src: img["buff-asian-shopify/buffasian-mobile-two.png"],
        caption: "Buff Asian mobile view (2)",
      },
      {
        src: img["buff-asian-shopify/buffasian-mobile-three.png"],
        caption: "Buff Asian mobile view (3)",
      },
      {
        src: img["buff-asian-shopify/buffasian-mobile-four.png"],
        caption: "Buff Asian mobile view (4)",
      },
    ],
    github: "https://buffasian.shop/",
    description:
      "A custom Shopify store for a fitness clothing brand, designed with a strong focus on brand identity. Every detail—from layout and theme to typography and UX—was intentionally crafted to reflect the brand’s style and values. The result is a clean, engaging experience that not only showcases the products but also builds trust and confidence",
    features: [
      "Custom Shopify theme development",
      "Modular theme sections with intuitive admin controls",
      "Fully responsive design across mobile and desktop",
      "Custom product page layouts and functionality",
      "User experience design aligned with brand identity",
    ],
    skills: ["Shopify Theme Development", "UX/UI Design"],
  },
];

export default projects;
