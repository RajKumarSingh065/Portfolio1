import React from 'react';
import { PROJECTS } from '../constants/index';
import {motion } from "framer-motion"

export default function Project() {
  return (
    <section id="project" className="min-h-screen flex items-start justify-center py-16">
      <div className="w-full flex flex-col">
        <motion.h1
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:1.5}} 
          className="mb-16 text-center text-4xl">
          Projects
        </motion.h1>
        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-wrap mb-12 lg:justify-center">
              <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}} 
                className="w-full lg:w-1/4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  width={200} 
                  height={200} 
                  className="mb-6 rounded-lg border" 
                />
              </motion.div>
              <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1.5}} 
                className="w-full max-w-xl lg:w-3/4">
                <h6 className="text-xl font-semibold mb-2">
                  {project.title}
                </h6>
                {/* Project Links */}
                <div className="mb-4 flex gap-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.skills.map((tech, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="rounded mr-2 mb-2 bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
