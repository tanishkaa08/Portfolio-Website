'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';

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
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-left mb-6">About Me</h2>
          <motion.p
            className="max-w-3xl text-left text-lg md:text-xl leading-relaxed text-pink-800"
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
          <motion.div
            className="mt-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.a href="https://drive.google.com/file/d/1OS41h6TudKc5jbMvavGdm20lj-9dm7Ph/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center bg-highlight text-pink-800 border font-bold py-3 px-6 rounded-lg shadow-lg shadow-highlight/30 hover:bg-opacity-90 transition-all duration-300">
              <FaFileDownload className="mr-2" /> Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
