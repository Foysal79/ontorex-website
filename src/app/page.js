"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Monitor,
  PenTool,
  TrendingUp,
  Video,
  Layers,
  ArrowRight,
  Menu,
  X,
  Star,
  CheckCircle2,
  ChevronRight,
  Mail,
  MessageCircle,
  Zap,
  Code,
  Rocket,
} from "lucide-react";

// --- CUSTOM BRAND ICONS (Since lucide-react removed them) ---
const FacebookIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const WhatsAppIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WA_LINK =
  "https://wa.me/8801873189853?text=Hello%20OntoRex!%20I'm%20interested%20in%20discussing%20a%20project.";
const FB_LINK = "https://www.facebook.com/share/1B2eiGuvWQ/?mibextid=wwXIfr";

// --- DATA ---
const services = [
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile experiences built for performance and scale.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Web Development",
    description:
      "High-converting, SEO-optimized web applications using modern frameworks.",
    icon: <Monitor className="w-6 h-6" />,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive, beautiful, and user-centric interfaces that drive engagement.",
    icon: <Layers className="w-6 h-6" />,
    color: "from-red-500 to-orange-400",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven strategies to scale your audience and increase revenue.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-orange-400 to-amber-500",
  },
  {
    title: "Video Editing",
    description:
      "Cinematic and engaging video content tailored for social media and ads.",
    icon: <Video className="w-6 h-6" />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Graphic Design",
    description:
      "Striking brand identities, illustrations, and marketing materials.",
    icon: <PenTool className="w-6 h-6" />,
    color: "from-amber-400 to-yellow-500",
  },
];

const portfolio = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Health Tracker",
    category: "App",
    img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    category: "Design",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "E-commerce App",
    category: "App",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Crypto Platform",
    category: "Web",
    img: "https://images.unsplash.com/photo-1621504450181-5d356f153326?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Brand Identity",
    category: "Design",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
  },
];

const team = [
  {
    name: "Foysal",
    role: "Founder & Lead Developer",
    img: "https://i.ibb.co.com/zTDsPPyB/photo-2026-03-29-00-03-03.jpg",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "David Chen",
    role: "Marketing Director",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
  },
];

const testimonials = [
  {
    name: "Emily Watson",
    role: "CEO, TechNova",
    text: "OntoRex transformed our vision into a stunning reality. Their attention to detail and speed of delivery is unmatched.",
    rating: 5,
  },
  {
    name: "Marcus Reed",
    role: "Founder, GrowthApp",
    text: "The mobile app they built for us increased our user retention by 40%. Highly recommend their talented team.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    role: "Marketing VP, Lumina",
    text: "From brand design to web development, OntoRex handled everything flawlessly. They are true professionals.",
    rating: 5,
  },
];

