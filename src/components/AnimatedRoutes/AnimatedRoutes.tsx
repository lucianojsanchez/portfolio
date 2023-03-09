import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../views/Home";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import ProjectDetail from "../Projects/ProjectDetail/ProjectDetail";
import Contact from "../Contact/Contact";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
