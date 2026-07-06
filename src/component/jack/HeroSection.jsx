import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

const PORTRAIT_URL = '/portrait-head.png';

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#8E9BAD] font-medium uppercase tracking-wider text-sm md:text-base lg:text-lg hover:text-[#ECEFF3] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden flex-shrink-0 relative z-10">
        <h1 className="hero-heading uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[13vw] sm:text-[14vw] md:text-[15vw] mt-8 sm:mt-6 md:mt-2">
          Hi, i&apos;m <span className="accent-word">raj</span>
        </h1>
      </FadeIn>

      {/* Badge cameo portrait — anchored to the bottom edge, sized against viewport height so it never crowds the heading */}
      <div className="relative z-0 flex-1 flex items-end justify-center min-h-0">
        <FadeIn delay={0.5} y={40} style={{ width: 'clamp(180px, min(26vw, 44vh), 360px)' }}>
          <Magnet
            padding={120}
            strength={9}
            activeTransition="transform 0.35s ease-out"
            inactiveTransition="transform 0.7s ease-in-out"
          >
            <div className="cameo">
              <img
                src={PORTRAIT_URL}
                alt="Raj Kumar Singh — cybersecurity analyst"
                className="select-none"
                draggable={false}
              />
              <span className="cameo-caption">Raj K. Singh · Blue Team</span>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end gap-6 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 pt-6">
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-3">
            <span className="status-line">
              <span className="status-dot" aria-hidden="true" />
              all clear · monitoring since 2022
            </span>
            <p
              className="text-[#ECEFF3] font-normal leading-snug max-w-[200px] sm:max-w-[260px] md:max-w-[300px]"
              style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1.15rem)' }}
            >
              A cybersecurity analyst building calmer, sharper security operations.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
