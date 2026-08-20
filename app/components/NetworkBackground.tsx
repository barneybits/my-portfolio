"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let animationFrame = 0;
    let nodes: Node[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const nodeCount = window.innerWidth < 768 ? 25 : 45;

      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }));
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const animate = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > window.innerWidth) {
          node.vx *= -1;
        }

        if (node.y < 0 || node.y > window.innerHeight) {
          node.vy *= -1;
        }
      }

      const connectionDistance = 140;
      const mouseDistance = 180;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distanceToMouse < mouseDistance) {
          const strength =
            (1 - distanceToMouse / mouseDistance) * 0.08;

          node.vx -= dx * strength * 0.01;
          node.vy -= dy * strength * 0.01;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];

          const distanceX = node.x - other.x;
          const distanceY = node.y - other.y;

          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY
          );

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.18;

            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);

            context.strokeStyle = `rgba(100, 150, 255, ${opacity})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }

      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const opacity =
          distance < mouseDistance
            ? 0.5
            : 0.2;

        context.beginPath();
        context.arc(node.x, node.y, 1.5, 0, Math.PI * 2);

        context.fillStyle = `rgba(180, 200, 255, ${opacity})`;
        context.fill();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}