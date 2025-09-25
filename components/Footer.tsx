'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6 text-center bg-white/30 text-pink-800">
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://github.com/tanishkaa08" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors duration-300"><FaGithub size={30} /></motion.a>
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://www.linkedin.com/in/tanishka-nibariya-4390a428b/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors duration-300"><FaLinkedin size={30} /></motion.a>
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors duration-300"><FaDiscord size={30} /></motion.a>
        </div>
        <p>&copy; {new Date().getFullYear()} Tanishka Nibariya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
