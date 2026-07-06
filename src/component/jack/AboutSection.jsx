import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { PROJECTS, CERTIFICATIONS } from '../../constants/index';

const ABOUT_TEXT =
  "I am a cybersecurity student and Security Analyst Intern with a foundation in secure software development, infrastructure defense, SIEM deployment, threat intelligence automation, and vulnerability assessment. My work connects offensive testing with defensive remediation, with a growing focus on blockchain security and application hardening.";

const FACTS = [
  { label: 'Current post', value: 'Security Analyst Intern, SilicaSecure' },
  { label: 'Certifications', value: `${CERTIFICATIONS.length} — Google, Microsoft, Oracle, ISO 27001` },
  { label: 'Projects', value: `${PROJECTS.length} security builds on GitHub` },
];

export default function AboutSection() {
  return (
    <section
      className="bg-[#ECEFF3] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-10 flex items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36"
      id="about"
    >
      <div className="flex flex-col items-center">
        <FadeIn delay={0} y={20}>
          <span className="eyebrow eyebrow--paper mb-8 sm:mb-10">Profile</span>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0.05} y={40}>
            <h2
              className="hero-heading hero-heading--ink uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <div className="crop-frame max-w-[560px]">
            <span className="crop-mark crop-mark--tl" aria-hidden="true" />
            <span className="crop-mark crop-mark--tr" aria-hidden="true" />
            <span className="crop-mark crop-mark--bl" aria-hidden="true" />
            <span className="crop-mark crop-mark--br" aria-hidden="true" />
            <AnimatedText
              text={ABOUT_TEXT}
              className="text-[#1A222E] font-medium text-center leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
            />
          </div>
        </div>

        {/* Facts row */}
        <div className="mt-16 sm:mt-20 grid gap-6 sm:gap-10 sm:grid-cols-3 w-full max-w-3xl">
          {FACTS.map((fact, i) => (
            <FadeIn key={fact.label} delay={0.1 + i * 0.08} y={24}>
              <div className="text-center sm:text-left border-t border-[#1A222E]/15 pt-4">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[#1A222E]/55">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm sm:text-[0.95rem] font-medium text-[#1A222E] leading-snug">
                  {fact.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mt-16 sm:mt-20">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
