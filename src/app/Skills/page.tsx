'use client'
import React from 'react'
import { easeOut, motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiCplusplus,
  SiMysql,
  SiRedux,
  SiMongoose
} from "react-icons/si";
import { VscCode, VscVscode } from "react-icons/vsc";
import { BsStars } from "react-icons/bs";

const skillCategories = [
  {
    title: "Frontend",
    emoji: "💻",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    ],
  },

  {
    title: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#E2E2E2" },
    ],
  },

  {
    title: "Database",
    emoji: "🗄️",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Mongoose", icon: <SiMongoose />, color: "#880000" },
      { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
    ],
  },  
  {
    title: "Programming & Tools",
    emoji: "🛠️",
    skills: [
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      { name: "Antigravity", icon: <BsStars />, color: "#C084FC" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C8C8" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease:easeOut },
  }),
};

function skills() {
  return (
     <section
      id="Skills"
      className="bg-black py-20 px-5 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Skills
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          className="text-zinc-400 mt-3 text-center mb-14"
        >
          Technologies I use to build modern web applications.
        </motion.p>

        <div 
        className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 w-[85%] m-auto">

          {skillCategories.map((category) => (

            <motion.div
              key={category.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              // whileHover={{
              //   y: -8,
              //   scale: 1.02,
              // }}
              // transition={{ duration: .3 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/10 backdrop-blur-md p-7 
              hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,.2)]"
            >

              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-3xl">{category.emoji}</span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <motion.div
                    key={skill.name}
                    initial={{ backgroundColor: "rgba(0, 0, 0, 0)", borderColor: "#3f3f46" }}
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                      borderColor: skill.color,
                      backgroundColor: `${skill.color}1a`, // 10% opacity brand color background
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-md cursor-pointer"
                  >

                    <span className="text-xl" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  )
}

export default skills