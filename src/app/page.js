"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";
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
  ChevronDown,
  Sparkles,
  Bot,
  Cpu,
  Send,
  Quote,
  Check,
  Play,
  Globe,
  Shield,
  Trophy,
} from "lucide-react";

// --- CUSTOM BRAND ICONS ---
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
    client: "Nexus Bank",
    desc: "A comprehensive financial analytics dashboard with real-time data visualization.",
    tech: ["React", "Node.js", "D3.js"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Health Tracker App",
    category: "App",
    client: "FitLife Plus",
    desc: "AI-powered fitness app tracking daily macros, workouts, and sleep patterns.",
    tech: ["Flutter", "Firebase"],
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    category: "Design",
    client: "CloudSync",
    desc: "High-converting landing page optimized for lead generation and A/B testing.",
    tech: ["Figma", "Tailwind CSS"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Urban E-commerce",
    category: "App",
    client: "UrbanWear",
    desc: "Seamless mobile shopping experience with fast checkout and AR try-on features.",
    tech: ["React Native", "Stripe"],
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    title: "Crypto Trading Web",
    category: "Web",
    client: "CoinFlow",
    desc: "Secure cryptocurrency exchange platform with live websocket market data.",
    tech: ["Next.js", "WebSockets"],
    img: "https://images.unsplash.com/photo-1621504450181-5d356f153326?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "Lumina Brand Identity",
    category: "Design",
    client: "Lumina Agency",
    desc: "Complete visual identity including typography, color palette, and logo design.",
    tech: ["Illustrator", "Photoshop"],
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
  },
];

const team = [
  {
    name: "Foysal",
    role: "Founder & CEO ",
    img: "https://i.ibb.co.com/zTDsPPyB/photo-2026-03-29-00-03-03.jpg",
    bio: "I lead operations and specialize in building scalable architectures and system designs, with over 5 years of hands-on experience delivering reliable, high-performance solutions.",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Award-winning designer obsessed with pixel-perfect UI and user psychology.",
  },
  {
    name: "David Chen",
    role: "Marketing Director",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    bio: "Data-driven growth hacker turning ambitious startups into industry leaders.",
  },
];

const testimonials = [
  {
    name: "Emily Watson",
    role: "CEO, TechNova",
    text: "OntoRex transformed our vision into a stunning reality. Their attention to detail and speed of delivery is unmatched. Absolutely thrilled!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Marcus Reed",
    role: "Founder, GrowthApp",
    text: "The mobile app they built for us increased our user retention by 40%. Highly recommend their talented and dedicated team.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Sophia Martinez",
    role: "Marketing VP, Lumina",
    text: "From brand design to web development, OntoRex handled everything flawlessly. They are true professionals and artists.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "James Carter",
    role: "CTO, NextGen",
    text: "Their clean code architecture and scalable solutions are exactly what we needed for our high-traffic platform. Excellent communication.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Linda Chen",
    role: "Director, Innovate LLC",
    text: "Fast, responsive, and incredibly creative. The Rex AI estimator was surprisingly accurate too! A fantastic partner for digital growth.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
];

const faqs = [
  {
    question: "How long does it take to build a website or app?",
    answer:
      "Timelines vary heavily based on complexity. A standard business website might take 2-4 weeks, while a custom mobile application can take anywhere from 8-12 weeks from initial design to final launch.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes! We provide 3 months of free bug-fixing and technical support after launch. We also offer ongoing monthly maintenance packages to keep your platform updated and secure.",
  },
  {
    question: "What technologies and frameworks do you use?",
    answer:
      "We leverage modern, scalable tech stacks including React, Next.js, Node.js, Flutter, React Native, Tailwind CSS, and cloud platforms like AWS and Firebase to ensure your product is fast and future-proof.",
  },
  {
    question: "Can you redesign or upgrade my existing digital product?",
    answer:
      "Absolutely. Our UI/UX team specializes in revamping legacy websites and applications to drastically improve user experience, conversion rates, and modern aesthetic appeal.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible engagement models. For well-defined projects, we provide a fixed-price quote. For ongoing or evolving scopes, we can work on a dedicated team/hourly basis.",
  },
];

const techStack = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Adobe CC", icon: "https://cdn.simpleicons.org/adobe/FF0000" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
];

// --- HELPER COMPONENTS ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor((duration * 1000) / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

