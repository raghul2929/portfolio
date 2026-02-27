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
        <section id="contact" className="section-padding relative z-10 w-full bg-background pt-24 pb-32 overflow-hidden">
            {/* ... Background decoration divs remain exactly the same ... */}

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center px-6 md:px-0">
                
                {/* ... Left side text column remains exactly the same ... */}

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
