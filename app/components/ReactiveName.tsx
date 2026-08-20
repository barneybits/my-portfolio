"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function ReactiveName() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 150,
    damping: 30,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 150,
    damping: 30,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const normalizedX = (event.clientX - centerX) / centerX;
      const normalizedY = (event.clientY - centerY) / centerY;

      // Move away from the cursor.
      mouseX.set(-normalizedX * 6);
      mouseY.set(-normalizedY * 4);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.h1
      style={{ x, y }}
      className="text-5xl font-bold tracking-tight md:text-7xl"
    >
      Barnabas Toth
    </motion.h1>
  );
}