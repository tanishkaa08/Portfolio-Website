'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDiscord, FaFileDownload } from 'react-icons/fa';

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
    <section id="hero" className="h-screen flex items-center bg-[#FDECF0]/50 justify-center text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-450 mb-4 bg-clip-text [font-family:'Lora'] text-[#F78A7E] bg-gradient-to-r from-highlight to-pink-400"
          animate={{
            y: [0, -8, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >Tanishka Nibariya</motion.h2>
        <motion.p variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl text-orange-800">Software Developer · Open Source · Systems</motion.p>
        <motion.p variants={itemVariants} className="mt-3 text-sm sm:text-base text-orange-800/80 max-w-xl mx-auto px-4">
          SoB&apos;26 @CoinSwap · C4GT&apos;25 @PlanetRead · SIH&apos;25 Grand Finalist · IIITDMJ&apos;27
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-8">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-highlight text-pink-800 border font-bold py-3 px-6 rounded-lg shadow-lg shadow-highlight/30 hover:bg-opacity-90 transition-all duration-300"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/Tanishka-Nibariya-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white/80 text-pink-800 border border-pink-800/20 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-white transition-all duration-300"
          >
            <FaFileDownload className="mr-2" /> Resume
          </motion.a>
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mt-8">
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://github.com/tanishkaa08" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-highlight transition-colors duration-300" aria-label="GitHub"><FaGithub size={30} /></motion.a>
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://www.linkedin.com/in/tanishka-nibariya-4390a428b/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-highlight transition-colors duration-300" aria-label="LinkedIn"><FaLinkedin size={30} /></motion.a>
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://discordapp.com/users/tanishkaa_08" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-highlight transition-colors duration-300" aria-label="Discord"><FaDiscord size={30} /></motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
