"use client";

import { useEffect, useRef } from "react";

export default function ReactiveBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        if (!glowRef.current) return;

        glowRef.current.style.transform = `translate3d(
          ${event.clientX}px,
          ${event.clientY}px,
          0
        ) translate(-50%, -50%)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        ref={glowRef}
        className="absolute h-[400px] w-[400px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0) 70%)",
          transform: "translate3d(50vw, 50vh, 0) translate(-50%, -50%)",
          willChange: "transform",
        }}
      />
    </div>
  );
}