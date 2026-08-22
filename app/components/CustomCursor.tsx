"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);

      const target = event.target as HTMLElement;

      setHovering(
        Boolean(
          target.closest(
            "a, button, input, textarea, select, [role='button']"
          )
        )
      );
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-zinc-300 shadow-[0_0_5px_rgba(255,255,255,0.45)] md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.4 : 1,
        }}
        transition={{
          x: { duration: 0.05 },
          y: { duration: 0.05 },
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
        }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-8 w-8 rounded-full border border-white/40 shadow-[0_0_12px_rgba(96,165,250,0.12)] md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.5 : 1,
        }}
        transition={{
          x: { duration: 0.18, ease: "easeOut" },
          y: { duration: 0.18, ease: "easeOut" },
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
        }}
      />
    </>
  );
}