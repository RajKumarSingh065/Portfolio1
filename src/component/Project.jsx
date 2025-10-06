import React, { useMemo, useState } from 'react';
import { PROJECTS } from '../constants/index';
import { motion, AnimatePresence } from "framer-motion";

export default function Project() {
  // Derive unique domains from project data
  const domains = useMemo(() => {
    const set = new Set();
    PROJECTS.forEach(p => (p.domains || []).forEach(d => set.add(d)));
    return Array.from(set);
  }, []);

  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return PROJECTS;
    return PROJECTS.filter(p => (p.domains || []).includes(active));
  }, [active]);

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

        {/* Filter bar */}
        <div className="mb-10 flex flex-wrap items-center gap-3 justify-center" role="tablist" aria-label="Project domains">
          <button
            type="button"
            onClick={() => setActive('All')}
            aria-pressed={active === 'All'}
            className={`rounded-full px-4 py-2 text-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
              active === 'All'
                ? 'bg-purple-600 text-white border-purple-500'
                : 'bg-neutral-900/30 text-neutral-300 border-neutral-800 hover:bg-neutral-800'
            }`}
          >
            All
          </button>
          {domains.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setActive(d)}
              aria-pressed={active === d}
              className={`rounded-full px-4 py-2 text-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                active === d
                  ? 'bg-purple-600 text-white border-purple-500'
                  : 'bg-neutral-900/30 text-neutral-300 border-neutral-800 hover:bg-neutral-800'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              layout
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap mb-12 lg:justify-center"
            >
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
                  loading="lazy"
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
                {/* Domains */}
                {project.domains?.length ? (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.domains.map((d) => (
                      <span key={`domain-${project.title}-${d}`} className="rounded bg-neutral-800/70 px-2 py-1 text-xs text-neutral-300 border border-neutral-700">
                        {d}
                      </span>
                    ))}
                  </div>
                ) : null}
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
                  {project.skills.map((tech) => (
                    <span 
                      key={`skill-${project.title}-${tech}`} 
                      className="rounded mr-2 mb-2 bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
