'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaNodeJs } from 'react-icons/fa';
import { VscVscode, VscJson } from 'react-icons/vsc';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiGit,
  SiPython,
  SiCplusplus,
  SiUbuntu,
  SiGithub,
  SiAndroidstudio,
  SiAdobepremierepro,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiKotlin,
  SiRust,
  SiExpo,
  SiSupabase,
  SiPostgresql,
  SiOpenjdk,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', icon: <SiCplusplus size={40} className="text-[#00599C]" /> },
      { name: 'Java', icon: <SiOpenjdk size={40} className="text-[#ED8B00]" /> },
      { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-700" /> },
      { name: 'Python', icon: <SiPython size={40} className="text-[#3776AB]" /> },
      { name: 'Kotlin', icon: <SiKotlin size={40} className="text-[#7F52FF]" /> },
      { name: 'Rust', icon: <SiRust size={40} className="text-[#DEA584]" /> },
      { name: 'ExtendScript', icon: <VscJson size={40} className="text-[#F7DF1E]" /> },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'VS Code', icon: <VscVscode size={40} className="text-[#007ACC]" /> },
      { name: 'Git', icon: <SiGit size={40} className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <SiGithub size={40} className="text-black" /> },
      { name: 'Ubuntu', icon: <SiUbuntu size={40} className="text-[#E95420]" /> },
      { name: 'Android Studio', icon: <SiAndroidstudio size={40} className="text-[#3DDC84]" /> },
      { name: 'Expo', icon: <SiExpo size={40} className="text-black" /> },
      { name: 'Premiere Pro', icon: <SiAdobepremierepro size={40} className="text-[#040433]" /> },
    ],
  },
  {
    title: 'Frameworks & Databases',
    skills: [
      { name: 'React', icon: <SiReact size={40} className="text-[#61DAFB]" /> },
      { name: 'React Native', icon: <SiReact size={40} className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-black" /> },
      { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress size={40} className="text-gray-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
      { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-700" /> },
      { name: 'Supabase', icon: <SiSupabase size={40} className="text-[#3ECF8E]" /> },
    ],
  },
];

const Tape = ({ rotation }: { rotation: string }) => (
    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 z-10 ${rotation}`}>
      <div
        className="absolute inset-0 bg-stone-200/50 backdrop-blur-sm"
        style={{
           clipPath: 'polygon(3% 0%, 97% 0%, 100% 5%, 98% 15%, 100% 25%, 98% 35%, 100% 45%, 98% 55%, 100% 65%, 98% 75%, 100% 85%, 98% 95%, 100% 100%, 3% 100%, 0% 95%, 2% 85%, 0% 75%, 2% 65%, 0% 55%, 2% 45%, 0% 35%, 2% 25%, 0% 15%, 2% 5%)'
        }}
      >
        <svg width="100%" height="100%" className="absolute inset-0 opacity-25">
          <defs>
            <filter id="noise">
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

const Skills = () => {
  const cardRotations = ['-rotate-2', 'rotate-1', 'rotate-3'];
  const tapeRotations = ['rotate-3', '-rotate-6', 'rotate-1'];

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
