'use client';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'A web application for managing tasks and projects.',
    image: 'https://via.placeholder.com/300',
    liveLink: '#',
    repoLink: '#'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce website for selling handmade goods.',
    image: 'https://via.placeholder.com/300',
    liveLink: '#',
    repoLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">My Creations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-secondary rounded-lg overflow-hidden shadow-lg group relative"
                whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-highlight to-cyan-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-secondary rounded-lg">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4 text-gray-400">{project.description}</p>
                    <div className="flex justify-between">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-highlight font-semibold hover:underline">Live Demo</a>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-highlight font-semibold hover:underline">GitHub</a>
                    </div>
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

export default Projects;
