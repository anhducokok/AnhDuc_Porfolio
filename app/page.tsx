"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Database,
  Layout,
  Terminal,
  Send,
  ArrowUpRight
} from "lucide-react";

// --- Components ---

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${isScrolled ? "bg-[#050508]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
    >
      <div className="text-xl font-bold font-sans tracking-tighter flex items-center gap-2">
        <span className="text-emerald-400">&lt;</span>
        DevPortfolio
        <span className="text-emerald-400">/&gt;</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-mono text-gray-400">
        {["Projects", "Skills", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            {item}
          </a>
        ))}
        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all">
          Resume
        </button>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-blue-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-emerald-400 mb-4 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for hire
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight mb-6 leading-tight"
          >
            Crafting digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              experiences
            </span>
            {" "}with code.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-mono leading-relaxed mb-10"
          >
            I&apos;m a full-stack developer specializing in building exceptional digital experiences.
            Currently focused on accessible, human-centered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full transition-all flex items-center gap-2">
              View Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Web Application",
      description: "A comprehensive dashboard used by over 10k users to track financial assets and real-time market data.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      image: "bg-blue-900/20", // Placeholder color
      link: "#"
    },
    {
      title: "E-commerce Platform",
      category: "Mobile & Web",
      description: "Modern headless e-commerce solution with advanced filtering, cart management, and seamless checkout flow.",
      tech: ["React Native", "Node.js", "GraphQL", "PostgreSQL"],
      image: "bg-purple-900/20",
      link: "#"
    },
    {
      title: "AI Content Generator",
      category: "SaaS Product",
      description: "SaaS application leveraging OpenAI API to help marketers generate SEO-optimized content in seconds.",
      tech: ["Vue.js", "Python", "FastAPI", "Redis"],
      image: "bg-emerald-900/20",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-16 flex items-end gap-4">
            Selected Work <span className="text-lg md:text-xl text-gray-500 font-mono font-normal mb-2">01</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -10 }}
        className="group relative bg-white/5 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm"
      >
        <div className={`h-48 ${project.image} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050508]/80" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className={`w-full h-full ${project.image} opacity-50`}
          />
          <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-emerald-400 text-xs font-mono mb-2 uppercase tracking-wider">{project.category}</p>
              <h3 className="text-2xl font-bold font-sans text-white group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-300 border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

const Skills = () => {
  const skills = [
    { name: "Frontend", icon: <Layout />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { name: "Backend", icon: <Database />, items: ["Node.js", "PostgreSQL", "GraphQL", "Redis", "Serverless"] },
    { name: "Tools", icon: <Terminal />, items: ["Git", "Docker", "AWS", "Figma", "CI/CD"] }
  ];

  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-sans flex items-end gap-4">
              Technical Arsenal <span className="text-lg md:text-xl text-gray-500 font-mono font-normal mb-2">02</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="p-8 border border-white/10 rounded-2xl bg-[#050508] relative group hover:border-emerald-500/50 transition-colors duration-500">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-sans mb-6">{category.name}</h3>
                <div className="space-y-4">
                  {category.items.map((skill, i) => (
                    <div key={i} className="group/skill">
                      <div className="flex justify-between text-sm font-mono text-gray-400 mb-1 group-hover/skill:text-white transition-colors">
                        <span>{skill}</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                          className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-16 flex items-end gap-4">
            Get in Touch <span className="text-lg md:text-xl text-gray-500 font-mono font-normal mb-2">03</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal delay={0.1}>
            <div>
              <p className="text-xl text-gray-400 mb-8 font-light">
                Currently available for freelance projects and open to full-time opportunities.
                If you have a project in mind or just want to chat, feel free to reach out.
              </p>

              <div className="space-y-6">
                <a href="mailto:hello@example.com" className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono">hello@example.com</span>
                </a>
                <div className="flex gap-4 pt-6">
                  {[Github, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-emerald-500/50 transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full bg-[#050508] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full bg-[#050508] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-[#050508] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Tell me about your project..." />
              </div>
              <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

// --- Utilities ---

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-400/50 pointer-events-none z-[100] hidden md:block" // Hidden on mobile
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-2 h-2 bg-emerald-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508] relative selection:bg-emerald-500/30">
      <CustomCursor />
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Contact />

      <footer className="py-8 border-t border-white/5 bg-[#050508]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-mono">
          <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
