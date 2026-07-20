'use client'
import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
const MotionLink = motion("a");
// import Link from 'next/link'

function Nav() {
   const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20); // Blur starts after 20px
  });
  return ( 
        <motion.nav 
         initial={{
          y: -40,
          opacity: 0,
          scale: 0.98,
          filter: "blur(4.5px)",
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
        duration: 0.6,
        ease: "easeOut",
        }}
        // className="flex w-screen px-5 py-5 justify-evenly text-white bg-black/0 backdrop-blur-md z-50 fixed top-0 left-0"
        className={`
        flex w-screen px-4 py-5 justify-evenly text-white z-50 fixed top-0 left-0 
        transition-all duration-300 ease-in-out
        ${scrolled
            ? "bg-black/0 backdrop-blur-md "
            : "bg-transparent backdrop-blur-0 "
        }
      `}
        >

          {/* My Name Logo */}
          <motion.h1
            className="flex items-center font-semibold cursor-pointer text-xl  w-full md:w-auto sm:text-xl md:text-xl lg:text-2xl tracking-tight"
            initial="initial"
            whileHover="hover"
          >
          <span className="text-blue-500">&lt;</span>
            <span className="ml-1">Sarthak</span>

            <motion.span
              variants={{
                initial: {
                  width: 0,
                  opacity: 0,
                  marginLeft: 0,
                },
                hover: {
                  width: "auto",
                  opacity: 1,
                  marginLeft: 6,
                  color: "#089df9ff",
                },}}
                  transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden whitespace-nowrap text-blue-500"
            >Sonawane
            </motion.span>
            <span className="text-blue-500 ml-1">/&gt;</span>
          </motion.h1>

          {/* Navigation links */}
          <div className='pl-8'>

            <motion.a
            whileHover={{
              scale: 1.01,
              color: "#5fc8dbff",
              filter: "drop-shadow(0px 0px 2px rgba(59,130,246,.7))",
              textShadow: `
                0 0 1px rgba(59,130,246,.8),
                0 0 9px rgba(59,130,246,.6)
              `,
              }} 
            transition={{ 
                type: "spring",
                stiffness: 200,
                duration: 0.3,
              }}
            href="#hero-section" 
            className="mr-1 hidden sm:inline hover:text-md 
             text-md sm:mr-4 sm:text-md md:text-lg font-sans font-400 tracking-wide">
            Home</motion.a>

            <motion.a
            whileHover={{
              scale: 1.01,
              color: "#5fc8dbff",
              filter: "drop-shadow(0px 0px 2px rgba(59,130,246,.7))",
              textShadow: `
                0 0 1px rgba(59,130,246,.8),
                0 0 9px rgba(59,130,246,.6)
              `,
              }} 
            transition={{ 
                type: "spring",
                stiffness: 200,
                duration: 0.3,
              }}
            href="#About" 
            className="mr-1 hidden sm:inline hover:text-md
             text-md sm:mr-4 sm:text-md md:text-lg font-sans font-400 tracking-wide">
            About</motion.a>

            <motion.a
            whileHover={{
              scale: 1.01,
              color: "#5fc8dbff",
              filter: "drop-shadow(0px 0px 2px rgba(59,130,246,.7))",
              textShadow: `
                0 0 1px rgba(59,130,246,.8),
                0 0 9px rgba(59,130,246,.6)
              `,
              }} 
            transition={{ 
                type: "spring",
                stiffness: 200,
                duration: 0.3,
              }}
            href="#Skills" 
            className="mr-1 hidden sm:inline hover:text-md
             text-md sm:mr-4 sm:text-md md:text-lg font-sans font-400 tracking-wide">
            Skills</motion.a>

            <motion.a
            whileHover={{
              scale: 1.01,
              color: "#5fc8dbff",
              filter: "drop-shadow(0px 0px 2px rgba(59,130,246,.7))",
              textShadow: `
                0 0 1px rgba(59,130,246,.8),
                0 0 9px rgba(59,130,246,.6)
              `,
              }} 
            transition={{ 
                type: "spring",
                stiffness: 200,
                duration: 0.3,
              }}
            href="#Projects" 
            className="mr-1 hidden sm:inline hover:text-md
             text-md sm:mr-4 sm:text-md md:text-lg font-sans font-400 tracking-wide">
            Projects</motion.a>

            <motion.a
            whileHover={{
              scale: 1.01,
              color: "#5fc8dbff",
              filter: "drop-shadow(0px 0px 2px rgba(59,130,246,.7))",
              textShadow: `
                0 0 1px rgba(59,130,246,.8),
                0 0 9px rgba(59,130,246,.6)
              `,
              }} 
            transition={{ 
                type: "spring",
                stiffness: 200,
                duration: 0.3,
              }}
            href="#contact" 
            className="mr-1 hidden sm:inline hover:text-md 
            text-md sm:text-md md:text-lg scroll-smooth font-sans font-400 tracking-wide">
            Contact</motion.a>

          </div>
        </motion.nav>
  )
}

export default Nav;