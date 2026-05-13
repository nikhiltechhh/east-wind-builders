import { useEffect } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Vision from "@/components/site/Vision";
import Services from "@/components/site/Services";
import Capabilities from "@/components/site/Capabilities";
import Approach from "@/components/site/Approach";
import Projects from "@/components/site/Projects";
import ProjectCTA from "@/components/site/ProjectCTA";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "East Wind Contractors | Interior Design & Build";
    const desc = "East Wind Contractors — full-service interior design, construction, material supply and turnkey projects. Call 6359595978.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Vision />
      <Services />
      <Capabilities />
      <Approach />
      <Projects />
      <ProjectCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
