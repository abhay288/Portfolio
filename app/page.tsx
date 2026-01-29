"use client";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Author from "@/app/components/Author";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Achievements from "@/app/components/Achievements";
import CreativeInterests from "@/app/components/CreativeInterests";
import Certifications from "@/app/components/Certifications";
import Resume from "@/app/components/Resume";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/SmoothScroll";
import { useScroll, motion, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SmoothScroll>
      <Navbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <CreativeInterests />
        <Certifications />
        <Resume />
        <Author />
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 text-sm glass">
          <p>© {new Date().getFullYear()} Abhay Kushwaha. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind & Love.</p>
        </footer>
      </main>
    </SmoothScroll>
  );
}
