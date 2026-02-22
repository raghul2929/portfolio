import React from 'react';
import { motion } from 'framer-motion';
import { arsenalData } from '../data';

const Arsenal = () => {
  return (
    <section className="section-padding relative z-10 w-full bg-background pt-16">
      {/* Added px-6 md:px-0 right here! */}
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            Technical <span className="text-cyan-400">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {arsenalData.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-[#11131a] border border-white/5 rounded-3xl p-6 md:p-8 overflow-hidden group hover:border-white/10 transition-all duration-300"
            >
              <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-[200px] h-[150px] blur-[60px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100 ${category.glowColor}`}></div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                  <p className="text-xs text-gray-500">{category.subtitle}</p>
                </div>
                <svg className={`w-6 h-6 ${category.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {category.id === 'frontend' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>}
                  {category.id === 'backend' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>}
                  {category.id === 'tools' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>}
                </svg>
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-[#1c1f26]/80 border border-white/5 hover:border-white/10 transition-colors">
                    <div className={`w-8 h-8 rounded-lg bg-black/50 flex items-center justify-center shrink-0 ${skill.iconColor}`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                      <p className="text-[10px] text-gray-500">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arsenal;