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
            Working with software testing, troubleshooting and automation, with a particular focus on bluetooth technology.
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
      I'm Barnabas "Barney" Toth, an SQA Supporter at Samsung in Aalborg, Denmark.
      I was born in Budapest, Hungary, where I studied computer
      science at BMSZC Blathy Otto Titusz IT High School.
    </p>

    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
      I work with tools such as Jira, Git, Ubuntu,
      ADB and Excel, while also collecting logs and data to help
      investigate and reproduce different issues.
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
        </ul>
      </div>
    </div>
  </div>
</section>

<section
  id="experience"
  className="min-h-screen border-t border-zinc-800 px-6 py-32 md:px-12 lg:px-24"
>
  <div className="max-w-5xl">
    <h2 className="text-4xl font-bold">Experience</h2>

    <div className="mt-12">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Samsung</h3>
          <p className="text-lg text-blue-400">SQA Supporter</p>
        </div>

        <p className="text-sm text-zinc-500">
          Aalborg, Denmark
        </p>
      </div>

      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
        My role involves investigating
        reported issues, performing manual testing, collecting
        logs, and supporting the software team with
        reproducing and understanding problems.
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
          <h4 className="text-lg font-semibold">Tools & Automation</h4>

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
          I automated parts of our test plan using Excel
          Power Query, allowing information to be populated automatically
          from multiple tables and sheets. This reduced repetitive manual
          data handling and made the test plan easier to maintain.
        </p>
      </div>
    </div>
  </div>
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