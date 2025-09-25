'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { VscVscode, VscJson } from 'react-icons/vsc';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiGit,
  SiPython,
  SiCplusplus,

  SiFigma,
  SiUbuntu,
  SiGithub,
  SiAndroidstudio,
  SiAdobepremierepro,
  SiFlutter,
  SiExpress,
  
  SiMongodb,
  SiVite,
  SiFirebase,
  SiAppwrite,
  SiTypescript,
} from 'react-icons/si';

// --- Data Refactored for easier mapping ---
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      
      { name: 'C++', icon: <SiCplusplus size={40} className="text-[#00599C]" /> },
      { name: 'HTML5', icon: <FaHtml5 size={40} className="text-[#E34F26]" /> },
      { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-[#1572B6]" /> },
      { name: 'JavaScript', icon: <SiJavascript size={40} className="text-[#F7DF1E] bg-black" /> },
      { name: 'ExtendScript', icon: <VscJson size={40} className="text-[#F7DF1E]" /> },
      { name: 'Python', icon: <SiPython size={40} className="text-[#3776AB]" /> },
      { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-700" /> },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'VS Code', icon: <VscVscode size={40} className="text-[#007ACC]" /> },
      { name: 'Git', icon: <SiGit size={40} className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <SiGithub size={40} className="text-black" /> },
      { name: 'Vite', icon: <SiVite size={40} className="text-purple-500" /> },
      { name: 'Figma', icon: <SiFigma size={40} className="text-[#F24E1E]" /> },
      { name: 'Ubuntu', icon: <SiUbuntu size={40} className="text-[#E95420]" /> },
      { name: 'Android Studio', icon: <SiAndroidstudio size={40} className="text-[#3DDC84]" /> },
      { name: 'Premiere Pro', icon: <SiAdobepremierepro size={40} className="text-[#040433]" /> },
      { name: 'Firebase', icon: <SiFirebase size={40} className="text-yellow-400" /> },
      { name: 'Appwrite', icon: <SiAppwrite size={40} className="text-pink-500" /> },
      { name: 'TinyMCE', icon: <span className="text-sm font-bold bg-gray-200 py-1 px-2 rounded">TinyMCE</span> },
    ],
  },
  {
    title: 'Frameworks & Databases',
    skills: [
      { name: 'React', icon: <SiReact size={40} className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-black" /> },
      { name: 'Flutter', icon: <SiFlutter size={40} className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress size={40} className="text-gray-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
      { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-600" /> },
    ],
  },
];

// --- Updated, More Realistic Tape Component ---
const Tape = ({ rotation }: { rotation: string }) => (
    // Increased width slightly (w-28) to accommodate the torn edges
    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 z-10 ${rotation}`}>
      <div
        // Changed color slightly to bg-stone-200/50 for a better "masking tape" look
        className="absolute inset-0 bg-stone-200/50 backdrop-blur-sm"
        style={{
           // This clip-path creates the jagged "torn tape" effect on the left and right edges
           clipPath: 'polygon(3% 0%, 97% 0%, 100% 5%, 98% 15%, 100% 25%, 98% 35%, 100% 45%, 98% 55%, 100% 65%, 98% 75%, 100% 85%, 98% 95%, 100% 100%, 3% 100%, 0% 95%, 2% 85%, 0% 75%, 2% 65%, 0% 55%, 2% 45%, 0% 35%, 2% 25%, 0% 15%, 2% 5%)'
        }}
      >
        {/* SVG filter for a subtle grain/noise texture */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-25">
          <defs>
            <filter id="noise">
              {/* Increased numOctaves for a slightly richer texture */}
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- Main Skills Component ---
const Skills = () => {
  const cardRotations = ['-rotate-2', 'rotate-1', 'rotate-3'];
  const tapeRotations = ['rotate-3', '-rotate-6', 'rotate-1']; // Independent rotations for the tape

  return (
    <section id="skills" className="py-24 bg-[#FDECF0]/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold text-center mb-20 text-blue-950">My Tech Stack</h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-x-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`relative group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:!rotate-0 ${
                  cardRotations[index % cardRotations.length]
                }`}
              >
                <Tape rotation={tapeRotations[index % tapeRotations.length]} />

          
                <div className="bg-white p-5 pb-10 border-15 border-gray-200 rounded-sm shadow-lg ">
                  <h3 className="text-xl font-semibold text-center mb-6 text-pink-800">{category.title}</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-8 gap-x-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} title={skill.name} className="flex flex-col items-center text-center">
                        {skill.icon}
                        <p className="mt-1 text-xs font-medium text-gray-500">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;