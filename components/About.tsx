'use client';
import React from 'react';
import { motion } from 'framer-motion';

const aboutText = "I am a 3rd year student at IIITDM Jabalpur, interested in developing real-world useful applications and projects. As an active open-source contributor, I enjoy optimizing performance, enhancing user experience, and solving meaningful problems through clean, efficient code.";

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
    <section id="about" className="py-20 bg-white/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-blue-950 text-left mb-8">About Me</h2>
          <motion.p
            className="max-w-3xl text-left text-xl leading-relaxed text-pink-800"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            {aboutText.split(" ").map((word, index) => (
              <motion.span key={word + "-" + index} variants={letter} className="inline-block mr-[0.3em]">
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