// --- COMPONENTS ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all">
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            OntoRex
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 group"
          >
            <WhatsAppIcon className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />{" "}
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-300 hover:text-white font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-5 py-3 rounded-lg text-center font-medium bg-white text-black mt-2 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 text-green-600" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-amber-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

      <div className="container relative mx-auto px-6 lg:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Accepting new projects for 2026
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Build the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
              Future.
            </span>{" "}
            <br className="hidden md:block" />
            Faster.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed">
            OntoRex crafts high-performance websites, mobile apps, and elite
            digital experiences for ambitious startups and enterprise leaders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group"
            >
              <WhatsAppIcon className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium bg-neutral-900 border border-white/10 text-white hover:bg-neutral-800 transition-all"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-neutral-500 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 relative z-10 border-t border-white/5 bg-neutral-950"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Digital Solutions that Scale
          </h3>
          <p className="text-neutral-400 text-lg">
            We provide end-to-end services to take your brand from concept to
            market leader.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 hover:bg-neutral-800/50 transition-colors group h-full relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`}
                />

                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-sm font-medium text-neutral-300 group-hover:text-white transition-colors cursor-pointer">
                  Learn more{" "}
                  <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const benefits = [
    "Enterprise-grade clean code architecture",
    "Lightning-fast delivery sprints",
    "Scalable solutions for high traffic",
    "Dedicated support & maintenance",
  ];

  return (
    <section
      id="about"
      className="py-24 relative border-t border-white/5 bg-neutral-950 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-12 bg-neutral-900 border border-white/10 p-6 rounded-2xl shadow-2xl z-20 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                    <Star className="w-7 h-7 fill-current" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">5.0</p>
                    <p className="text-sm text-neutral-400">Average Rating</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
              Why Choose Us
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Built for founders who demand excellence.
            </h3>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              We don't just build software; we build businesses. OntoRex
              partners with visionary brands to deliver digital solutions that
              solve real problems, drive growth, and leave a lasting impression.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-neutral-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-bold text-white mb-1">150+</p>
                <p className="text-sm text-neutral-400">Projects Shipped</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">99%</p>
                <p className="text-sm text-neutral-400">Client Retention</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const WorkProcess = () => {
  const steps = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "1. Discovery",
      desc: "We analyze your business goals and plan the optimal digital strategy.",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "2. Design",
      desc: "Crafting intuitive, high-converting interfaces tailored to your brand.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "3. Development",
      desc: "Writing clean, scalable code using cutting-edge frameworks.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "4. Launch",
      desc: "Rigorous testing and a smooth deployment to the market.",
    },
  ];

  return (
    <section className="py-24 relative border-t border-white/5 bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
            How We Work
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            A Streamlined Process for Success
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-orange-500/30 transition-colors h-full">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-neutral-400">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web", "App", "Design"];

  const filteredPortfolio =
    filter === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  return (
    <section
      id="portfolio"
      className="py-24 relative border-t border-white/5 bg-neutral-950"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <FadeIn className="max-w-2xl">
            <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
              Selected Work
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">
              Work that speaks for itself.
            </h3>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-900 border border-white/10 rounded-full inline-flex">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat
                      ? "bg-white text-black shadow-sm"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-orange-400 text-sm font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-orange-400 transition-colors group"
          >
            View full portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section
      id="team"
      className="py-24 relative border-t border-white/5 bg-neutral-950"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
            The Minds Behind
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Meet our elite team
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-neutral-900/50 border border-white/5 overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                  {/* Social links on hover */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-neutral-400 text-sm">{member.role}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 relative border-t border-white/5 bg-neutral-950 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
            Client Love
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Don't just take our word for it.
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-8 rounded-2xl bg-neutral-900 border border-white/5 h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <p className="text-neutral-300 text-lg mb-8 flex-grow leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-24 relative border-t border-white/5 bg-neutral-950 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-900 to-amber-900 border border-white/10 px-8 py-20 text-center">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/40 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to scale your business?
              </h2>
              <p className="text-xl text-orange-100 mb-10">
                Let's discuss how OntoRex can help you achieve your digital
                goals. Reach out instantly via WhatsApp and let's build
                something amazing.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-medium bg-white text-black hover:bg-neutral-200 transition-colors text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group"
                >
                  <WhatsAppIcon className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />{" "}
                  WhatsApp Us Now
                </a>
                <a
                  href="mailto:ontorex.official@gmail.com"
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-medium bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors text-lg"
                >
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                OntoRex
              </span>
            </a>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Crafting premium digital experiences for forward-thinking brands
              worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href={FB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ontorexofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Digital Marketing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-green-500" /> +880 1873
                  189853
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> ontorex.official@gmail.com
              </li>
              <li>
                Banasree, Dhaka &<br />
                Chittagong, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} OntoRex. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => (
  <motion.a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-110 transition-all cursor-pointer group flex items-center justify-center"
  >
    <WhatsAppIcon className="w-8 h-8" />
    <span className="absolute right-full mr-4 bg-neutral-900 border border-white/10 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
      Chat with us!
    </span>
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-orange-500/30 selection:text-orange-200 font-sans">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html {
          scroll-behavior: smooth;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `,
        }}
      />

      <Navbar />
      <FloatingWhatsApp />
      <main>
        <Hero />
        <Services />
        <About />
        <WorkProcess />
        <Portfolio />
        <Team />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
