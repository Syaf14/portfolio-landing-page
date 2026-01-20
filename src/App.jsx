import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import MyStatistic from './components/MyStatistic';
import MySkill from './components/MySkill';
import ContactMe from './components/ContactMe';
import Navbar from './components/Navbar';
import MySoftware from './components/MySoftware';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      {/* <Portfolio /> */}
      <MyStatistic />
      <MySoftware />
      <MySkill />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
