'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    company: 'Acme Corp',
    role: 'Software Engineer',
    date: '2020 - Present',
    description: 'Worked on the development of the company\'s flagship product, using React, Node.js, and TypeScript.'
  },
  {
    company: 'Wonka Industries',
    role: 'Junior Developer',
    date: '2018 - 2020',
    description: 'Assisted in the development of internal tools and websites.'
  }
];

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(experiences[0]);

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Where I've Worked</h2>
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 min-h-[250px]">
            {/* Tabs */}
            <div className="flex md:flex-col border-b-2 md:border-b-0 md:border-l-2 border-accent">
              {experiences.map((exp) => (
                <button
                  key={exp.company}
                  className={`p-4 text-left w-full ${
                    exp.company === selectedTab.company
                      ? 'text-highlight bg-accent/50'
                      : 'text-gray-400 hover:bg-accent/30 hover:text-primary'
                  } transition-colors duration-300 relative`}
                  onClick={() => setSelectedTab(exp)}
                >
                  {exp.company}
                  {exp.company === selectedTab.company ? (
                    <motion.div className="absolute bottom-[-2px] left-0 right-0 h-[2px] md:h-auto md:w-[2px] md:bottom-0 md:top-0 md:-left-[2px] bg-highlight" layoutId="underline" />
                  ) : null}
                </button>
              ))}
            </div>
            {/* Content */}
            <div className="flex-1 p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab.company}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-bold">
                    {selectedTab.role}{' '}
                    <span className="text-highlight">@ {selectedTab.company}</span>
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{selectedTab.date}</p>
                  <p className="leading-relaxed">{selectedTab.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
