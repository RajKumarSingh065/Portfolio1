import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { PROJECTS } from '../../constants/index';

// One representative image per project, matched to PROJECTS order:
// 0 — Enterprise SOC & IR Lab, 1 — Java Banking System, 2 — Polymorphic Malware
const PROJECT_IMAGES = [
  '/project-soc-1.png',
  '/cyber-code.png',
  '/project-malware-1.png',
];

function ProjectCard({ project, index, totalCards }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const image = PROJECT_IMAGES[index] || PROJECT_IMAGES[0];

  return (
    <div ref={containerRef} className="h-[95vh]" style={{ position: 'relative' }}>
      <motion.div
        className="sticky rounded-[32px] sm:rounded-[40px] border border-[#ECEFF3]/15 bg-[#131A24] p-5 sm:p-7 md:p-9 origin-top"
        style={{
          scale,
          top: `${24 + index * 28}px`,
        }}
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 sm:mb-7">
          <div className="min-w-0">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[#8E9BAD]">
              {String(index + 1).padStart(2, '0')} · {project.symbol}
            </p>
            <h3
              className="hero-heading leading-tight mt-2"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.6rem)', fontWeight: 700 }}
            >
              {project.title}
            </h3>
          </div>

          <LiveProjectButton href={project.githubLink || '#'} label="GitHub" />
        </div>

        {/* Description + stack */}
        <div className="grid gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-10 mb-6 sm:mb-8">
          <p className="text-[#B9C3D2] leading-relaxed text-sm sm:text-base max-w-[620px]">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 content-start md:justify-end">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[0.68rem] font-mono border border-[#4D7CFF]/25 rounded-full text-[#B9C8EF] bg-[#4D7CFF]/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project image */}
        <img
          src={image}
          alt={`${project.title} preview`}
          className="duotone-shot w-full aspect-video object-cover rounded-2xl sm:rounded-3xl"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const topProjects = PROJECTS.slice(0, 3);

  return (
    <section
      className="bg-[#0E131B] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      id="projects"
    >
      <div className="flex flex-col items-center mb-14 sm:mb-20 md:mb-24">
        <FadeIn delay={0} y={20}>
          <span className="eyebrow mb-8 sm:mb-10">Selected work</span>
        </FadeIn>
        <FadeIn delay={0.05} y={30}>
          <h2
            className="hero-heading uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto">
        {topProjects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            totalCards={3}
          />
        ))}
      </div>
    </section>
  );
}
