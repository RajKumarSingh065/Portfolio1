import HeroSection from './HeroSection';
import MarqueeSection from './MarqueeSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import Contact from '../Contact';

export default function JackHome() {
  return (
    <div style={{ overflowX: 'clip', background: '#0E131B' }} className="text-[#ECEFF3]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <div className="bg-[#0E131B] pt-10">
        <Contact />
      </div>
    </div>
  );
}
