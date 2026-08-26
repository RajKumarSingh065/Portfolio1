import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import Contact from '../Contact';

export default function JackHome() {
  return (
    <div style={{ overflowX: 'clip', background: "#001e2b" }} className="text-canvas">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <div className="bg-brand-teal-deep pt-10">
        <Contact />
      </div>
    </div>
  );
}
