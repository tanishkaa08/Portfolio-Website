'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';


const experiences = [
  {
    company: 'Summer of Bitcoin - CoinSwap',
    role: 'Software Developer Intern',
    date: 'May 2026 - Present · Wyoming, USA (Remote)',
    responsibilities: [
      'Redesigning CoinSwap’s node sync layer to replace centralized RPC with a peer-distributed Electrum protocol, improving fault tolerance across network nodes.',
      'Building an address-pool privacy layer that mixes 3-5x decoy addresses per wallet query, reducing address-linkability during Electrum sync.',
      'Developing a Kotlin Android interface that abstracts UTXO sets, sync status, and balance aggregation from underlying node communication.',
    ]
  },
  {
    company: 'PlanetRead',
    role: 'Software Developer Intern',
    date: 'October 2025 - February 2026 · Bangalore (Remote)',
    responsibilities: [
      'Architected an offline-first React Native (Expo) app with AsyncStorage caching to capture 50+ telemetry events per session under unstable networks.',
      'Designed a fault-tolerant sync pipeline with Supabase PostgreSQL, batching and uploading 10,000+ cached records after reconnect while staying consistent on 2G/3G.',
      'Implemented secure backend data flows with Row Level Security and server-side functions for reliable telemetry ingestion in low-connectivity environments.',
    ]
  },
  {
    company: 'Code for GovTech DMP',
    role: 'Open Source Intern',
    date: 'June 2025 - September 2025 · New Delhi (Remote)',
    responsibilities: [
      'Built an ExtendScript Premiere Pro plugin that parses SRT/TXT files and stamps 500+ timeline markers in under 5 seconds (vs. manual frame-by-frame work).',
      'Reverse-engineered MOGRT parameter exposure to inject subtitle text into Motion Graphics Templates, cutting manual subtitle effort by 65%.',
      'Engineered modular runtime loading so Premiere stays stable on projects with 1,000+ markers, a known crash point for large ExtendScript workflows.',
    ]
  },
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
            viewport={{ once: false, amount: 0.1 }}
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
