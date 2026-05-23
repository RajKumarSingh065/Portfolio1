import NavBar from "./component/NavBar";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import SocialProof from "./component/SocialProof";
import "./index.css";

function BackgroundFX() {
  return (
    <div className="site-fx" aria-hidden="true">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="grid-floor" />
      <div className="particle-field">
        {Array.from({ length: 6 }).map((_, index) => (
          <span
            key={`particle-${index}`}
            style={{
              "--x": `${(index * 37) % 100}%`,
              "--delay": `${(index % 11) * -1.7}s`,
              "--duration": `${12 + (index % 9)}s`,
            }}
          />
        ))}
      </div>
      <div className="scanlines" />
      <div className="noise" />
    </div>
  );
}

export default function App() {
  const page = window.location.pathname.replace(/^\/|\/$/g, "") || "home";

  const pages = {
    home: <Hero />,
    about: <About />,
    projects: <Project />,
    skills: <Skills />,
    research: <SocialProof />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-zinc-100 antialiased selection:bg-[#7CFF00] selection:text-black">
      <BackgroundFX />
      <NavBar />
      <main>{pages[page] || pages.home}</main>
    </div>
  );
}
