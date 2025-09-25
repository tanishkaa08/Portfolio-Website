'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from "@formspree/react";
import { FaCheckCircle, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [state, handleSubmit] = useForm("xzzjzakp");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container bg-white/50 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl text-blue-950 font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-blue-950 mb-4">Get in Touch</h3>
              <p className="text-pink-800 text-xl mb-8 leading-relaxed">
                I&apos;m currently open to new opportunities and collaborations. Feel free to send me a message about anything you want to discuss.
              </p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://github.com/tanishkaa08" target="_blank" rel="noopener noreferrer" className="text-black hover:text-highlight transition-colors"><FaGithub size={28} /></a>
                <a href="https://www.linkedin.com/in/tanishka-nibariya-4390a428b/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-highlight transition-colors"><FaLinkedin size={28} /></a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-highlight transition-colors"><FaDiscord size={28} /></a>
              </div>
            </div>

            <div className="bg-secondary/50 backdrop-blur-sm border-2 border-accent/30 p-8 rounded-2xl shadow-lg" suppressHydrationWarning>
              {hasMounted && state.succeeded ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                  <FaCheckCircle className="text-green-800 mx-auto text-5xl mb-4" />
                  <p className="text-xl font-semibold">Thanks for your message!</p>
                  <p className="text-gray-400">I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" suppressHydrationWarning>
                    <div className="relative">
                      <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                     
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 pr-10 rounded bg-background border-1 border-accent/50 focus:border-highlight focus:ring-2 focus:ring-highlight/50 focus:outline-none transition-all duration-300"
                        required
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                     
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 pr-10 rounded bg-background border-1 border-accent/50 focus:border-highlight focus:ring-2 focus:ring-highlight/50 focus:outline-none transition-all duration-300"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full p-3 rounded bg-background border-1 border-accent/50 focus:border-highlight focus:ring-2 focus:ring-highlight/50 focus:outline-none transition-all duration-300"
                      required
                    ></motion.textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                  </div>
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={state.submitting}
                      className="bg-highlight text-pink-800 border font-bold py-3 px-8 rounded-lg shadow-lg shadow-highlight/30 hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
                    >
                      {hasMounted && (state.submitting ? 'Sending...' : 'Get in Touch')}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
