"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Project = {
  title: string;
  status: string;
  description: string;
  technologies: string[];
  built?: string[];
  developing?: string[];
  planned?: string[];
  github?: string;
};

const projects: Project[] = [
  {
    title: "Aquarium Monitor",
    status: "In development",
    description:
      "A personal project combining a 3D representation of my aquarium with real-time monitoring and IoT hardware.",
    technologies: [
      "SwiftUI",
      "RealityKit",
      "Blender",
      "ESP32",
      "DS18B20",
      "MQTT",
    ],
    built: [
      "Interactive 3D aquarium",
      "Blender → USDZ → RealityKit",
      "Animated water and bubbles",
      "16 animated neon fish",
      "Pan and pinch interaction",
    ],
    developing: [
      "ESP32 temperature monitoring",
      "DS18B20 water temperature sensor",
      "MQTT communication through HiveMQ",
      "Live temperature data",
    ],
    planned: [
      "Temperature threshold notifications",
      "pH monitoring",
      "Additional aquarium sensors",
    ],
    github: "https://github.com/barneybits/aquarium_monitor",
  },
{
  title: "Personal Portfolio",
  status: "In development",
  description:
    "A personal portfolio website I'm building to share my experience, projects and technical interests. If you're reading this, congratulations — you've already seen the project in action :-)",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  built: [
    "Responsive portfolio layout",
    "Interactive animations",
    "Reactive network background",
    "Mouse-responsive effects",
  ],
  developing: [
    "Project details",
    "Mobile refinements",
    "Visual polish",
  ],
  planned: [
    "Deploy the website",
    "Add more projects",
    "Additional interactive elements",
  ],
  github: "https://github.com/barneybits/my-portfolio",
},
  {
    title: "Home Lab",
    status: "Planned",
    description:
      "A compact home server project I'm planning to build around storage, backups, game server hosting and self-hosted network services.",
    technologies: [
      "Ubuntu Server",
      "NAS",
      "Pi-hole",
      "Unbound",
      "Tailscale",
    ],
    planned: [
      "NAS storage",
      "Automated backups",
      "Game server hosting",
      "Pi-hole network-wide ad blocking",
      "Unbound recursive DNS and local caching",
      "Tailscale remote access",
      "Server monitoring",
    ],
  },
  
];

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);

  const project = projects[current];

  const previousProject = () => {
    setCurrent((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setCurrent((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const sections = [
    {
      title: "Built",
      items: project.built,
    },
    {
      title: "In development",
      items: project.developing,
    },
    {
      title: "Planned",
      items: project.planned,
    },
  ].filter((section) => section.items && section.items.length > 0);

  return (
    <div className="relative mt-16">
      <div className="flex items-center gap-3 md:gap-8">

        {/* Previous */}
        <button
          type="button"
          onClick={previousProject}
          aria-label="Previous project"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-800 text-xl text-zinc-400 transition hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
        >
          ←
        </button>

        {/* Project */}
        <div className="min-w-0 flex-1 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p
                  className={`text-sm uppercase tracking-[0.25em] ${
                    project.status === "In development"
                      ? "text-blue-400"
                      : "text-zinc-500"
                  }`}
                >
                  {project.status}
                </p>

                <span className="text-sm text-zinc-600">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-3xl font-semibold md:text-4xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project status sections */}
              <div
                className={`mt-10 grid gap-8 ${
                  sections.length === 1
                    ? "md:grid-cols-1"
                    : sections.length === 2
                      ? "md:grid-cols-2"
                      : "md:grid-cols-3"
                }`}
              >
                {sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      {section.title}
                    </h4>

                    <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                      {section.items!.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* GitHub */}
              {project.github && (
                <div className="mt-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium transition hover:border-zinc-500 hover:bg-zinc-800"
                  >
                    View on GitHub →
                  </a>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={nextProject}
          aria-label="Next project"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-800 text-xl text-zinc-400 transition hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
        >
          →
        </button>
      </div>

      {/* Project indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Show ${project.title}`}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? "w-8 bg-blue-500"
                : "w-2 bg-zinc-700 hover:bg-zinc-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}