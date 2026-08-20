"use client";

import { motion } from "motion/react";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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
