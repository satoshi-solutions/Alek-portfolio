import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => (
  <div style={{
    backgroundImage: 'url(/images/back.png)', // Path to your PNG image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <footer className="relative opacity-80 bottom-0 left-0 w-full py-2 text-center bg-black text-white text-lg">
      Copyright © {new Date().getFullYear()} MJ
    </footer>
  </div>
);

export default App;