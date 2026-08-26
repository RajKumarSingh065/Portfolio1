import FadeIn from './FadeIn';
import { SKILL_MODULES } from '../../constants/index';

export default function ServicesSection() {
  return (
    <section className="bg-canvas px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" id="skills">
      <div className="flex flex-col items-center mb-14 sm:mb-20 md:mb-24">
        <FadeIn delay={0} y={20}>
          <span className="eyebrow eyebrow--paper mb-8 sm:mb-10">Capabilities</span>
        </FadeIn>
        <FadeIn delay={0.05} y={30}>
          <h2
            className="hero-heading hero-heading--ink uppercase text-center leading-none tracking-tight"
            style={{ fontSize: "56px" }}
          >
            Skills
          </h2>
        </FadeIn>
      </div>

      <div className="max-w-5xl mx-auto">
        {SKILL_MODULES.map((module, i) => (
          <FadeIn key={module.title} delay={i * 0.08} y={30}>
            <div
              className="grid gap-4 md:gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-start py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(26, 34, 46, 0.16)',
                ...(i === 0 ? { borderTop: '1px solid rgba(26, 34, 46, 0.16)' } : {}),
              }}
            >
              <h3
                className="hero-heading hero-heading--ink leading-tight"
                style={{ fontSize: "56px", fontWeight: 700 }}
              >
                {module.title}
              </h3>

              <div className="flex flex-wrap gap-2 md:justify-end md:pt-2">
                {module.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 text-caption font-mono border border-ink/20 rounded-full text-ink bg-hairline"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
