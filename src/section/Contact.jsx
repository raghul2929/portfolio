import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    // 1. Add state for the form fields and submission status
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    // 2. Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // 3. Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Send the data to your backend API
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section data-guide-id="contact" id="contact" className="section-padding relative z-10 w-full bg-background pt-24 pb-32 overflow-hidden">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center px-6 md:px-0">
                
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col"
                >
                    <h2 className="text-7xl md:text-[7rem] font-black leading-[0.85] tracking-tighter flex flex-col mb-8">
                        <span className="text-white">GET</span>
                        <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.15)] py-1">
                            IN
                        </span>
                        <span className="text-cyan-400 [text-shadow:0_0_30px_rgba(34,211,238,0.4)]">
                            TOUCH
                        </span>
                    </h2>

                    <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed mb-10 pl-1 border-l-2 border-white/10">
                        Have a vision? Let's build the extraordinary. I'm ready to collaborate on high-impact projects.
                    </p>

                    <div className="flex items-center gap-3 mb-10">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                        </span>
                        <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                            Based in Tamil Nadu, India
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group"
                >
                    <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-500/30 rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-[#11131a]/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 h-full flex flex-col">

                        <div className="flex items-center gap-3 mb-10">
                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <h3 className="text-xl font-bold text-white">Send a Message</h3>
                        </div>

                        {/* 4. Update the form to use the new submit handler */}
                        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                            <div className="relative">
                                {/* Add value and onChange to inputs */}
                                <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors peer" />
                            </div>
                            <div className="relative">
                                <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors peer" />
                            </div>
                            <div className="relative mb-4">
                                <textarea id="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows="4" className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none peer"></textarea>
                            </div>

                            <button type="submit" disabled={status === 'loading'} className="ml-auto bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] disabled:opacity-70 disabled:hover:scale-100">
                                {/* 5. Show different text based on status */}
                                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                                {status !== 'loading' && status !== 'success' && (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                )}
                            </button>
                            
                            {status === 'error' && <p className="text-red-400 text-sm text-right">Failed to send. Please try again later.</p>}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
