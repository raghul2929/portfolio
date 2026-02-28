import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experienceData } from '../data';

// Helper function to dynamically map neutral default states -> glowing active states
const getThemeConfig = (id) => {
  switch (id) {
    case 2: // Personal Projects (Purple Theme)
      return {
        text: 'text-gray-400 group-hover:text-fuchsia-400 group-focus-within:text-fuchsia-400',
        bg: 'bg-white/5 group-hover:bg-fuchsia-500/10 group-focus-within:bg-fuchsia-500/10',
        border: 'border-white/10 group-hover:border-fuchsia-500/30 group-focus-within:border-fuchsia-500/30',
        glow: 'group-hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] group-focus-within:shadow-[0_0_20px_rgba(217,70,239,0.2)]',
        dotGlow: 'group-hover:shadow-[0_0_15px_2px_rgba(217,70,239,0.4)] group-focus-within:shadow-[0_0_15px_2px_rgba(217,70,239,0.4)]',
        dotBg: 'bg-gray-600 group-hover:bg-fuchsia-400 group-focus-within:bg-fuchsia-400',
        dotBorder: 'border-gray-500 group-hover:border-white group-focus-within:border-white',
        line: 'bg-fuchsia-500', // active tab underline
      };
    case 3: // BrewsZilla (Cyan Theme)
      return {
        text: 'text-gray-400 group-hover:text-cyan-400 group-focus-within:text-cyan-400',
        bg: 'bg-white/5 group-hover:bg-cyan-500/10 group-focus-within:bg-cyan-500/10',
        border: 'border-white/10 group-hover:border-cyan-500/30 group-focus-within:border-cyan-500/30',
        glow: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] group-focus-within:shadow-[0_0_20px_rgba(6,182,212,0.2)]',
        dotGlow: 'group-hover:shadow-[0_0_15px_2px_rgba(6,182,212,0.4)] group-focus-within:shadow-[0_0_15px_2px_rgba(6,182,212,0.4)]',
        dotBg: 'bg-gray-600 group-hover:bg-cyan-400 group-focus-within:bg-cyan-400',
        dotBorder: 'border-gray-500 group-hover:border-white group-focus-within:border-white',
        line: 'bg-cyan-400',
      };
    case 1: // Stepping Edge (Blue Theme)
    default:
      return {
        text: 'text-gray-400 group-hover:text-blue-400 group-focus-within:text-blue-400',
        bg: 'bg-white/5 group-hover:bg-blue-500/10 group-focus-within:bg-blue-500/10',
        border: 'border-white/10 group-hover:border-blue-500/30 group-focus-within:border-blue-500/30',
        glow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] group-focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2)]',
        dotGlow: 'group-hover:shadow-[0_0_15px_2px_rgba(59,130,246,0.4)] group-focus-within:shadow-[0_0_15px_2px_rgba(59,130,246,0.4)]',
        dotBg: 'bg-gray-600 group-hover:bg-blue-500 group-focus-within:bg-blue-500',
        dotBorder: 'border-gray-500 group-hover:border-white group-focus-within:border-white',
        line: 'bg-blue-500',
      };
  }
};

