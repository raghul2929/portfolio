import React from 'react';

const Hero = () => {
  return (
    // 1. Swapped min-h-screen for min-h-[100svh] for better mobile rendering
    // 2. Removed pt-20 to allow perfect vertical centering
    // 3. Added pb-32 md:pb-16 to prevent content from overlapping the absolute footer
    <section id="hero" className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pb-2 md:pb-16 overflow-hidden">
      
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Pill */}
      <div className="flex items-center gap-2 border border-white/10 bg-[#13151a]/50 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 z-10">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-blue-500 text-[10px] md:text-xs font-bold tracking-widest uppercase">
          Available for freelance
        </span>
      </div>

      {/* Typography - Smoothed out the scaling for 100% zoom */}
      <div className="text-center flex flex-col items-center z-10 w-full">
        <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-bold tracking-tighter leading-[0.85] text-white">
          SOFTWARE
        </h1>
        <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-bold tracking-tighter leading-[0.85] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.15)] pb-4 mt-2">
          ENGINEER
        </h1>
      </div>

      {/* Subtitle */}
      <p className="mt-4 md:mt-6 text-center text-text-muted max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed z-10">
        Crafting <span className="text-white font-medium">digital experiences</span> with immersive animations and bold typography. Based in Tamil Nadu, India.
      </p>

      {/* CTAs - Slightly reduced vertical padding so they don't look chunky at 100% */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 z-10 w-full sm:w-auto">
          <button  onClick={() => window.location.hash = "#experience"} className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
            View Experience 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
          <a href="/assests/Raghulk.pdf" download className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Resume
          </a>
        </div>

      {/* Bottom Footer Area */}
      <div className="absolute bottom-6 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4 z-10">
        
        {/* Social Icons */}
       {/* Social Icons */}
        <div className="flex items-center gap-4">
          
          {/* GitHub */}
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-[#13151a] flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-[#13151a] flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-[#13151a] flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              <path d="M16.5 14c-1.5-.5-2.5-1-2.5-1-.5-.5-.5-1-.5-1s.5-1.5 1-1.5-.5-2-1.5-2-2.5 1-2.5 2.5 1 2.5 2.5 4 4.5 2.5 4.5 2.5c1 0 1.5-.5 1.5-.5s-.5-1-1-1.5z"></path>
            </svg>
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="flex-col items-center gap-4 hidden md:flex">
          <span className="text-text-muted text-[10px] font-bold tracking-[0.2em] uppercase">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
        </div>

        {/* Location */}
        <div className="text-text-muted text-sm font-medium">
          Tamil Nadu, India
        </div>
      </div>
    </section>
  );
};

export default Hero;