import { motion } from "framer-motion";
import { FiActivity, FiArrowUpRight } from "react-icons/fi";
import { PROJECTS } from "../constants/index";

export default function Project() {
  return (
    <section id="project" className="section-shell">
      <div className="section-kicker">02 / Projects</div>
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="section-heading max-w-3xl">Practical projects for secure systems and defense work.</h2>
        <p className="max-w-sm font-mono text-caption uppercase leading-6 tracking-[0.18em] text-zinc-500">
          selected work across security, systems, and research
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => {
          const primaryLink = project.liveLink || project.githubLink;

          return (
            <motion.article
              key={project.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 22 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className={`${index === 0 ? "project-card md:col-span-2" : "project-card"} group`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center border border-brand-green/30 bg-brand-green/10 text-brand-green">
                  <FiActivity />
                </div>
                {primaryLink ? (
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="project-card-link"
                  >
                    <FiArrowUpRight />
                  </a>
                ) : (
                  <FiArrowUpRight className="text-zinc-700" aria-hidden="true" />
                )}
              </div>
              <p className="mt-7 font-mono text-caption text-brand-green">{project.symbol}</p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-none text-white">
                {primaryLink ? (
                  <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="project-title-link">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-5 min-h-20 text-sm leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={`${project.title}-${tech}`} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 font-mono text-caption uppercase tracking-[0.16em]">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition duration-300 hover:text-brand-green"
                  >
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition duration-300 hover:text-brand-green"
                  >
                    Live Demo
                  </a>
                )}
                {!primaryLink && <span className="text-zinc-600">Link coming soon</span>}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