// Sub-component to handle tab state and dynamic theming
const ProjectCard = ({ projects, id, theme }) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentProject = projects[activeTab];

  return (
    <div className={`bg-[#11131a] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 ${theme.border}`}>
      {/* Interactive Tabs Header */}
      <div data-guide-id="experience-tabs" className="flex items-center gap-8 px-6 md:px-8 pt-5 border-b border-white/5 overflow-x-auto whitespace-nowrap hide-scrollbar">

        {projects.map((proj, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`pb-4 text-sm font-semibold transition-colors relative ${activeTab === idx ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
          >
            {proj.tabName}
            {/* Themed active underline */}
            {activeTab === idx && (
              <motion.div
                layoutId={`underline-${id}`}
                className={`absolute bottom-0 left-0 w-full h-0.5 ${theme.line}`}
              />
            )}
          </button>
        ))}
      </div>

      {/* Dynamic Card Content */}
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            {/* Themed Left Icon Box */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border backdrop-blur-md transition-all duration-500 ${theme.bg} ${theme.border}`}>
              <svg className={`w-6 h-6 transition-colors duration-500 ${theme.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <div>
              <h4 data-guide-id="experience-project-title" className="text-xl font-bold text-white mb-1">{currentProject.title}</h4>

              <p className="text-xs text-text-muted">{currentProject.subtitle}</p>
            </div>
          </div>

          {/* Glowing View Demo Button */}
          <button   data-guide-id="experience-demo-btn" onClick={() => window.open(currentProject.demoLink, '_blank')} className={`flex items-center gap-2 text-[11px] font-bold px-4 py-2.5 rounded-xl transition-all duration-500 border backdrop-blur-md hover:bg-white/5 ${theme.text} ${theme.bg} ${theme.border} ${theme.glow}`}>
            VIEW DEMO
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          {currentProject.description}
        </p>

        {/* Project Images */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
          {currentProject.images?.map((img, i) => (
            <div
              key={i}
              className="h-24 md:h-32 rounded-2xl border border-white/5 overflow-hidden"
            >
              <img
                src={img}
                alt={`project-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Tech Stack & Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h5 data-guide-id="experience-tech-stack"  className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Tech Stack</h5>
            <div className="flex flex-wrap gap-2">
              {currentProject.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-[#1c1f26] border border-white/5 rounded-lg text-xs text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Key Features</h5>
            <ul className="space-y-2">
              {currentProject.achievements.map((point, i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                  <span className={`transition-colors duration-500 mt-0.5 ${theme.text}`}>•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Button */}
        <button  data-guide-id="experience-details-btn" className="w-full py-3.5 mt-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-white transition-colors">
          {currentProject.linkText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};


const Experience = () => {
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] 
    });

    const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section data-guide-id="milestones" id="experience" className="section-padding relative z-10 w-full bg-background pt-20 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-24 flex flex-col items-center px-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          <span className="text-blue-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            Career Journey
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Experience & <span className="text-blue-400">Milestones</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
          A professional timeline cataloging my growth as a developer, from foundational education to engineering robust solutions.
        </p>
      </motion.div>

      {/* Main Timeline Container (Tracked by Framer Motion for scroll) */}
      <div ref={containerRef} className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-0">

        {/* The Static Background Vertical Line */}
        <div className="hidden md:block absolute left-[35%] top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full z-0"></div>

        {/* The Animated Fill Vertical Line (Grows based on scroll) */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="hidden md:block absolute left-[35%] top-0 bottom-0 w-[2px] bg-blue-600 -translate-x-1/2 rounded-full z-0"
        ></motion.div>

        <div className="flex flex-col gap-12 md:gap-24 relative z-10">
          {experienceData.map((item, index) => {
            const theme = getThemeConfig(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                // IMPORTANT: The "group" class here triggers the hover state for the dot AND the card simultaneously!
                className="relative group flex flex-col md:flex-row md:justify-between items-start gap-8 md:gap-0"
              >

                {/* Left Side: Role Info */}
                <div  data-guide-id="experience-timeline" className="w-full md:w-[30%] md:text-right flex flex-col md:items-end pt-2">
                  <span className={`inline-block px-4 py-1.5 text-[10px] md:text-xs font-bold rounded-full mb-4 border w-fit md:ml-auto uppercase tracking-widest transition-colors duration-500 ${theme.text} ${theme.bg} ${theme.border}`}>
                    {item.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.role}</h3>
                  <p className="text-gray-400 font-medium text-sm md:text-base mb-2">{item.company}</p>
                  {item.roleHighlight && (
                    <p className={`text-sm font-medium mb-3 transition-colors duration-500 ${theme.text}`}>{item.roleHighlight}</p>
                  )}
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm md:ml-auto">
                    {item.description}
                  </p>
                </div>

                {/* Center Timeline Dot - Now Perfectly positioned above the line with z-20 */}
                <div className="hidden md:flex absolute left-[35%] -translate-x-1/2 top-4 z-20 flex-col items-center justify-center">
                  <div className="relative flex items-center justify-center w-8 h-8">
                    {/* Outer glowing ring (Reacts to group hover) */}
                    <div className={`absolute inset-0 rounded-full bg-background border transition-all duration-500 ${theme.border} ${theme.dotGlow}`}></div>
                    {/* Inner dot (Reacts to group hover) */}
                    <div className={`relative w-2.5 h-2.5 rounded-full border-2 transition-colors duration-500 z-10 ${theme.dotBg} ${theme.dotBorder}`}></div>
                  </div>
                </div>

                {/* Right Side: Card */}
                <div className="w-full md:w-[60%]">
                  {item.isSimpleCard ? (
                    <div className="bg-[#11131a] border border-white/5 rounded-3xl p-5 md:p-8 hover:border-white/10 transition-colors">
                      <p className="text-gray-400 text-sm md:text-base mb-4">{item.cardData.description}</p>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 text-blue-400 text-xs font-bold rounded-lg border border-blue-500/20">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        {item.cardData.score}
                      </span>
                    </div>
                  ) : (
                    <ProjectCard projects={item.projects} id={item.id} theme={theme} />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;