import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import MySkill from './components/MySkill';
import ContactMe from './components/ContactMe';
import Navbar from './components/Navbar';
import MySoftware from './components/MySoftware';
import './App.css';

function App() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <MySkill />
      <MySoftware />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
