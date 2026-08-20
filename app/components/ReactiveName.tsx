"use client";

import { useEffect } from "react";
import { motion, useSpring } from "motion/react";

export default function ReactiveName() {
  const x = useSpring(0, {
    stiffness: 120,
    damping: 25,
  });

  const y = useSpring(0, {
    stiffness: 120,
    damping: 25,
  });

  useEffect(() => {
    let animationFrame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate how far the mouse is from the center
        const normalizedX = (event.clientX - centerX) / centerX;
        const normalizedY = (event.clientY - centerY) / centerY;

        // Move in the OPPOSITE direction
        x.set(-normalizedX * 8);
        y.set(-normalizedY * 5);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [x, y]);

  return (
    <motion.h1
      style={{ x, y }}
      className="text-5xl font-bold tracking-tight md:text-7xl"
    >
      Barnabas Toth
    </motion.h1>
  );
}