import "./App.css";
import { Routes, Route } from "react-router-dom";

import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import { Navbar } from "./components/Navbar.jsx";
import Popup from "./components/Popup.jsx";
import ImagePopup from "./components/ImagePopup.jsx";
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
  const [imagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [imagePopupData, setImagePopupData] = React.useState(null);

  // Handler to open modal from anywhere
  const handleInfo = (project) => {
    setSelectedProject(project);
    setPopupOpen(true);
  };
  const handleClose = () => {
    setPopupOpen(false);
    setSelectedProject(null);
  };

  // Listen for cross-component popup open events
  React.useEffect(() => {
    function onOpen(e) {
      const proj = e.detail;
      if (!proj) return;
      setSelectedProject(proj);
      setPopupOpen(true);
    }
    window.addEventListener("openProjectPopup", onOpen);
    return () => window.removeEventListener("openProjectPopup", onOpen);
  }, []);

  // Listen for image-only popup events
  React.useEffect(() => {
    function onOpenImage(e) {
      const payload = e.detail; // { images: [...], ariaLabel? }
      if (!payload) return;
      setImagePopupData(payload);
      setImagePopupOpen(true);
      // notify others that image popup opened
      window.dispatchEvent(
        new CustomEvent("imagePopupOpened", { detail: payload })
      );
    }
    window.addEventListener("openImagePopup", onOpenImage);
    return () => window.removeEventListener("openImagePopup", onOpenImage);
  }, []);

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
      <ImagePopup
        isOpen={imagePopupOpen}
        onClose={() => {
          setImagePopupOpen(false);
          setImagePopupData(null);
          window.dispatchEvent(new CustomEvent("imagePopupClosed"));
        }}
        images={imagePopupData?.images || []}
        ariaLabel={imagePopupData?.ariaLabel}
        initialIndex={imagePopupData?.initialIndex || 0}
      />
    </>
  );
}

export default App;
