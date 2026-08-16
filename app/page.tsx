export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="min-h-screen flex items-center px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400">
            SQA Support • Bluetooth
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Barnabas Toth
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            I work with software testing, troubleshooting and automation, with a particular focus on bluetooth technology.
          </p>

          <div className="mt-10 flex gap-4">
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
          </div>
        </div>
      </section>

      <section
  id="about"
  className="min-h-screen border-t border-zinc-800 px-6 py-32 md:px-12 lg:px-24"
>
  <div className="max-w-4xl">
    <h2 className="text-4xl font-bold">About</h2>

    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
      My name is Barnabas "Barney" Toth, an SQA Support at Samsung in Aalborg, Denmark.
      I'm originally from Budapest, Hungary, where I studied computer
      science at BMSZC Blathy Otto Titusz IT High School.
    </p>

    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
      I regularly work with tools such as Jira, Excel, Ubuntu,
      ADB and Git, while also collecting logs and test data to help
      investigate and reproduce software issues.
    </p>

    <div className="mt-12 grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="text-xl font-semibold">Education</h3>

        <p className="mt-3 leading-relaxed text-zinc-400">
          BMSZC Blathy Otto Titusz IT High School
          <br />
          
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Certifications</h3>

        <ul className="mt-3 space-y-2 text-zinc-400">
          <li>FEOR 3142 - IT Systems Maintenance Technician</li>
          <li>Google - Introduction to AI</li>
          <li>Microsoft - Work Smarter with Microsoft Excel</li>
          <li>IELTS - English C1</li>
          <li>DU3 - Dansk Modul 2</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      <section
        id="experience"
        className="min-h-screen border-t border-zinc-800 px-6 py-32 md:px-12 lg:px-24"
      >
        <h2 className="text-4xl font-bold">Experience</h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          My professional IT experience.
        </p>
      </section>

      <section
        id="skills"
        className="min-h-screen border-t border-zinc-800 px-6 py-32 md:px-12 lg:px-24"
      >
        <h2 className="text-4xl font-bold">Skills</h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Technologies and areas I work with.
        </p>
      </section>

      <section
        id="projects"
        className="min-h-screen border-t border-zinc-800 px-6 py-32 md:px-12 lg:px-24"
      >
        <h2 className="text-4xl font-bold">Projects</h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Things I've built and worked on.
        </p>
      </section>

      <section
        id="contact"
        className="min-h-screen border-t border-zinc-800 px-6 py-32 md:px-12 lg:px-24"
      >
        <h2 className="text-4xl font-bold">Contact</h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Get in touch.
        </p>
      </section>
    </main>
  );
}