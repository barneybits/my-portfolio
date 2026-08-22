"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import ReactiveName from "./components/ReactiveName";
import Navbar from "./components/Navbar";
import ReactiveBackground from "./components/ReactiveBackground";
import NetworkBackground from "./components/NetworkBackground";
import ProjectCarousel from "./components/ProjectCarousel";
import CustomCursor from "./components/CustomCursor";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.25 }}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/80 text-lg text-zinc-300 shadow-xl shadow-black/20 backdrop-blur-xl transition-all hover:border-blue-500/50 hover:bg-zinc-900 hover:text-blue-400 md:bottom-8 md:right-8"
    >
      ⌃
    </motion.button>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <CustomCursor />
      <BackToTop />

      {/* Home */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-12 lg:px-24"
      >
        <NetworkBackground />
        <ReactiveBackground />

        <div className="relative z-10 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400"
          >
            SQA Support • Bluetooth
          </motion.p>

          <ReactiveName />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            Working with software testing, troubleshooting and automation,
            with a particular focus on Bluetooth technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex gap-4"
          >
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500"
            >
              Contact me
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-800 px-6 py-32 md:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* About text */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                About
              </p>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                My name is Barnabas "Barney" Toth and I'm currently working as
                an SQA Supporter at Samsung in Aalborg, Denmark. I'm originally
                from Budapest, Hungary, where I studied computer science at
                BMSZC Blathy Otto Titusz IT High School, where I
                got my IT Systems Maintenance Technician qualification.
              </p>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                Outside of work, I have quite a few interests. I enjoy
                travelling with my girlfriend and our little dog while taking
                photos along the way. I'm also interested in cars, planes or
                really anything with an engine. I spend some of my free time
                gaming, working on personal projects and sometimes
                experimenting with technology.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-zinc-800" />

              <div className="space-y-12">
                {/* Samsung */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-zinc-950 bg-blue-500" />

                  <p className="text-sm text-blue-400">2026 — Present</p>

                  <h3 className="mt-2 text-xl font-semibold">Samsung</h3>

                  <p className="mt-2 text-zinc-400">
                    SQA Supporter · Aalborg, Denmark
                  </p>
                </div>

                {/* Azzurra Nordkraft */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-zinc-950 bg-zinc-600" />

                  <p className="text-sm text-zinc-500">2021 — 2026</p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Azzurra Nordkraft
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    Restaurant Employee · Aalborg, Denmark
                  </p>
                </div>

                {/* Aalborg */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-zinc-950 bg-zinc-600" />

                  <p className="text-sm text-zinc-500">2021</p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Moved to Denmark
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    Continuing my journey in Aalborg.
                  </p>
                </div>

                {/* Education */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-zinc-950 bg-zinc-600" />

                  <p className="text-sm text-zinc-500">2017 — 2021</p>

                  <h3 className="mt-2 text-xl font-semibold">
                    BMSZC Blathy Otto Titusz IT High School
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    Computer Science · IT Systems Maintenance Technician
                  </p>
                </div>

                {/* Budapest */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-zinc-950 bg-zinc-600" />

                  <p className="text-sm text-zinc-500">
                    Budapest, Hungary
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">Budapest</h3>

                  <p className="mt-2 text-zinc-400">
                    Born and raised in Budapest, Hungary.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-24 border-t border-zinc-800 pt-16">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Certifications
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
                <p className="text-sm text-zinc-500">FEOR 3142</p>

                <h3 className="mt-3 font-semibold">
                  IT Systems Maintenance Technician
                </h3>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
                <p className="text-sm text-zinc-500">Google</p>

                <h3 className="mt-3 font-semibold">Introduction to AI</h3>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
                <p className="text-sm text-zinc-500">Microsoft</p>

                <h3 className="mt-3 font-semibold">
                  Work Smarter with Microsoft Excel
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="min-h-screen border-t border-zinc-800 px-6 py-32 md:px-12 lg:px-24"
      >
        <div className="relative z-10 max-w-5xl">
          <h2 className="text-4xl font-bold">Experience</h2>

          <div className="mt-12">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Samsung</h3>
                <p className="text-lg text-blue-400">SQA Supporter</p>
              </div>

              <div className="text-sm text-zinc-500 md:text-right">
                <p>June 2026 - Present</p>
                <p>Aalborg, Denmark</p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
              My role involves investigating reported issues, performing
              manual testing, collecting logs, and supporting the software
              infrastructure team with reproducing and understanding errors.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <h4 className="text-lg font-semibold">Testing</h4>

                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li>Bluetooth manual testing</li>
                  <li>Channel Sounding</li>
                  <li>Range testing</li>
                  <li>Power consumption</li>
                  <li>Firmware & host flashing</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Debugging</h4>

                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li>Issue reproduction</li>
                  <li>Log collection</li>
                  <li>Bluetooth airtrace</li>
                  <li>ADB</li>
                  <li>Ubuntu / Linux</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold">
                  Tools & Automation
                </h4>

                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li>Jira</li>
                  <li>Git</li>
                  <li>Python</li>
                  <li>Power Query</li>
                  <li>Excel</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 border-t border-zinc-800 pt-10">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
                Process Automation
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Improving the testing workflow
              </h3>

              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-400">
                I automated parts of our test plan using Excel Power Query,
                allowing information to be filled out automatically from
                multiple tables and sheets. This reduced repetitive manual
                data handling and made the test plan easier to maintain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative overflow-hidden border-t border-zinc-800 px-6 py-32 md:px-12 lg:px-24"
      >
        {/* Subtle dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          aria-hidden="true"
          style={{
          backgroundImage:
          "radial-gradient(rgba(255,255,255,0.9) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Things I'm building.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Personal projects where I get to experiment, build and learn
            outside of work.
          </p>

          <ProjectCarousel />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-zinc-800 px-6 py-32 md:px-12 lg:px-24"
      >
        {/* Subtle blue radial glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(59,130,246,0.22), transparent 50%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Get in touch
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's connect.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            If you're interested in my work, want to discuss a project,
            or just want to connect, feel free to reach out on the links below.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:barneytoth@icloud.com"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:-translate-y-1 hover:border-zinc-600"
            >
              <p className="text-sm text-zinc-500">Email</p>
              <p className="mt-2 font-medium">barneytoth@icloud.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/thebarnabastoth/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:-translate-y-1 hover:border-zinc-600"
            >
              <p className="text-sm text-zinc-500">LinkedIn</p>
              <p className="mt-2 font-medium">View my profile</p>
            </a>

            <a
              href="https://github.com/barneybits"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:-translate-y-1 hover:border-zinc-600"
            >
              <p className="text-sm text-zinc-500">GitHub</p>
              <p className="mt-2 font-medium">View my projects</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}