// --- MAIN COMPONENTS ---
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 origin-left z-[100]"
    />
  );
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices with a mouse (Improves mobile performance significantly)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    if (mediaQuery.matches) {
      const updateMousePosition = (e) => {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
        });
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => window.removeEventListener("mousemove", updateMousePosition);
    }
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
      transition={{ type: "spring", stiffness: 100, damping: 25, mass: 0.5 }}
      className="fixed w-[400px] h-[400px] bg-orange-600/15 rounded-full blur-[100px] pointer-events-none z-[1] hidden md:block"
    />
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[60] transition-all duration-500 border-b ${
        scrolled
          ? "bg-black/40 backdrop-blur-2xl backdrop-saturate-150 border-white/10 py-3 md:py-4 shadow-sm"
          : "bg-transparent border-transparent py-5 md:py-6"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group z-50">
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
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-bold bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <WhatsAppIcon className="w-4 h-4 text-green-500 group-hover:text-green-600 transition-colors" />{" "}
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 z-50 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full md:hidden bg-black/60 backdrop-blur-3xl backdrop-saturate-150 border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col px-5 py-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg font-medium px-4 py-3 transition-colors text-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-full bg-white/10 my-2" />
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-5 py-4 mt-2 rounded-xl text-center font-bold bg-white/10 border border-white/20 text-white active:bg-white active:text-black flex items-center justify-center gap-2 transition-all"
              >
                <WhatsAppIcon className="w-6 h-6 text-green-500" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const words = ["Future.", "AI App.", "SaaS.", "Vision."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden px-4 md:px-6">
      {/* Background Gradients & Animated Shapes */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-600/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-amber-600/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"
      />

      {/* Floating Particles - Reduced count on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden sm:block">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute bg-orange-500 rounded-full w-1 h-1 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

      <div className="container relative mx-auto text-center z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-300 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Accepting projects for 2026
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-[0_0_20px_rgba(249,115,22,0.15)]">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" /> Engineering Digital
              Excellence
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Transform Your Vision Into <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
              Premium Digital Experiences.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-400 mb-8 md:mb-12 leading-relaxed px-2">
            OntoRex builds high-performance websites, scalable mobile
            applications, and AI-powered solutions that drive real business
            growth for modern enterprises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto px-8 py-4 sm:py-4 rounded-xl sm:rounded-full font-bold bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5 text-green-600 md:group-hover:scale-110 transition-transform relative z-10" />
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-4 h-4 md:group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 sm:py-4 rounded-xl sm:rounded-full font-medium bg-neutral-900 border border-white/10 text-white hover:bg-neutral-800 transition-all active:scale-95 text-center"
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-500 hidden md:block"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-neutral-500 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section className="py-8 md:py-12 relative border-t border-white/5 bg-neutral-950 overflow-hidden flex flex-col items-center">
      <FadeIn className="text-center mb-6 md:mb-10 w-full">
        <h2 className="text-xs md:text-sm font-semibold text-neutral-500 uppercase tracking-wider">
          Technologies We Master
        </h2>
      </FadeIn>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex items-center w-max will-change-transform"
        >
          {[...techStack, ...techStack].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 md:gap-4 text-lg md:text-2xl font-bold text-neutral-600 mx-6 md:mx-10 whitespace-nowrap hover:text-white transition-all cursor-default group"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 md:w-8 md:h-8 opacity-50 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                loading="lazy"
              />
              <span className="group-hover:text-orange-400 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-32 relative z-10 border-t border-white/5 bg-neutral-950 overflow-hidden"
    >
      {/* Section Glows */}
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-600/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none transform -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-600/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none transform -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-semibold mb-4 md:mb-6">
            <Layers className="w-3 h-3 sm:w-4 sm:h-4" /> Our Expertise
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Digital Solutions that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
              Scale
            </span>
          </h3>
          <p className="text-neutral-400 text-base md:text-lg px-2 max-w-2xl mx-auto">
            We provide end-to-end services to take your brand from concept to
            market leader, combining strategy, design, and engineering.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative p-[1px] rounded-[2.5rem] overflow-hidden h-full cursor-pointer shadow-lg md:hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] transition-all duration-500"
              >
                {/* Gradient Border Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 md:group-hover:from-orange-500 md:group-hover:via-amber-500 md:group-hover:to-yellow-500 transition-all duration-500 opacity-60 md:group-hover:opacity-100" />

                {/* Card Content Container */}
                <div className="relative h-full bg-neutral-900/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] overflow-hidden flex flex-col border border-white/5 md:group-hover:border-transparent transition-colors duration-500">
                  {/* Top Right Glowing Orb */}
                  <div
                    className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-bl ${service.color} opacity-0 md:group-hover:opacity-30 blur-3xl transition-opacity duration-700 rounded-full pointer-events-none`}
                  />

                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-neutral-950 border border-white/10 flex items-center justify-center text-white mb-6 md:mb-8 md:group-hover:scale-110 md:group-hover:bg-gradient-to-br md:group-hover:from-orange-500 md:group-hover:to-amber-500 md:group-hover:border-transparent transition-all duration-500 shadow-xl relative z-10 md:group-hover:text-white">
                    {service.icon}
                  </div>

                  {/* Text Content */}
                  <h4 className="text-2xl font-bold text-white mb-3 md:mb-4 relative z-10 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8 md:mb-10 relative z-10 flex-grow">
                    {service.description}
                  </p>

                  {/* Animated Explore Button */}
                  <div className="flex items-center gap-3 text-sm font-bold text-neutral-400 md:group-hover:text-white transition-colors duration-300 uppercase tracking-wider relative z-10 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center md:group-hover:bg-white md:group-hover:border-transparent md:group-hover:text-orange-500 transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-4 h-4 transform md:group-hover:translate-x-0.5 md:-rotate-45 md:group-hover:rotate-0 transition-all duration-300" />
                    </div>
                    <span className="opacity-0 -translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                      Explore Service
                    </span>
                  </div>
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
      className="py-16 md:py-24 relative border-t border-white/5 bg-neutral-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 relative z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Team collaboration"
                  className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-12 bg-neutral-900 border border-white/10 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl z-20 backdrop-blur-xl md:hover:border-orange-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                    <Star className="w-5 h-5 md:w-7 md:h-7 fill-current" />
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl font-bold text-white">
                      5.0
                    </p>
                    <p className="text-xs md:text-sm text-neutral-400">
                      Average Rating
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-2 md:mb-3 mt-8 lg:mt-0">
              Why Choose Us
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Built for founders who demand excellence.
            </h3>
            <p className="text-neutral-400 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              We don't just build software; we build businesses. OntoRex
              partners with visionary brands to deliver digital solutions that
              solve real problems, drive growth, and leave a lasting impression.
            </p>

            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm md:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <CountUp end={150} />+
                </p>
                <p className="text-xs md:text-sm text-neutral-400">
                  Projects Shipped
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <CountUp end={99} />%
                </p>
                <p className="text-xs md:text-sm text-neutral-400">
                  Client Retention
                </p>
              </motion.div>
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
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      title: "1. Discovery",
      desc: "Analyze business goals and plan optimal strategy.",
    },
    {
      icon: <PenTool className="w-5 h-5 md:w-6 md:h-6" />,
      title: "2. Design",
      desc: "Crafting intuitive, high-converting interfaces.",
    },
    {
      icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
      title: "3. Development",
      desc: "Clean, scalable code using modern frameworks.",
    },
    {
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
      title: "4. Launch",
      desc: "Rigorous testing and a smooth deployment.",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative border-t border-white/5 bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-2 md:mb-3">
            How We Work
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            A Streamlined Process
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative">
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative p-5 md:p-6 rounded-2xl bg-neutral-900/40 border border-white/5 md:hover:border-orange-500/50 transition-colors h-full group z-10 backdrop-blur-sm shadow-md">
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-800 border border-white/10 text-orange-400 flex items-center justify-center mb-4 md:mb-6 md:group-hover:bg-orange-500 md:group-hover:text-white transition-all duration-300 md:group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
                >
                  {step.icon}
                </motion.div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-neutral-400 text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    {
      id: "01",
      title: "Bank-Grade Security",
      desc: "Impenetrable security infrastructure ensuring your users' data is always safe and fully compliant with global standards.",
      icon: <Shield className="w-7 h-7 md:w-8 md:h-8 text-orange-500" />,
      glow: "bg-orange-500/20",
    },
    {
      id: "02",
      title: "Global Reach",
      desc: "Deploying highly scalable CDN networks and cloud architectures to serve your clients worldwide, seamlessly without lag.",
      icon: <Globe className="w-7 h-7 md:w-8 md:h-8 text-amber-500" />,
      glow: "bg-amber-500/20",
    },
    {
      id: "03",
      title: "Award Winning Design",
      desc: "Recognized internationally for outstanding UI/UX design, peak performance, and cutting-edge digital innovation.",
      icon: <Trophy className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" />,
      glow: "bg-yellow-500/20",
    },
  ];

  return (
    <section className="py-16 md:py-32 relative border-t border-white/5 bg-neutral-950 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-600/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs md:text-sm font-bold text-orange-400 uppercase tracking-widest mb-2 md:mb-3">
            Core Values
          </h2>
          <h3 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Why leading brands
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
              trust us.
            </span>
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {values.map((val, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className={`relative group ${idx === 1 ? "md:mt-16" : ""}`}>
                {/* Glowing backdrop on hover */}
                <div
                  className={`absolute inset-0 ${val.glow} blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}
                />

                <div className="relative h-full p-8 md:p-10 rounded-3xl bg-neutral-900/50 border border-white/5 backdrop-blur-xl md:hover:border-orange-500/30 transition-all duration-500 overflow-hidden shadow-2xl md:hover:-translate-y-2">
                  {/* Decorative large number */}
                  <span className="absolute -top-4 -right-2 md:-top-6 md:-right-6 text-8xl md:text-9xl font-black text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors duration-500">
                    {val.id}
                  </span>

                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-neutral-950 border border-white/10 flex items-center justify-center mb-6 md:mb-8 relative z-10 md:group-hover:scale-110 transition-transform duration-500 shadow-xl md:group-hover:shadow-orange-500/20">
                    {val.icon}
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 relative z-10 group-hover:text-orange-400 transition-colors duration-300">
                    {val.title}
                  </h4>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed relative z-10">
                    {val.desc}
                  </p>

                  {/* Bottom glowing line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 md:group-hover:w-full transition-all duration-700 ease-out" />
                </div>
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
      className="py-16 md:py-32 relative border-t border-white/5 bg-neutral-950 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
          <FadeIn className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-semibold mb-4 md:mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" /> Our Masterpieces
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Work that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                speaks
              </span>{" "}
              for itself.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-full inline-flex w-full md:w-auto shadow-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`flex-1 md:flex-none px-5 md:px-6 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-bold transition-all duration-300 text-center ${
                    filter === cat
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer shadow-xl h-[400px] md:h-[480px]"
              >
                {/* Image Layer */}
                <div className="absolute inset-0 w-full h-full bg-neutral-800">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform scale-100 md:group-hover:scale-110 transition-transform duration-1000 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950/90 opacity-80 md:group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-orange-900/30 mix-blend-overlay opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Top Tag */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg transform -translate-y-2 opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 delay-100 hidden md:block">
                  {item.category}
                </div>

                {/* Initial Title (Disappears on hover in Desktop) */}
                <div className="absolute bottom-8 left-6 right-6 transition-all duration-500 md:group-hover:opacity-0 md:group-hover:translate-y-4 z-10 md:block flex flex-col justify-end h-full md:h-auto">
                  <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2 md:hidden">
                    {item.category}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg leading-tight">
                    {item.title}
                  </h4>
                </div>

                {/* Floating Bottom Card - Reveals on Hover */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-6 rounded-2xl bg-neutral-950/80 backdrop-blur-xl border border-white/10 transform translate-y-8 opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out md:group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] z-20 hidden md:block">
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">
                      Client: {item.client}
                    </p>
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center -mt-2 -mr-2 shadow-[0_0_15px_rgba(249,115,22,0.5)] transform scale-0 md:group-hover:scale-100 transition-transform duration-500 delay-200">
                      <ArrowRight className="w-4 h-4 text-white -rotate-45" />
                    </div>
                  </div>

                  <h4 className="text-xl font-black text-white mb-3">
                    {item.title}
                  </h4>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-md text-[10px] md:text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 md:mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 text-white font-bold transition-all group px-8 py-4 rounded-2xl bg-neutral-900 border border-white/10 hover:border-orange-500 hover:bg-orange-500/10 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] w-full sm:w-auto active:scale-95"
          >
            Explore All Projects{" "}
            <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
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
      className="py-16 md:py-24 relative border-t border-white/5 bg-neutral-950 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-2 md:mb-3">
            The Minds Behind
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Meet our elite team
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative h-[400px] md:h-[480px] rounded-3xl overflow-hidden group shadow-lg md:hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-shadow">
                {/* Background Image */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Glassmorphism Info Card */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <div className="relative p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transform md:translate-y-12 md:group-hover:translate-y-0 transition-all duration-500 md:hover:border-orange-500/50">
                    {/* Decorative orange glow inside card */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-500/30 blur-2xl rounded-full" />

                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1 relative z-10">
                      {member.name}
                    </h4>
                    <p className="text-orange-400 text-xs md:text-sm font-medium mb-2 relative z-10">
                      {member.role}
                    </p>

                    {/* Bio - Reveals on hover */}
                    <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500">
                      <p className="text-neutral-300 text-xs md:text-sm overflow-hidden opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 mt-2">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 mt-4 md:mt-5 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 md:delay-200">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
      className="py-16 md:py-24 relative border-t border-white/5 bg-neutral-950 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 mb-10 md:mb-16">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-2 md:mb-3">
            Client Love
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Don't just take our word for it.
          </h3>
        </FadeIn>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] relative z-10 pb-6 md:pb-10 cursor-grab active:cursor-grabbing">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="flex items-stretch w-max gap-4 md:gap-6 px-4 md:px-6 will-change-transform"
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[350px] md:w-[450px] p-6 md:p-8 rounded-2xl md:rounded-3xl bg-neutral-900/60 backdrop-blur-md border border-white/10 flex flex-col md:hover:border-orange-500/40 transition-all shrink-0 md:hover:-translate-y-2 duration-300 shadow-lg"
            >
              <Quote className="w-6 h-6 md:w-10 md:h-10 text-orange-500/20 mb-3 md:mb-4" />
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <p className="text-neutral-300 text-sm md:text-lg mb-6 md:mb-8 flex-grow leading-relaxed font-medium">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 md:pt-6 border-t border-white/10">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-orange-500/30"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-white flex items-center gap-1.5 text-sm md:text-base">
                    {testimonial.name}
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0); // Default open first item for better UI reveal

  return (
    <section
      id="faq"
      className="py-16 md:py-32 relative border-t border-white/5 bg-neutral-950 overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-600/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-600/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column - Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:pb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-semibold mb-6">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" /> Support Center
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Got <br className="hidden lg:block" /> Questions?
              </h2>
              <p className="text-neutral-400 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed max-w-md">
                Everything you need to know about our processes, timelines, and
                how we deliver world-class digital products.
              </p>

              <div className="hidden lg:block p-6 rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm max-w-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="text-white font-bold text-lg mb-2 relative z-10">
                  Still have questions?
                </h4>
                <p className="text-neutral-400 text-sm mb-6 relative z-10">
                  Can't find the answer you're looking for? Reach out to our
                  team.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-orange-500 hover:text-white transition-colors relative z-10 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" /> Let's Chat
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Accordions */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6 pt-2 lg:pt-0">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div
                    className={`relative overflow-hidden rounded-2xl md:rounded-3xl border transition-all duration-500 ${
                      isOpen
                        ? "bg-gradient-to-br from-neutral-900 to-neutral-800 border-orange-500/40 shadow-[0_0_30px_rgba(249,115,22,0.1)]"
                        : "bg-neutral-900/30 border-white/5 hover:border-white/20 hover:bg-neutral-900/60"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full px-5 py-5 md:px-8 md:py-7 flex items-start justify-between text-left focus:outline-none group"
                    >
                      <span
                        className={`text-base md:text-xl font-bold pr-6 transition-colors duration-300 ${isOpen ? "text-orange-400" : "text-white group-hover:text-orange-300"}`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-orange-500 text-white rotate-180 shadow-lg shadow-orange-500/25" : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white"}`}
                      >
                        <ChevronDown className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-6 md:px-8 md:pb-8">
                            {/* Decorative Line */}
                            <div className="h-px w-full bg-gradient-to-r from-orange-500/30 to-transparent mb-4 md:mb-6" />
                            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Mobile CTA (Shows only on small screens) */}
          <div className="lg:hidden mt-8 w-full">
            <FadeIn>
              <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/50 text-center">
                <h4 className="text-white font-bold text-lg mb-2">
                  Still have questions?
                </h4>
                <p className="text-neutral-400 text-sm mb-5">
                  Reach out directly to our team.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-500 text-white font-bold active:scale-95 transition-transform"
                >
                  <MessageCircle className="w-4 h-4" /> Let's Chat
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-32 relative border-t border-white/5 bg-neutral-950 overflow-hidden px-4 md:px-0"
    >
      {/* Intense Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-orange-600/20 rounded-full blur-[120px] md:blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-0 sm:px-6 lg:px-12 relative z-10">
        <FadeIn>
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-neutral-900/40 border border-white/10 px-6 py-16 md:px-12 md:py-24 text-center shadow-2xl backdrop-blur-xl group">
            {/* Animated Abstract Shapes inside the card */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[50%] -left-[10%] w-[120%] h-[200%] bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10 opacity-50 blur-3xl pointer-events-none"
            />

            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              {/* Trust Badge */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md shadow-lg">
                <div className="flex -space-x-3">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                    alt="Avatar"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
                    alt="Avatar"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                    alt="Avatar"
                  />
                </div>
                <span className="text-xs md:text-sm font-medium text-neutral-300">
                  Join <span className="text-white font-bold">150+</span> happy
                  founders
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                  scale
                </span>{" "}
                your business?
              </h2>
              <p className="text-base md:text-xl text-neutral-400 mb-10 md:mb-12 font-medium px-2 max-w-2xl mx-auto">
                Let's discuss how OntoRex can help you achieve your digital
                goals. Reach out instantly via WhatsApp and let's build
                something amazing.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
                <div className="relative w-full sm:w-auto">
                  {/* Pulsing ring behind button */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full font-bold bg-white text-black hover:bg-neutral-200 transition-colors text-base md:text-lg flex items-center justify-center gap-3 active:scale-95 shadow-xl"
                  >
                    <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 text-green-500" />
                    Start Your Project
                  </a>
                </div>
                <a
                  href="mailto:ontorex.official@gmail.com"
                  className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full font-bold bg-neutral-950 border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all text-base md:text-lg text-center active:scale-95"
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
    <footer className="bg-neutral-950 pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[100px] md:h-[200px] bg-orange-600/10 rounded-t-[100%] blur-[60px] md:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 md:mb-6 group">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg md:group-hover:shadow-orange-500/50 transition-all">
                <span className="text-white font-black text-xl md:text-2xl">
                  O
                </span>
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-white">
                OntoRex
              </span>
            </a>
            <p className="text-neutral-400 text-sm md:text-base mb-6 leading-relaxed">
              Crafting premium digital experiences for forward-thinking brands
              worldwide.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href={FB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/ontorexofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">
              Services
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Digital Marketing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-orange-400 transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">
              Company
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-orange-400 transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6">
              Subscribe to Newsletter
            </h4>
            <p className="text-neutral-400 text-xs md:text-sm mb-4">
              Get the latest insights on tech and design.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-neutral-900 border border-white/10 rounded-lg md:rounded-xl px-4 py-2 w-full text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg md:rounded-xl transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-neutral-400 mt-6">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors font-medium"
                >
                  <WhatsAppIcon className="w-4 h-4 text-green-500" /> +880 1873
                  189853
                </a>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <Mail className="w-4 h-4 text-orange-400" />{" "}
                ontorex.official@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-neutral-500 font-medium text-center md:text-left">
          <p>© {new Date().getFullYear()} OntoRex. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
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
    className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-3 md:p-4 bg-green-500 text-white rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] md:hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] md:hover:scale-110 transition-all cursor-pointer group flex items-center justify-center active:scale-90"
  >
    <WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8" />
    <span className="absolute right-full mr-4 bg-neutral-900 border border-white/10 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none md:group-hover:opacity-100 transition-opacity shadow-lg hidden md:block">
      Chat with us!
    </span>
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-[100svh] bg-neutral-950 text-white selection:bg-orange-500/30 selection:text-orange-200 font-sans cursor-default overflow-x-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html {
          scroll-behavior: smooth;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }
      `,
        }}
      />

      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <FloatingWhatsApp />

      <main className="overflow-hidden">
        <Hero />
        <TechStack />
        <Services />
        <About />
        <WorkProcess />
        <CoreValues />
        <Portfolio />
        <Team />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
