import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data';

const About = () => {
  return (
    <section id="about"  data-guide-id="about" className="section-padding relative z-10 w-full bg-background pt-24 md:pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        // Added px-6 md:px-0 right here!
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-6 md:px-0"
      >
        {/* Left Side: Image with Giant Text */}
        <div className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden group border border-white/5">
          <img 
            src="/assets/aboutimg.jpg"
            alt="Profile" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent"></div>
          <h2 className="absolute bottom-4 md:bottom-8 left-6 md:left-8 text-6xl md:text-[5.5rem] font-extrabold text-white tracking-tighter leading-none z-10">
            ABOUT
          </h2>
        </div>

        {/* Right Side: The Profile Card */}
        <div className="bg-[#11131a] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center hover:border-white/10 transition-colors">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">The Profile</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{aboutData.role}</h3>
              <p className="text-gray-500 text-sm">{aboutData.location}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
          </div>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
            {aboutData.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-auto">
            {aboutData.tags.map((tag, idx) => (
              <span key={idx} className="px-4 py-2 bg-[#1c1f26] border border-white/5 rounded-full text-xs text-gray-300 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;