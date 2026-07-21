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
    title: "Authentication system",
    description: "Developed a secure full-stack authentication application with user registration, login, profile management, and a complete password recovery workflow. Integrated JWT for secure authentication and route protection, while using Mailtrap to deliver email verification and password reset links, ensuring a seamless and secure user experience.",
    tech: ["TypeScript", "TailwindCSS", "Express.js", "Next.js", 'MongoDB', "MailTrap", "JWT"],
    image: "authImg.jpg",
    demo: "https://github.com/sarthakk20/Next.js.git",
    github: "https://github.com/sarthakk20/Next.js.git",
  },
  {
    title: "Personal Portfolio Website",
    description: "Developed a modern developer portfolio using Next.js, Tailwind CSS, and Framer Motion, featuring responsive design, smooth animations, and a clean user experience. Implemented a contact form with Resend to enable direct email communication and deployed the application on Vercel for high performance and reliability.",
    tech: ["TypeScript", "Next.js", "Framer Motion", "TailwindCSS", "Vercel"],
    image: "image.png",
    demo: "https://sarthakdev-orcin.vercel.app/",
    github: "https://github.com/sarthakk20/Portfolio.git",
  },
  {
    title: "Amazon Dashboard Clone",
    description: "Developed a responsive Amazon landing page clone using HTML, CSS, and JavaScript, accurately recreating the original interface with responsive layouts and CSS media queries for seamless viewing across mobile, tablet, and desktop devices. Deployed the project on Netlify for fast and reliable hosting.",
    tech: ["HTML", "CSS", "JS", "Netlify"],
    image: "amazon1.png",
    demo: "https://regal-naiad-4319e2.netlify.app/",
    github: "https://github.com/sarthakk20/AmazonLandingPage.git",
  },
  // {
  //   title: "Currency Converter",
  //   description: "A web app to convert between 150+ currencies with live exchange rates.",
  //   tech: ["HTML", "CSS", "JS"],
  //   image: "currencyImg.jpg",
  //   demo: "https://splendid-chaja-defafd.netlify.app/",
  //   github: "https://github.com/sarthakk20/Currency-Converter.git",
  // },
  
];

export default function Projects() {
  return (

  <section
  id="Projects"
  className="bg-black py-24 px-6"
>
  <div className="max-w-7xl mx-auto">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Featured Projects
      </h2>

      <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
        A collection of projects that showcase my skills in full-stack
        development, UI/UX, and modern web technologies.
      </p>
    </motion.div>

    <div 
    id='project-cards'
    className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {projects.map((project, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          transition={{ duration: .35 }}
          className="w-[90%] mx-auto sm:w-[80%] md:w-fit sm:mx-auto group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-xl 
          hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,.18)] duration-500"
        >

          {/* Image */}

          <div className="overflow-hidden relative">

            <img
              src={project.image}
              alt={project.title}
              className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute top-4 left-4">

              <span className="rounded-full bg-blue-600/90 px-4 py-1 text-xs font-medium">
                Featured
              </span>

            </div>

          </div>

          {/* Content */}

          <div className="p-7">

            <h3 className="text-2xl font-semibold text-white mb-3">

              {project.title}

            </h3>

            <p className="text-zinc-400 leading-relaxed">

              {project.description}

            </p>

            {/* Tech */}

            <div className="flex flex-wrap gap-2 mt-6">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* GitHub */}

            <div className="mt-8">

              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-6 py-3 text-sm font-medium transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                View Source Code →
              </a>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>
  );
}

