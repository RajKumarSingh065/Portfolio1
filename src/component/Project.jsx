import React from 'react';
import { PROJECTS } from '../constants';
import {motion } from "framer-motion"

export default function Project() {
  return (
    <section id="project"  className="py-5">
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}} className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
            <motion.div whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}} className="w-full lg:w-1/4">
              <img 
                src={project.image} 
                alt={project.title} 
                width={200} 
                height={200} 
                className="mb-6 rounded" 
              />
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1.5}} className="w-full max-w-xl lg:w-3/4">
              <h6 className="text-xl font-semibold mb-2">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.skills.map((tech, skillIndex) => (
                  <span key={skillIndex} className="rounded mr-2 bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-800">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>);
}
