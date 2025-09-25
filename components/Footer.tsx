'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors duration-300"><FaGithub size={30} /></motion.a>
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors duration-300"><FaLinkedin size={30} /></motion.a>
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors duration-300"><FaTwitter size={30} /></motion.a>
        </div>
        <p>&copy; {new Date().getFullYear()} Tanishka Nibariya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
