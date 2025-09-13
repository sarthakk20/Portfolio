"use client";
import {easeOut, motion} from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease:easeOut}, // use a valid string for ease
  },
};
const projects = [
  {
    title: "Auth Using Next.js",
    description: "An authentication website with login, signup, forgot password and reset password using reset link functionalites.",
    tech: ["MongoDB", "React", "Node.js","Next.js", "MailTrap"],
    image: "authImg.jpg",
    demo: "https://github.com/sarthakk20/Next.js.git",
    github: "https://github.com/sarthakk20/Next.js.git",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js, Tailwind and Framer Motion animations.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS","HTML","CSS"],
    image: "portfolio.png",
    demo: "https://sarthakdev-orcin.vercel.app/",
    github: "https://github.com/sarthakk20/Portfolio.git",
  },
  {
    title: "Amazon Landing Page Clone",
    description: "A responsive amazon clone using frontend technologies.",
    tech: ["HTML", "CSS", "JS"],
    image: "amazon1.png",
    demo: "https://regal-naiad-4319e2.netlify.app/",
    github: "https://github.com/sarthakk20/AmazonLandingPage.git",
  },
  {
    title: "Currency Converter",
    description: "A web app to convert between 150+ currencies with live exchange rates.",
    tech: ["HTML", "CSS", "JS"],
    image: "currencyImg.jpg",
    demo: "https://splendid-chaja-defafd.netlify.app/",
    github: "https://github.com/sarthakk20/Currency-Converter.git",
  },
  
];

export default function Projects() {
  return (

    <section id='Projects' className="min-h-screen md:px-10 flex flex-col justify-center items-center bg-black pt-15 px-10">
    <div className="max-w-6xl w-full scroll-smooth">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        animate="active"
        variants={fadeUp}
      className="mt-10 mb-5 text-2xl md:text-3xl font-bold text-white text-center">
      My Projects
      </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full py-5 ">
    {projects.map((project, index) => (
      <div
        key={index}
        id='project-cards'
        className="rounded-lg shadow-lg bg-gray-900 text-white overflow-hidden hover:scale-103 transition-transform duration-300"
      >
        <img
          className="w-full h-48 object-cover"
          src={project.image}
          alt={project.title}
        />

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-sm bg-blue-500"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-center rounded-lg text-black bg-white hover:bg-gray-300 transition"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-center rounded-lg text-white bg-black hover:bg-gray-800 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    ))}
      </motion.div>
    </div>
    </section>  

  );
}

