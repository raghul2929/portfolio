import React, { useState } from 'react';
import GuideAgent from 'guideagent'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const switchLang = (lang) => {
    GuideAgent.setLang(lang);
  };
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 lg:px-24 flex items-center justify-between bg-background/80 backdrop-blur-lg border-b border-white/5">
      {/* Left: Logo */}
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-10 h-10  text-black flex items-center justify-center font-bold text-lg rounded-sm">
          <img src="/assets/logo1.jpg" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <span className="text-white font-bold tracking-widest text-xs md:text-sm uppercase">
          <a href="">Raghul</a>
        </span>
      </div>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex items-center gap-10 text-xs font-bold text-text-muted tracking-widest">
        <a href="#hero" className="hover:text-white transition-colors duration-300">HOME</a>
        <a href="#experience" className="hover:text-white transition-colors duration-300">EXPERIENCE</a>
        <a href="#about" className="hover:text-white transition-colors duration-300">ABOUT</a>
        <a href="#contact" className="hover:text-white transition-colors duration-300">CONTACT</a>
      </div>
      {/* <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <button onClick={() => switchLang('en')}
          style={{
            fontSize: '11px', padding: '4px 10px',
            background: 'transparent', color: '#94a3b8',
            border: '1px solid #334155', borderRadius: '4px',
            cursor: 'pointer'
          }}>EN</button>
        <button onClick={() => switchLang('ta')}
          style={{
            fontSize: '11px', padding: '4px 10px',
            background: 'transparent', color: '#94a3b8',
            border: '1px solid #334155', borderRadius: '4px',
            cursor: 'pointer'
          }}>TA</button>
        <button onClick={() => switchLang('hi')}
          style={{
            fontSize: '11px', padding: '4px 10px',
            background: 'transparent', color: '#94a3b8',
            border: '1px solid #334155', borderRadius: '4px',
            cursor: 'pointer'
          }}>HI</button>
      </div> */}
      {/* Right: CTA Button */}
      <div className="hidden md:block">
        <button onClick={() => window.location.hash = "#contact"} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
          Let's Talk
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#13151a] border-b border-white/5 flex flex-col items-center py-6 gap-6 md:hidden">
          <a href="#hero" className="text-text-muted hover:text-white text-sm font-bold tracking-widest">HOME</a>
          <a href="#experience" className="text-text-muted hover:text-white text-sm font-bold tracking-widest">EXPERIENCE</a>
          <a href="#about" className="text-text-muted hover:text-white text-sm font-bold tracking-widest">ABOUT</a>
          <a href="#contact" className="text-text-muted hover:text-white text-sm font-bold tracking-widest">CONTACT</a>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-semibold w-11/12">
            Let's Talk
          </button>
        </div>
      )}



    </nav>
  );
};

export default Navbar;