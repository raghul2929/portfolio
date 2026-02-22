import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Pill */}
      <div className="flex items-center gap-2 border border-white/10 bg-[#13151a]/50 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 z-10">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-blue-500 text-[10px] md:text-xs font-bold tracking-widest uppercase">
          Available for freelance
        </span>
      </div>

      {/* Huge Typography */}
      <div className="text-center flex flex-col items-center z-10 w-full">
        <h1 className="text-[12vw] md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] text-white">
          SOFTWARE
        </h1>
        {/* OUTLINE TEXT EFFECT APPLIED HERE */}
        <h1 className="text-[12vw] md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.15)] pb-4 mt-2">
          ENGINEER
        </h1>
      </div>

      {/* Subtitle */}
      <p className="mt-6 md:mt-8 text-center text-text-muted max-w-2xl text-sm md:text-lg leading-relaxed z-10">
        Crafting <span className="text-white font-medium">digital experiences</span> with immersive animations and bold typography. Based in Tamil Nadu, India.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 z-10 w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
          View Experience 
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
        <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Resume
        </button>
      </div>

      {/* Bottom Footer Area */}
      <div className="absolute bottom-8 w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
        
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {[...Array(3)].map((_, i) => (
            <button key={i} className="w-12 h-12 rounded-full border border-white/10 bg-[#13151a] flex items-center justify-center hover:bg-white/10 transition-colors text-text-muted hover:text-white">
              <div className="w-5 h-5 bg-current rounded-full opacity-50"></div>
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-4 hidden md:flex">
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