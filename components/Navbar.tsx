'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrambleText, { ScrambleTextHandle } from '@/components/ScrambleText';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const scrambleRef = useRef<ScrambleTextHandle>(null);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Find the last section that is in the viewport
      const currentSection = [...navLinks].reverse().find((link) => {
        const section = document.getElementById(link.href.substring(1));
        // Adjust the offset to ensure the correct section is highlighted
        return section && section.offsetTop <= window.scrollY + window.innerHeight / 2;
      });

      setActiveSection(currentSection?.href || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run on mount to set initial state
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-lg transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="#hero"
          className="text-2xl font-bold"
          onFocus={() => scrambleRef.current?.scramble()}
          onBlur={() => scrambleRef.current?.reset()}
        >
          <ScrambleText ref={scrambleRef} text="Tanishka Nibariya" className="md:hidden text-pink-800 font-light text-2xl hover:text-highlight transition-colors [font-family:'Lora']" />
          <ScrambleText ref={scrambleRef} text="Tanishka Nibariya - Junior Year" className="hidden md:inline text-pink-800 font-light text-3xl hover:text-highlight transition-colors [font-family:'Lora']" />
        </Link>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
                hasMounted && activeSection === link.href
                  ? 'bg-pink-800 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-pink-800 hover:text-highlight'
              }`}
              animate={{ scale: hasMounted && activeSection === link.href ? 1.1 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >{link.name}</motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;