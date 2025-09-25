'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    company: 'Acme Corp',
    role: 'Software Engineer',
    date: '2020 - Present',
    responsibilities: [
      'Led the development of the company\'s flagship product, using React, Node.js, and TypeScript.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
      'Mentored junior developers and conducted code reviews to ensure code quality.'
    ]
  },
  {
    company: 'Wonka Industries',
    role: 'Junior Developer',
    date: '2018 - 2020',
    responsibilities: [
      'Assisted in the development and maintenance of internal tools and websites.',
      'Worked closely with senior developers to implement new features and fix bugs.',
      'Gained experience with agile development methodologies and version control systems.'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = (isLeft: boolean): Variants => ({
  hidden: { opacity: 0, x: isLeft ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
});

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Where I&apos;ve Worked</h2>
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Vertical Timeline Bar */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-transparent via-highlight/50 to-transparent transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={exp.company}
                className={`mb-12 flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
                variants={itemVariants(isLeft)}
              >
                <div className={`w-1/2 ${isLeft ? 'pr-10' : 'pl-10'}`}>
                  <div className="relative bg-secondary/50 backdrop-blur-sm border border-accent/30 p-6 rounded-lg shadow-lg hover:border-highlight/50 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-highlight">{exp.role}</h3>
                    <p className="text-md font-semibold mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-4">{exp.date}</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                      {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                    </ul>
                  </div>
                </div>
                {/* Timeline Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary border-4 border-highlight rounded-full flex items-center justify-center z-10">
                  <FaBriefcase className="text-highlight" size={12} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
