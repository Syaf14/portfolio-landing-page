import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import MySkill from './components/MySkill';
import ContactMe from './components/ContactMe';
import Navbar from './components/Navbar';
import MySoftware from './components/MySoftware';
import MyProjects from './components/MyProjects';
import ProjectGallery from './components/ProjectGallery';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutMe />
              <MyProjects />
              <MySkill />
              <MySoftware />
              <ContactMe />
              <Footer />            
            </>
          } />
          <Route path="/projects/:projectId/gallery" element={<ProjectGallery />} />
        </Routes>
      </div>      
    </Router>
  );
}

export default App;
