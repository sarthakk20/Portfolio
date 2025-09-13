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
        className="pt-10 pb-10 px-6 mx-5 bg-gray-100 dark:bg-gray-900 rounded-2xl">
        <Motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={0}
        className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
        About Me</Motion.h2>
        <Motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={1}
        className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 md:text-xl">
        I’m a frMntend and a full stack developer focusing on React, Next.js, and MERN stack.
        I'm also solving coding challenges (DSA in C++) and exploring markets. I
        love turning ideas into functional, user-friendly apps.
        </Motion.p>
        </section>

        {/* EDUCATION SECTION */}
        <section 
        id="education" 
        className="pt-10 pb-10 px-6 mx-5 mt-5 bg-gray-100 dark:bg-gray-900 rounded-2xl">
        <Motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        custom={2}
        className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
        Education</Motion.h2>
        <div 
        id="outer-edu-div"
        className="max-w-3xl mx-auto flex flex-col justify-center items-center text-gray-700 dark:text-gray-300 shadow-3xl">
          {/* Degree education */}
            <Motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={3}
            id="inner-edu-div"
            className="bg-white mb-4 sm:text-left dark:bg-gray-700 p-6 rounded-lg shadow-md w-full"
            >
              <h3 
            className="text-md sm:text-lg md:text-xl font-semibold">
            B.E Computer Engineering</h3>
            <p 
            className="text-sm sm:text-md md:text-lg text-gray-600 dark:text-gray-400">
            Mumbai University, 2022 - 2026</p>
            </Motion.div>

            {/* higher secondary education */}
            <Motion.div 
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={4}
            id="inner-edu-div"
            className="bg-white mb-4 dark:bg-gray-700 p-6 rounded-lg shadow-md w-full"
            >
            <h3 
            className="text-md sm:text-lg md:text-xl font-semibold">
            Higher Secondary Certificate</h3>
            <p 
            className="text-sm sm:text-md md:text-lg text-gray-600 dark:text-gray-400">
            K.V Pendharkar College Of Science Dombiwali (E), 2020 - 2022</p>
            </Motion.div>
            
            {/* secondary education */}
            <Motion.div 
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                custom={5}
                    
            id="inner-edu-div"
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-full"
            >
            <h3 
            className="text-md sm:text-lg md:text-xl font-semibold">
            Secondary School Certificate
            </h3>
            <p 
            className="text-sm sm:text-md md:text-lg text-gray-600 dark:text-gray-400">
            K.B.L English High School Badlapur (w), 2019 - 2020</p>
            </Motion.div>
        </div>
        </section>
        </div>
        </div>
);
}