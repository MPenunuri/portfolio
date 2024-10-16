import ThemeButton from "./theme-button/ThemeButton";
import Header from "./header/Header";
import About from "./about-me/About";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import { useEffect, useRef, useState } from "react";
import NextButton from "./next-button/NextButton";
import Contact from "./contact/Contact";

const ScrollToSection = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return null;
};

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const updateUrlHash = (sectionId: string) => {
    if (window.location.hash !== `#${sectionId}`) {
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };

  useEffect(() => {
    setIsVisible(true);

    const sections = [
      { ref: headerRef, id: "header" },
      { ref: aboutRef, id: "about" },
      { ref: profileRef, id: "profile" },
      { ref: projectsRef, id: "projects" },
      { ref: contactRef, id: "contact" },
    ];

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach(({ ref, id }) => {
        const section = ref.current;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;

          if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
            updateUrlHash(id);
          }

          if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
            section.classList.add("show");
          } else {
            section.classList.remove("show");
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`mainContainer ${isVisible ? "show" : ""}`}>
      <ThemeButton />
      <ScrollToSection />
      <div id="header" className="header" ref={headerRef}>
        <Header />
        <NextButton section="#about"></NextButton>
      </div>
      <div id="about" className="about" ref={aboutRef}>
        <About />
        <NextButton section="#profile"></NextButton>
      </div>
      <div id="profile" className="profile" ref={profileRef}>
        <Profile />
        <NextButton section="#projects"></NextButton>
      </div>
      <div id="projects" className="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="contact" className="contact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
