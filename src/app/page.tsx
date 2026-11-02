"use client";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import Headers from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

export default function Home() {
  return (
    <div className="mb-20">
      <Headers />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
