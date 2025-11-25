import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { LiquidSection } from "@/components/LiquidSection";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import PageVortex from "@/components/PageVortex";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-purple-500/30 relative dark:bg-zinc-950 dark:text-zinc-50">
        <Navbar />
        <PageVortex />

        <div className="mt-10 md:mt-20 relative z-10 max-w-5xl mx-auto p-6 md:p-12 space-y-24 pt-16">
          {/* Header / Hero & About (combined) */}
          <LiquidSection id="about">
            <div className="relative">
              <div className="relative z-30 space-y-8 md:space-y-12">
                <div className="relative">
                  <div className="space-y-2 relative z-10">
                    <h1 className="text-4xl font-bold text-center md:text-left tracking-wide sm:text-5xl md:text-6xl md:whitespace-nowrap bg-linear-to-r from-zinc-900 to-purple-700 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] dark:from-white dark:to-purple-200">
                      Mohd Hafiz Jumahiddin
                    </h1>
                    <div className="md:max-w-[60%] space-y-2">
                      <p className="text-lg text-zinc-600 font-medium text-center md:text-left dark:text-zinc-300">
                        Full Stack Web Developer & UI/UX Designer
                      </p>
                      <div className="space-x-1 flex flex-row items-center justify-center md:justify-start">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Based in</p>
                        <a href="https://maps.app.goo.gl/DPvKDBhTXYuaoJju6" target="_blank" className="text-sm hover:text-purple-700 transition decoration-purple-500/50 underline-offset-4 dark:hover:text-purple-300">Kota Kinabalu, Sabah</a>
                      </div>
                      <div className="space-y-4 flex flex-row items-center justify-center md:justify-start">
                        <div className="flex gap-4 text-sm font-medium text-zinc-500 pt-2 dark:text-zinc-400">
                          <a href="https://www.linkedin.com/in/hafizjbi/" target="_blank" className="hover:text-purple-700 transition underline decoration-purple-500/50 underline-offset-4 dark:hover:text-purple-300">LinkedIn</a>
                          <a href="https://github.com/sSkr0d" target="_blank" className="hover:text-purple-700 transition underline decoration-purple-500/50 underline-offset-4 dark:hover:text-purple-300">GitHub</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 md:max-w-[60%]">
                  <h2 className="text-2xl font-semibold tracking-tight text-purple-900 dark:text-purple-100 cursor-default">About</h2>
                  <p className="text-zinc-600 leading-relaxed text-lg dark:text-zinc-300 cursor-default">
                    I’m a full‑stack web developer and UI/UX designer based in Kota Kinabalu. I build fast, accessible web apps with TypeScript, React/Next.js, Tailwind and Node, and I’ve delivered end‑to‑end systems using Laravel and MySQL for government projects. I enjoy solving messy problems, simplifying user journeys, and collaborating with teams to ship reliable software.
                  </p>
                </div>
              </div>

              {/* Desktop-only Profile Image (3D pop-out) */}
              <div className="absolute -bottom-8 -right-8 w-[280px] md:w-[350px] lg:w-[400px] hidden md:block pointer-events-none z-20">
                <Image src="/profilepic.png" alt="Mohd Hafiz Jumahiddin" width={500} height={600} className="w-full h-auto object-contain drop-shadow-2xl rounded-br-3xl" priority />
              </div>
            </div>
          </LiquidSection>

          {/* Experience */}
          <LiquidSection id="experience">
            <h2 className="text-2xl font-semibold tracking-tight mb-8 text-purple-900 dark:text-purple-100 cursor-default">Work Experience</h2>
            <div className="space-y-10 cursor-default">
              <div className="space-y-3 relative pl-4 border-l-2 border-purple-500/30">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Full Stack Developer (Internship)</h3>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">March 2025 — August 2025</span>
                </div>
                <div className="text-purple-700 font-medium dark:text-purple-300">Jabatan Perkhidmatan Komputer Negeri Sabah</div>
                <ul className="list-disc pl-5 space-y-2 text-zinc-500 leading-relaxed dark:text-zinc-400">
                  <li>Developed the Sistem Tempahan Kenderaan Kerajaan Negeri Sabah using Laravel, React, Tailwind, and MySQL; completed the development phase within 5 months.</li>
                  <li>Integrated 3 open-source map APIs (OpenStreetMap, Nominatim, ORS) to enable route generation.</li>
                  <li>Created system documentation and prepared a comprehensive user manual in accordance with government standards.</li>
                  <li>Successfully coordinated project handover to department staff for code refactoring, penetration testing, and deployment preparation.</li>
                </ul>
              </div>
            </div>
          </LiquidSection>

          {/* Education */}
          <LiquidSection id="education">
            <h2 className="text-2xl font-semibold tracking-tight mb-6 text-purple-900 dark:text-purple-100 cursor-default">Education</h2>
            <div className="space-y-4 cursor-default">
              <div className="group rounded-2xl border border-zinc-200 bg-white/50 p-6 transition transform duration-200 hover:scale-105 hover:bg-purple-100/50 hover:border-purple-500/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.1)] dark:border-white/10 dark:bg-black/20 dark:hover:bg-purple-900/10 dark:hover:shadow-[0_0_8px_rgba(168,85,247,0.06)]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Bachelor of Computer Science with Honours (Software Engineering)</h3>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Sept 2021 - Dec 2025</span>
                </div>
                <div className="text-purple-700 dark:text-purple-300">Universiti Malaysia Sabah</div>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">Developed a strong theoretical and practical foundation in core Computer Science principles, including Data Structures and Algorithms, Object-Oriented Programming (OOP), and Computer Architecture. Applied this knowledge by specializing in Full-Stack Web Development, where I craft high-performance, modern, and responsive systems with an emphasis on optimal User Experience (UX).</p>
                <p className="mt-3 inline-flex items-center rounded-full bg-zinc-100/60 px-2 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200">CGPA - 3.43</p>
              </div>
              <div className="group rounded-2xl border border-zinc-200 bg-white/50 p-6 transition transform duration-200 hover:scale-105 hover:bg-purple-100/50 hover:border-purple-500/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.1)] dark:border-white/10 dark:bg-black/20 dark:hover:bg-purple-900/10 dark:hover:shadow-[0_0_8px_rgba(168,85,247,0.06)]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Foundation in Information Technology</h3>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Aug 2020 - July 2021</span>
                </div>
                <div className="text-purple-700 dark:text-purple-300">Universiti Malaysia Sabah</div>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">I completed the Foundation in Information Technology to prepare for my degree. The program covered programming fundamentals, mathematics and introductory computing topics that gave me the practical basics to move into specialised IT and Computer Science studies.</p>
                <p className="mt-3 inline-flex items-center rounded-full bg-zinc-100/60 px-2 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200">CGPA - 3.89</p>
              </div>
            </div>
          </LiquidSection>

          {/* Skills */}
          <LiquidSection id="skills">
            <h2 className="text-2xl font-semibold tracking-tight mb-6 text-purple-900 dark:text-purple-100">Skills</h2>
            <Skills />
          </LiquidSection>

          {/* Projects */}
          <LiquidSection id="projects">
            <h2 className="text-2xl font-semibold tracking-tight mb-6 text-purple-900 dark:text-purple-100">Projects</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="group flex flex-col rounded-2xl border border-zinc-200 bg-white/50 p-6 transition transform duration-200 hover:scale-105 hover:bg-purple-100/50 hover:border-purple-500/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.1)] dark:border-white/10 dark:bg-black/20 dark:hover:bg-purple-900/10 dark:hover:shadow-[0_0_8px_rgba(168,85,247,0.06)]">
                <Image src="/shp.jpeg" alt="Student Housing Portal" width={1200} height={800} className="w-full h-auto object-contain rounded-md mb-4" />
                <h3 className="font-semibold text-zinc-900 text-lg group-hover:text-purple-700 transition-colors dark:text-white dark:group-hover:text-purple-200">Student Housing Portal</h3>
                <p className="mt-2 text-zinc-500 leading-relaxed dark:text-zinc-400">A web portal designed to facilitate student housing applications and management. It streamlines the process for students to find and apply for housing, while providing administrators with tools to manage applications efficiently. Built using React, Node.js, and MySQL.</p>
                <div className="mt-4"><TechStack items={["HTML", "PHP", "CSS", "JavaScript", "MySQL"]} /></div>
              </div>
              <div className="group flex flex-col rounded-2xl border border-zinc-200 bg-white/50 p-6 transition transform duration-200 hover:scale-105 hover:bg-purple-100/50 hover:border-purple-500/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.1)] dark:border-white/10 dark:bg-black/20 dark:hover:bg-purple-900/10 dark:hover:shadow-[0_0_8px_rgba(168,85,247,0.06)]">
                <Image src="/ems.jpeg" alt="Faculty Event Management" width={1200} height={800} className="w-full h-auto object-contain rounded-md mb-4" />
                <h3 className="font-semibold text-zinc-900 text-lg group-hover:text-purple-700 transition-colors dark:text-white dark:group-hover:text-purple-200">Faculty Event Management System</h3>
                <p className="mt-2 text-zinc-500 leading-relaxed dark:text-zinc-400">A comprehensive event management system tailored for university faculties. This platform allows faculty members to create, manage, and promote events seamlessly. Features include proposal submission, event registration, and attendance tracking.</p>
                <div className="mt-4"><TechStack items={["HTML", "PHP", "TailwindCSS", "JavaScript", "MySQL"]} /></div>
              </div>
            </div>
          </LiquidSection>

        </div>
      </main>
      <Footer />
    </>
  );
}
