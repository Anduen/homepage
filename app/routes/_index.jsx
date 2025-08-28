import { motion } from "framer-motion";
export function meta() {
  return [
    { title: "Homepage" },
    { name: "description", content: "Welcome to My Homepage!" },
  ];
}

export default function HomePage() {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-end gap-8 p-6 sticky top-0 bg-slate-900/80 backdrop-blur-md z-50"
      >
        <a href="#about" className="hover:text-sky-400 transition">
          About
        </a>
        <a href="#projects" className="hover:text-sky-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-sky-400 transition">
          Contact
        </a>
      </motion.nav>

      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-sky-400"
        >
          Hi, I’m Anduen
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl mt-4 font-light"
        >
          Your JavaScript Guy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-lg text-slate-300"
        >
          My body is but a machine to turn coffee into code.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-sky-400 text-slate-900 font-semibold hover:bg-sky-300 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 md:px-16 bg-slate-800">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-sky-400 mb-8"
        >
          Who I Am
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3 text-lg"
        >
          <li>• Computer Science Graduate</li>
          <li>• JS Full-stack developer (React, Remix, Node)</li>
          <li>• Freelance-ready, open for collaboration</li>
        </motion.ul>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 italic text-slate-400"
        >
          “22 years of age with 30 years of experience... we dont question that”
        </motion.p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-sky-400 mb-12"
        >
          Featured Work
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {["Project 1", "Project 2", "Project 3"].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-800 shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-400">
                Short description of the project.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="#" className="text-sky-400 hover:underline">
                  Code
                </a>
                <a href="#" className="text-amber-400 hover:underline">
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 md:px-16 bg-slate-800 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-sky-400 mb-6"
        >
          Let’s Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-slate-300 mb-8"
        >
          Have an idea? Need a JS dev? Let’s chat.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sky-400 font-semibold"
        >
          andueni15@email.com
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 flex justify-center gap-6"
        >
          <a
            target="_blank"
            href="https://github.com/Anduen/"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/anduen-zhuri/"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-500 text-sm border-t border-slate-700">
        © 2025 Anduen — Built with React + Tailwind
      </footer>
    </div>
  );
}
