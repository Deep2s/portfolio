import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import GraphicDesign from "./components/motion/motion";
import HoverMotion from "./components/motion/hover-effect";
import UseAnimationFrame from "./components/motion/cube-motion";
import DragConstraints from "./components/motion/sqaure-motion";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GraphicDesign />
      <HoverMotion />
      <DragConstraints />
      {/* <UseAnimationFrame /> */}
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  )
};