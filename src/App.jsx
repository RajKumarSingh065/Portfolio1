import NavBar from "./component/NavBar";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import SocialProof from "./component/SocialProof";
import RajHome from "./component/Raj/RajHome";
import "./index.css";

function BackgroundFX() {
  return (
    <div className="site-fx" aria-hidden="true">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
    </div>
  );
}

export default function App() {
  const page = window.location.pathname.replace(/^\/|\/$/g, "") || "home";

  // Home page uses the new Jack 3D Creator layout (no legacy BackgroundFX/NavBar)
  if (page === "home") {
    return <RajHome />;
  }

  // Other pages keep the original cybersecurity layout
  const pages = {
    about: <About />,
    projects: <Project />,
    skills: <Skills />,
    research: <SocialProof />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-teal-deep text-canvas antialiased">
      <BackgroundFX />
      <NavBar />
      <main>{pages[page] || <RajHome />}</main>
    </div>
  );
}
