'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaGithub, FaYoutube, FaGoogleDrive, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiVite,
  SiJavascript,
  SiPython,
  SiFlutter,
  SiFirebase,
  SiAppwrite,
  SiExpress,
  SiMongodb,
  SiFastapi,
  SiPostgresql,
} from 'react-icons/si';

// --- UPDATED Technology Icon Mapping ---
const techIcons: { [key: string]: React.ReactNode } = {
  'React': <FaReact size={28} className="text-blue-500" />,
  'Node.js': <FaNodeJs size={28} className="text-green-500" />,
  'Tailwind CSS': <SiTailwindcss size={28} className="text-cyan-500" />,
  'Next.js': <SiNextdotjs size={28} className="text-black" />,
  'TypeScript': <SiTypescript size={28} className="text-blue-700" />,
  'Vite': <SiVite size={28} className="text-purple-500" />,
  'Express': <SiExpress size={28} className="text-gray-600" />,
  'MongoDB': <SiMongodb size={28} className="text-green-600" />,
  'Python': <SiPython size={28} className="text-yellow-500" />,
  'Flutter': <SiFlutter size={28} className="text-blue-400" />,
  'Firebase': <SiFirebase size={28} className="text-yellow-400" />,
  'FastAPI': <SiFastapi size={28} className="text-green-500" />,
  'PostgreSQL': <SiPostgresql size={28} className="text-blue-700" />,
  'Appwrite': <SiAppwrite size={28} className="text-pink-500" />,
  'JavaScript': <SiJavascript size={28} className="text-yellow-400 bg-black" />,
  'HTML': <FaHtml5 size={28} className="text-orange-600" />,
  'CSS': <FaCss3Alt size={28} className="text-blue-600" />,
  'TinyMCE': <span className="text-xs font-bold bg-gray-200 p-1 rounded">TinyMCE</span>,
  'ExtendScript': <span className="text-xs font-bold bg-gray-200 p-1 rounded">ExtendScript</span>,
  'Scripting': <span className="text-xs font-bold bg-gray-200 p-1 rounded">Scripting</span>,
};

// --- UPDATED Project Data ---
const projects = [
  {
    title: 'Subtitle Tool Extension for Adobe Premiere Pro',
    description: 'An extension designed to automate the subtitling workflow within Adobe Premiere Pro. It empowers video editors with three versatile modes: simple static subtitles, dynamic color-transitioning subtitles using MOGRTs, and dual-layer transliteration for multi-language projects. By integrating directly with the Premiere Pro timeline, this tool significantly reduces manual effort by 50% and enhances creative flexibility.',
    technologies: ['JavaScript', 'ExtendScript', 'HTML', 'CSS'],
    repoLink: 'https://github.com/PlanetRead/subtitle-tool-for-Adobe-Premier/tree/tanishka-subtitle-tool', 
    documentation: 'https://drive.google.com/drive/u/0/folders/1zLyE_IdBiHJirEAvhwn0mvu1AroG1b8s'
  },
  {
    title: 'Smart Hybrid Delivery',
    description: 'A hybrid drone delivery path planning system that optimizes last-mile routes using EVs and drones to reduce carbon emissions and calculate efficiency in real-time.',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    repoLink: 'https://github.com/harshiill/hybrid-drone-ev',
    liveLink: 'https://hybrid-drone-ev.vercel.app/',
    youtubeLink: 'https://www.youtube.com/watch?v=qvc7_PmT1xs' // Added youtube link
  },
  {
    title: 'Personal Portfolio Website',
    description: 'My personal portfolio to showcase my skills, experience, and projects. Built with Next.js and TypeScript, styled with Tailwind CSS, and animated with Framer Motion for a smooth, interactive user experience.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    repoLink: 'https://github.com/tanishkaa08/Portfolio-Website',
    liveLink: '#'
  },
  {
    title: 'Abhikalpan Techfest Website',
    description: 'Developed the official website for Abhikalpan, the annual tech fest of IIITDM Jabalpur. Built with Next.js and styled with Tailwind CSS for a responsive and modern user experience, improving user retention by 30%.',
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
    repoLink: 'https://github.com/RISHIKESHk07/Abhikalpan-website',
    liveLink: 'https://abhikalpan-website.vercel.app/'
  },
  {
    title: 'Smart Warehouse System',
    description: 'A web-controlled ESP32 system for smart warehouses, employing a WebSocket protocol for real-time communication between the client and hardware.',
    technologies: ['Python'],
    repoLink: 'https://github.com/tanishkaa08/Smart-Warehouse-system'
  },
 
  {
    title: 'VisionBoard',
    description: 'A vision board web application that enables users to create, edit, and manage articles to visualize and track their personal activities, supporting over 400 authenticated users.',
    technologies: ['React', 'Appwrite', 'TinyMCE', 'Tailwind CSS'],
    repoLink: 'https://github.com/tanishkaa08/vision-board',
    status: 'Ongoing',
  },
  {
    title: 'Expense Tracker',
    description: 'An Android app built with Flutter for seamless expense recording, featuring real-time summaries, categorization, and daily budget management.',
    technologies: ['Flutter', 'Firebase'],
    status: 'Ongoing',
  },

  {
    title: 'TaskManager - Chrome Extension',
    description: 'A lightweight and intuitive Google Chrome extension to help manage daily tasks and appointments efficiently. Features a daily task planner with priority levels and an appointment scheduler with reminders.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/tanishkaa08/TaskManager',
    status: 'Ongoing',
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// --- Main Component ---
const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mt-10 md:mt-20 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Some Recent Work</h2>
        </div>
        <div className="max-w-full md:max-w-3xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-1 gap-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="relative group"
                variants={cardVariants}
              >
                <div className="absolute -inset-3 bg-[#FDECF0]/50 rounded-lg z-0 transition-transform duration-500 ease-out group-hover:rotate-[-2deg] group-hover:scale-105"></div>
                <div className="relative z-10 bg-white p-6 sm:p-8 rounded-lg h-full flex flex-col shadow-lg">
                  <div className="flex-grow">
                    <div className="flex items-center mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      {project.status === 'Ongoing' && (
                        <span className="ml-3 bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Ongoing
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <h4 className="font-semibold text-gray-700 mb-3">Tech Stack:</h4>
                    <div className="flex items-center flex-wrap gap-x-5 gap-y-3">
                      {project.technologies.map((tech) => (
                        <div key={tech} className="group/icon relative">
                          {techIcons[tech] || <span className="text-xs font-bold bg-gray-200 p-1 rounded">{tech}</span>}
                          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded-md py-1 px-2 pointer-events-none whitespace-nowrap">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-center space-x-6">
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                        <FaGithub className="mr-2" /> GitHub
                      </a>
                    )}
                    {project.youtubeLink && (
                       <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                          <FaYoutube className="mr-2 text-red-600" /> Youtube
                      </a>
                    )}
                     {project.documentation && (
                       <a href={project.documentation} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                     
                        <FaGoogleDrive className="mr-2 text-green-800" /> Documentation
                      </a>
                    )}
                     {project.liveLink && (
                       <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                        <FaExternalLinkAlt className="mr-2" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;