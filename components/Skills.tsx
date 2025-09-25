'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiGit,
  SiPython,
  SiCplusplus,
  SiKotlin,
  SiFigma,
  SiUbuntu,
  SiGithub,
  SiAndroidstudio,
  SiAdobepremierepro,
  SiFlutter,
} from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';

const languages = [
  { name: 'Python', icon: <SiPython size={50} className="text-[#3776AB]" /> },
  { name: 'C++', icon: <SiCplusplus size={50} className="text-[#00599C]" /> },
  { name: 'HTML5', icon: <FaHtml5 size={50} className="text-[#E34F26]" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={50} className="text-[#1572B6]" /> },
  { name: 'JavaScript', icon: <SiJavascript size={50} className="text-[#F7DF1E]" /> },
  { name: 'Kotlin', icon: <SiKotlin size={50} className="text-[#7F52FF]" /> },
  { name: 'ExtendScript', icon: <VscJson size={50} className="text-[#F7DF1E]" /> },
];

const devTools = [
  { name: 'VS Code', icon: <VscVscode size={50} className="text-[#007ACC]" /> },
  { name: 'Figma', icon: <SiFigma size={50} className="text-[#F24E1E]" /> },
  { name: 'Ubuntu', icon: <SiUbuntu size={50} className="text-[#E95420]" /> },
  { name: 'GitHub', icon: <SiGithub size={50} className="text-black dark:text-white" /> },
  { name: 'Android Studio', icon: <SiAndroidstudio size={50} className="text-[#3DDC84]" /> },
  { name: 'Premiere Pro', icon: <SiAdobepremierepro size={50} className="text-[#040433]" /> },
  { name: 'Flutter', icon: <SiFlutter size={50} className="text-[#02569B]" /> },
];

const frameworks = [
  { name: 'React', icon: <SiReact size={50} className="text-[#61DAFB]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} className="text-[#06B6D4]" /> },
  { name: 'Git', icon: <SiGit size={50} className="text-[#F05032]" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={50} className="text-black dark:text-white" /> },
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
    <section id="skills" className="py-20 bg-secondary skills-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">Skills</motion.h2>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div variants={itemVariants} className="bg-background/50 border border-accent/20 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-8 text-highlight">Languages</h3>
              <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center" variants={containerVariants}>
                {languages.map((skill, index) => (
                  <motion.div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-accent/50 hover:scale-105" variants={itemVariants}>
                    <div>{skill.icon}</div>
                    <p className="mt-2 font-semibold">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-background/50 border border-accent/20 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-8 text-highlight">Developer Tools</h3>
              <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center" variants={containerVariants}>
                {devTools.map((skill, index) => (
                  <motion.div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-accent/50 hover:scale-105" variants={itemVariants}>
                    <div>{skill.icon}</div>
                    <p className="mt-2 font-semibold">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-background/50 border border-accent/20 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-8 text-highlight">Technologies & Frameworks</h3>
              <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center" variants={containerVariants}>
                {frameworks.map((skill, index) => (
                  <motion.div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-accent/50 hover:scale-105" variants={itemVariants}>
                    <div>{skill.icon}</div>
                    <p className="mt-2 font-semibold">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
