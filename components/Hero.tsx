'use client';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-highlight to-cyan-400"
          animate={{
            y: [0, -8, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >John Doe</motion.h2>
        <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-gray-400">Software Engineer & Web Developer</motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
