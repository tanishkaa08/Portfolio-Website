'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                className="w-full p-3 rounded bg-accent border-2 border-transparent focus:border-highlight focus:outline-none transition-colors"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                className="w-full p-3 rounded bg-accent border-2 border-transparent focus:border-highlight focus:outline-none transition-colors"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                rows={4}
                className="w-full p-3 rounded bg-accent border-2 border-transparent focus:border-highlight focus:outline-none transition-colors"
              ></motion.textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-highlight text-background font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
            >Send Message</motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
