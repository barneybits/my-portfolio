"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
  const heroHeight = window.innerHeight;

  if (window.scrollY < heroHeight * 0.8) {
    setVisible(true);
  } else {
    setVisible(false);
  }
};

    const handleMouseMove = (event: MouseEvent) => {
      // Show the navbar when the cursor gets close to the top
      if (event.clientY < 80 && window.scrollY > window.innerHeight * 0.8) {
        setVisible(true);
      }

      if (event.clientY > 120 && window.scrollY > window.innerHeight * 0.8) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -30,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/80 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <a
          href="#home"
          className="font-semibold tracking-tight transition-colors hover:text-blue-400"
        >
          Home
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition-all hover:bg-zinc-800/70 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-400 hover:shadow-blue-500/30"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}