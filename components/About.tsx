'use client';
import React from 'react';
import { motion } from 'framer-motion';

const aboutText = "I am a passionate software engineer with a love for creating beautiful and functional web applications. I have experience with a variety of technologies and I am always eager to learn new things.";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <motion.p
            className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-gray-300"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {aboutText.split(" ").map((word, index) => (
              <motion.span key={word + "-" + index} variants={letter} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
