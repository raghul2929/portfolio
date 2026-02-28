import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data';

const getTheme = (color) => {
  switch (color) {
    case 'purple':
      return { text: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/20', cardLeftBorder: 'border-l-fuchsia-500', icon: 'text-fuchsia-400' };
    case 'blue':
      return { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', cardLeftBorder: 'border-l-blue-500', icon: 'text-blue-400' };
    case 'cyan':
    default:
      return { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', cardLeftBorder: 'border-l-cyan-400', icon: 'text-cyan-400' };
  }
};

const Education = () => {
  return (
    <section  data-guide-id="journey" className="section-padding relative z-10 w-full bg-background pt-24 pb-32">
      {/* Added px-6 md:px-0 right here! */}
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            Education <span className="text-cyan-400">Journey</span>
          </h2>
        </motion.div>

        <div className="relative pl-6 md:pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-cyan-900/40 rounded-full"></div>

          <div className="flex flex-col gap-6 md:gap-8">
            {educationData.map((item, index) => {
              const theme = getTheme(item.theme);

              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[29px] md:-left-[37px] top-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-background border-2 z-10 shadow-[0_0_10px_currentColor] flex items-center justify-center" style={{ color: theme.text.replace('text-', '') }}>
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${theme.icon.replace('text-', 'bg-')}`}></div>
                  </div>

                  <div className={`bg-[#11131a] border border-white/5 border-l-4 ${theme.cardLeftBorder} rounded-r-2xl rounded-l-md p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#161821] transition-colors`}>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        <svg className={`w-6 h-6 ${theme.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                        {item.degree}
                      </h3>
                      <p className="text-sm text-gray-400 mb-1">{item.major}</p>
                      <p className="text-xs text-gray-500">{item.school}</p>
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${theme.bg} ${theme.text} ${theme.border}`}>
                        {item.date}
                      </span>
                      <span className="text-sm text-gray-400 font-medium">
                        Score: {item.score}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;