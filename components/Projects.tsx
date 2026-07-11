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
  SiAppwrite,
  SiExpress,
  SiMongodb,
  SiReact,
  SiPostgresql,
  SiPython,
  SiFramer,
} from 'react-icons/si';

const techIcons: { [key: string]: React.ReactNode } = {
  'React': <FaReact size={28} className="text-blue-500" />,
  'React Native': <SiReact size={28} className="text-blue-500" />,
  'Node.js': <FaNodeJs size={28} className="text-green-500" />,
  'Tailwind CSS': <SiTailwindcss size={28} className="text-cyan-500" />,
  'Next.js': <SiNextdotjs size={28} className="text-black" />,
  'TypeScript': <SiTypescript size={28} className="text-blue-700" />,
  'Vite': <SiVite size={28} className="text-purple-500" />,
  'Express': <SiExpress size={28} className="text-gray-600" />,
  'MongoDB': <SiMongodb size={28} className="text-green-600" />,
  'PostgreSQL': <SiPostgresql size={28} className="text-blue-700" />,
  'Python': <SiPython size={28} className="text-yellow-500" />,
  'Framer Motion': <SiFramer size={28} className="text-pink-600" />,
  'WebSockets': <span className="text-xs font-bold bg-gray-200 p-1 rounded">WebSockets</span>,
  'ESP32': <span className="text-xs font-bold bg-gray-200 p-1 rounded">ESP32</span>,
  'Appwrite': <SiAppwrite size={28} className="text-pink-500" />,
  'JavaScript': <SiJavascript size={28} className="text-yellow-400 bg-black" />,
  'HTML': <FaHtml5 size={28} className="text-orange-600" />,
  'CSS': <FaCss3Alt size={28} className="text-blue-600" />,
  'TinyMCE': <span className="text-xs font-bold bg-gray-200 p-1 rounded">TinyMCE</span>,
  'ExtendScript': <span className="text-xs font-bold bg-gray-200 p-1 rounded">ExtendScript</span>,
  'React Hook Form': <span className="text-xs font-bold bg-gray-200 p-1 rounded">RHF</span>,
};

const projects = [
  {
    title: 'Smart Hybrid Delivery',
    description: 'Real-time fleet coordination for EV and drone last-mile delivery. Built a Node.js/Express backend with MongoDB geospatial queries and WebSockets to track 50+ simulated nodes with low-latency location updates. Designed a multi-modal route assignment engine that allocates deliveries by load, range, and proximity, cutting average route time by 30% and removing manual dispatch.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
    repoLink: 'https://github.com/harshiill/hybrid-drone-ev',
    liveLink: 'https://hybrid-drone-ev.vercel.app/',
    youtubeLink: 'https://www.youtube.com/watch?v=qvc7_PmT1xs'
  },
  {
    title: 'VisionBoard',
    description: 'Session-based auth on Appwrite for 400+ users, with compound database indexing that reduced query latency by 40%. Built a secure text rendering pipeline using DOM serialization and HTML sanitization so untrusted content from hundreds of users can be rendered without XSS risk.',
    technologies: ['React', 'Appwrite', 'TinyMCE', 'React Hook Form', 'Tailwind CSS'],
    repoLink: 'https://github.com/tanishkaa08/vision-board',
  },
  {
    title: 'Mini Lead CRM',
    description: 'REST API for sales-lead pipelines on Node.js, Express, and PostgreSQL with raw SQL (no ORM). Enforces a status state machine, bulk create/update with 207 partial success, and in-memory GET caching with write invalidation. Clear backend design recruiters can skim from the README.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JavaScript'],
    repoLink: 'https://github.com/tanishkaa08/mini-lead-CRM',
  },
  {
    title: 'Subtitle Tool for Adobe Premiere Pro',
    description: 'ExtendScript plugin published on Adobe Exchange. Parses SRT/TXT subtitle files and stamps 500+ timeline markers in under 5 seconds, injects text into MOGRTs, and supports dual-layer transliteration, reducing manual subtitle creation effort by 65% across multilingual pipelines.',
    technologies: ['JavaScript', 'ExtendScript', 'HTML', 'CSS'],
    repoLink: 'https://github.com/PlanetRead/subtitle-tool-for-Adobe-Premier/tree/tanishka-subtitle-tool', 
    documentation: 'https://drive.google.com/drive/u/0/folders/1zLyE_IdBiHJirEAvhwn0mvu1AroG1b8s'
  },
  {
    title: 'Wall Calendar',
    description: 'Wall-calendar web app with month navigation, range-based tasks (Eisenhower priorities), Indian holiday data, Open-Meteo weather for selected ranges, light/dark themes, and Framer Motion page-flip transitions. Built with React, TypeScript, Vite, and Tailwind.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    repoLink: 'https://github.com/tanishkaa08/Wall--Calender',
  },
  {
    title: 'Smart Warehouse System',
    description: 'Web-controlled ESP32 warehouse automation: HTML client and embedded firmware talk through a Python WebSocket relay for real-time grid navigation, motor control, and IR sensor feedback on a 4×4 rack layout.',
    technologies: ['Python', 'WebSockets', 'ESP32', 'HTML'],
    repoLink: 'https://github.com/tanishkaa08/Smart-Warehouse-system',
  },
  {
    title: 'Abhikalpan Techfest Website',
    description: 'Official website for Abhikalpan, IIITDM Jabalpur’s annual tech fest. Built with Next.js and Tailwind CSS for a responsive, performant experience across devices.',
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
    repoLink: 'https://github.com/RISHIKESHk07/Abhikalpan-website',
    liveLink: 'https://abhikalpan-website.vercel.app/'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

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
