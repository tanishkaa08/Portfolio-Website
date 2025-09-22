'use client';
import React from 'react';
import { motion } from 'framer-motion';

const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-highlight">My Portfolio</h1>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer hover:text-highlight transition-colors duration-300"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
