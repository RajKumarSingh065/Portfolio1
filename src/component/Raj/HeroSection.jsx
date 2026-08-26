import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative overflow-hidden bg-brand-teal-deep">
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />



      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-12 pt-8 relative z-50">
          <div className="font-mono text-brand-green font-semibold tracking-widest text-[10px] md:text-xs">
            SYS.ADMIN // BLUE_TEAM
          </div>
          <div className="flex gap-4 md:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-mist font-mono text-[10px] md:text-xs uppercase tracking-widest hover:text-brand-green transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading - overlapping the portrait */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center pointer-events-none">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1 className="hero-heading uppercase tracking-tighter leading-none whitespace-nowrap text-center text-[12.5vw] sm:text-[14vw] md:text-[14vw] drop-shadow-2xl">
            RAJ KUMAR <span className="text-brand-green">SINGH</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.25} y={30} className="mt-4">
          <span className="bg-brand-green/10 text-brand-green font-mono text-[10px] md:text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-brand-green/20">
            Cybersecurity Analyst
          </span>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end gap-6 pb-8 md:pb-12 px-6 md:px-12 pt-6 relative z-30 pointer-events-none">
        <FadeIn delay={0.35} y={20} className="pointer-events-auto">
          <div className="flex flex-col gap-4">
            <span className="status-line bg-[#131A24]/80 backdrop-blur-md px-4 py-2 rounded-full border border-brand-green/20 w-fit">
              <span className="status-dot" aria-hidden="true" />
              All clear · Monitoring since 2022
            </span>
            <p
              className="text-mist font-light leading-relaxed max-w-[280px] sm:max-w-[320px] md:max-w-[360px] text-sm md:text-base drop-shadow-md"
              style={{ textWrap: 'balance' }}
            >
              Architecting calmer, sharper defense systems and orchestrating rapid incident response.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="pointer-events-auto hidden sm:block">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
