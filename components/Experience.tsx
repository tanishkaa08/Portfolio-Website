'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';


const experiences = [
  {
    company: 'Code for GovTech DMP',
    role: 'Open Source Developer',
    date: 'May 2025 - Present',
    responsibilities: [
      'Developing a Subtitle Automation Plugin for Adobe Premiere Pro, reducing manual effort by 65%.',
      'Implementing dynamic two-layer subtitles with smooth, mask-based color transitions.',
      'Supporting transliteration and dual-language subtitles for Indian languages.',
    ]
  },
  {
    company: 'Abhikalpan-Techfest',
    role: 'Frontend Developer',
    date: 'Jan 2025 - Apr 2025',
    responsibilities: [
      'Developed a real-life deployable website for the tech fest using Next.js.',
      'Implemented responsive design with Tailwind CSS, improving user retention by 30%.',
      'Ensured a high-performance, accessible user experience across all devices.',
    ]
  },
  {
    company: 'GirlScript Summer of Code',
    role: 'Open Source Contributor',
    date: 'May 2024 - Aug 2024',
    responsibilities: [
        'Enhanced a real-world open-source project by creating and deploying three interactive games.',
        'Identified and fixed over 10 critical issues through rigorous debugging and code reviews.',
        'Improved overall application performance and reliability for a seamless user experience.'
    ]
  },
  {
    company: 'Bitbyte Summer of Code',
    role: 'Open Source Contributor',
    date: 'Jun 2024 - Aug 2024',
    responsibilities: [
        'Contributed to the BSOC website by implementing multiple features and bug fixes.',
        'Developed a loading page with smooth animations and an integrated dynamic search bar.',
        'Reduced content search time by 40%, enhancing the overall user experience.'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = (isLeft: boolean): Variants => ({
  hidden: { opacity: 0, x: isLeft ? -50 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
});


const CurvedBackground = () => (
  <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
    <svg 
      viewBox="0 0 1440 400"
      preserveAspectRatio="none" 
      className="absolute w-full h-full"
    >
    
    <path 
  d="M 0,50 C 360,25 1080,25 1440,50 L 1440,400 L 0,400 Z" 
  fill="#FDECF080" 
/>
    </svg>
  </div>
);


const Experience = () => {
  return (
    <section id="experience" className="pt-40 pb-28 relative"> 
      
      <CurvedBackground />

      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-blue-950">Where I&apos;ve Worked</h2>
          
          <motion.div
            className="relative max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} // Adjust amount to trigger animation sooner
            variants={containerVariants}
          >
        
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  className={`mb-12 flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
                  variants={itemVariants(isLeft)}
                >
                  <div className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white/70 backdrop-blur-md border border-gray-200/80 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-pink-800">{exp.role}</h3>
                      <p className="text-md font-semibold text-gray-800 mb-2">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                        {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                      </ul>
                    </div>
                  </div>
            
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-pink-800 rounded-full flex items-center justify-center z-10">
                    <FaBriefcase className="text-pink-800" size={12} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;