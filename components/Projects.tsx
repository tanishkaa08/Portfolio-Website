'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiStripe, 
  SiGraphql, 
  SiPostgresql 
} from 'react-icons/si';

// --- Technology Icon Mapping ---
const techIcons: { [key: string]: React.ReactNode } = {
  'React': <FaReact size={28} className="text-blue-500" />,
  'Node.js': <FaNodeJs size={28} className="text-green-500" />,
  'TypeScript': <SiTypescript size={28} className="text-blue-700" />,
  'Tailwind CSS': <SiTailwindcss size={28} className="text-cyan-500" />,
  'Next.js': <SiNextdotjs size={28} className="text-black" />,
  'Stripe': <SiStripe size={28} className="text-purple-600" />,
  'GraphQL': <SiGraphql size={28} className="text-pink-600" />,
  'PostgreSQL': <SiPostgresql size={28} className="text-blue-600" />,
};

// --- Your Project Data ---
const projects = [
  {
    title: 'Project One',
    description: 'A web application for managing tasks and projects, featuring a clean user interface and real-time collaboration.',
    technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: '#',
    repoLink: '#'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce website for selling handmade goods, with a focus on a smooth user experience and secure payments.',
    technologies: ['Next.js', 'Stripe', 'GraphQL', 'PostgreSQL'],
    liveLink: '#',
    repoLink: '#'
  }
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// --- Main Component ---
const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">My Creations</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mt-4 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="relative group" // The container for the hover effect
              variants={cardVariants}
            >
              {/* The Animated Background Shape */}
              <div className="absolute -inset-3 bg-pink-800 rounded-3xl z-0 transform transition-transform duration-500 ease-out group-hover:rotate-[-2deg] group-hover:scale-105"></div>

              {/* The Main Content Card */}
              <div className="relative z-10 bg-white p-6 sm:p-8 rounded-3xl h-full flex flex-col shadow-lg">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex items-center space-x-5 mt-auto">
                    {project.technologies.map((tech) => (
                      <div key={tech} className="group/icon relative">
                        {techIcons[tech]}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded-md py-1 px-2 pointer-events-none whitespace-nowrap">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-center text-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 font-semibold text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    View on GitHub
                  </a>
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