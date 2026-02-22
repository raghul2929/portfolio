import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section id="" className="relative w-full bg-background pt-20 pb-32 overflow-hidden z-10 border-t border-white/5">
      {/* Subtle Background Glow for the footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-t-full blur-[80px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
          Let's build the <br className="hidden md:block" />
          <span className="text-cyan-400">future</span> together.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12">
          {/* Glowing Cyan Button */}
          {/* <button   className="w-full sm:w-auto bg-cyan-400 text-black px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:bg-cyan-300 transition-all hover:scale-105">
            Let's Talk
          </button>
           */}
          {/* Outlined Contact Button */}
          <button  onClick={()=>window.location.hash="#contact"} className="w-full sm:w-auto bg-transparent border border-gray-600 text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/5 transition-all">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;