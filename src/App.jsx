import "./App.css";

import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import { Navbar } from "./components/Navbar.jsx";
import Popup from "./components/Popup.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import React from "react";

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
      <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        {/* Pass modal handlers to Projects */}
        <Projects onInfo={handleInfo} />
        <Contact />
        <Footer />
      </div>
      <Popup
        isOpen={popupOpen}
        onClose={handleClose}
        project={selectedProject}
      />
    </>
  );
}

export default App;
