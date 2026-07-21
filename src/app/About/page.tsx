'use client'
import {easeInOut, motion as Motion} from 'framer-motion'
    const fadeUp = {
          hidden: { opacity: 0, y: 30 },
          visible: (custom = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.6, ease: easeInOut },
          }),
    };
export default function about() {
return (
    <div 
    id='About'
    className="bg-black h-full w-full flex justify-center items-center scroll-smooth">
        <div className="w-full mt-20  max-w-6xl">
        <section 
        
        id="about" 
        className="pt-10 pb-10 px-6 mx-5 rounded-2xl">
        <Motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={1}
        className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
        About Me</Motion.h2>
        <Motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={1}
        className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 md:text-xl">
        I'm a passionate Frontend & Full Stack Developer specializing in React.js, Next.js, and the MERN stack, dedicated to building fast, responsive, and user-centric web applications that solve real-world problems.
        </Motion.p>
        </section>

        {/* EDUCATION SECTION */}
        <section 
        id="education" 
        className="pt-10 pb-10 px-6 mx-5 mt-5 rounded-2xl">
        <Motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={1}
        className="text-2xl sm:text-2xl md:text-3xl font-bold text-center">
        Education</Motion.h2>
        <Motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={1}
        className="text-center text-gray-400 mt-4 max-w-2xl mx-auto mb-12">
        My educational journey that laid the foundation for my career in technology.      
        </Motion.p>
        <Motion.div 
         id="outer-edu-div"
         className="relative max-w-4xl mx-auto"
        // className="max-w-3xl mx-auto flex flex-col justify-center items-center text-gray-700 dark:text-gray-300 shadow-3xl"
        >
        {/* Timeline of education section */}
            <Motion.div
            initial={{ height: 0 }}
            variants={fadeUp}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="absolute left-5 top-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600"
            />
              <Motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={1}
              className=" relative w-full overflow-hidden mb-4 rounded-2xl border border-blue-500/20 
                bg-gradient-to-br 
                from-[#0f172a] via-[#172554] to-[#0f172a]/60
                p-6
                shadow-lg
                transition-all
                duration-300
                hover:border-blue-400/40
                hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]
                "
            //  className="relative w-full overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0f172a] via-[#172554] to-[#0f172a] p-6 shadow-lg transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
             > {/* Degree */} 
             <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"> 
             <div> 
                <h3 className="text-xl md:text-2xl  font-bold text-gray-900 dark:text-white"> Bachelor of Engineering </h3> 
                <p className="text-blue-400 font-medium"> Computer Engineering </p> 
                </div> 
                <span className=" w-fit rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1 text-sm font-semibold text-blue-700 dark:text-blue-400 " > 2022 – 2026 </span> 
                </div> {/* College */} 
                <p className="mt-3 text-gray-300 "> Bharat College of Engineering • Mumbai University </p> {/* Description */} 
                <p className="mt-5 leading-8 text-gray-700 dark:text-gray-300"> My B.E. in Computer Engineering provided me with a strong foundation in <span className="font-semibold"> {" "} Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering. </span> {" "}Beyond academics, I applied these concepts by building real-world applications using <span className="font-semibold text-blue-500"> {" "} React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS </span> , strengthening my problem-solving skills and gaining hands-on experience in developing modern, scalable full-stack web applications. </p> {/* Footer */} 
                <div className="mt-6 flex flex-wrap items-center gap-3"> 
                <span className=" rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 " > 🎓 CGPA: 7.56 </span> 
                </div> 
                </Motion.div>

            
        {/* ### Higher Secondary Certificate (HSC) */}

        <Motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={1}
          // initial="hidden"
          // whileInView="visible"
          // variants={fadeUp}
          // custom={4}
          // viewport={{ once: true }}
          className="relative w-full overflow-hidden rounded-2xl border border-blue-500/20 
          bg-gradient-to-br from-[#0f172a] via-[#172554] to-[#0f172a]/60 p-6 shadow-lg mb-4 transition-all 
          duration-300 hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
        >
          <div
            className="absolute -top-20 -right-20 h-56 w-56 rounded-full
              bg-blue-500/20 blur-3xl pointer-events-none"
          />
          <div className="relative flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Higher Secondary Certificate (HSC)
              </h3>

              <p className="font-medium text-blue-400">
                Science Stream
              </p>
            </div>

            <span className="w-fit rounded-full bg-blue-900/30 px-4 py-1 text-sm font-semibold text-blue-300">
              2020 – 2022
            </span>
          </div>

          <p className="">
            K.V. Pendharkar College, Dombivali
          </p>

          <p className="relative mt-5 leading-8 text-gray-300">
            Built a strong academic foundation in Mathematics, Physics, and Computer
            Science, which enhanced my logical thinking, analytical abilities, and
            problem-solving skills. These fundamentals prepared me for engineering and
            my journey into software development.
          </p>

          <div className="relative mt-6">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              📚 Percentage: 60.33%
            </span>
          </div>
        </Motion.div>

        {/* ### Secondary School Certificate (SSC) */}

        <Motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={1}
          // initial="hidden"
          // whileInView="visible"
          // variants={fadeUp}
          // custom={5}
          // viewport={{ once: true }}
          className="relative w-full overflow-hidden rounded-2xl border border-blue-500/20 mb-4
            bg-gradient-to-br from-[#0f172a] via-[#172554] to-[#0f172a]/60 p-6 shadow-lg
            transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl pointer-events-none">
          </div>
          <div className="relative flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Secondary School Certificate (SSC)
              </h3>
              <p className="font-medium text-blue-400">
                Maharashtra State Board
              </p>
            </div>

            <span className="w-fit rounded-full bg-blue-900/30 px-4 py-1 text-sm font-semibold text-blue-300">
              2019 – 2020
            </span>
          </div>

          <p className="relative mt-3 text-gray-300">
            K.B.L. English High School, Badlapur
          </p>

          <p className="relative mt-5 leading-8 text-gray-300">
            I completed my schooling at K.B.L. English High School, Badlapur, where I acquired the knowledge, discipline, and confidence that prepared me for my academic journey ahead.
          </p>

          <div className="relative mt-6">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              📚 Percentage: 83.00%
            </span>
          </div>
        </Motion.div>
        

        </Motion.div>
        </section>
        </div>
        </div>
);
}