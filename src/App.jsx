import "./App.css";
import { Routes, Route } from "react-router-dom";

import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import { Navbar } from "./components/Navbar.jsx";
import Popup from "./components/Popup.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Reviews from "./Features/Reviews/Reviews.jsx";
import ServicesOverview from "./Features/Reviews/ServicesOverview/ServicesOverview.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import React from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ServicesOverview />
      <Experience />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  // Handler to open modal from anywhere
  const handleInfo = (project) => {
    setSelectedProject(project);
    setPopupOpen(true);
  };
  const handleClose = () => {
    setPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
      <Popup
        isOpen={popupOpen}
        onClose={handleClose}
        project={selectedProject}
      />
    </>
  );
}

export default App;
