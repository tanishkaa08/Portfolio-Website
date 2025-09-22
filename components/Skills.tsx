'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={50} /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} /> },
  { name: 'TypeScript', icon: <SiTypescript size={50} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={50} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} /> },
  { name: 'HTML5', icon: <FaHtml5 size={50} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={50} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={50} /> },
  { name: 'Git', icon: <FaGitAlt size={50} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">Skills</motion.h2>
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center" variants={containerVariants}>
            {skills.map((skill, index) => (
              <motion.div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-accent hover:scale-105" variants={itemVariants}>
                <div className="text-highlight">{skill.icon}</div>
                <p className="mt-2">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
