import React from 'react';
import Navbar from './component/Navbar';
import Hero from './section/Hero';
import './index.css';
import Experience from './section/Experience';
import About from './section/About';
import Arsenal from './section/Arsenal';
import Education from './section/Education';
import Footer from './section/Footer';
import Contact from './section/Contact';


function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30">
      <Navbar/>
      <main>
        <Hero />
        <Experience />
        <About></About>
        <Footer/>
        <Arsenal/>
        <Education/>
        <Contact/>
      </main>
      
    </div>
  );
}

export default App;