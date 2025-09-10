'use client'
import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function contact() {
  return (
    <section className='flex justify-center bg-black'>
    <div id="contact" className="py-10 px-6 md:pb-15 bg-blue-700 rounded-2xl w-full max-w-6xl mx-10 lg:mx-5">
    <motion.h2 
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    className="text-2xl mb-3 sm:text-2xl md:text-3xl font-bold text-center md:mt-10  md:mb-6">Contact Me</motion.h2>
    <motion.p 
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    className="text-center text-sm md:text-lg text-gray-700 dark:text-gray-300 mb-6">
    Interested in collaborating? Let’s connect!
    </motion.p>
    <motion.div 
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    className="flex justify-center items-center space-x-6 text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-2 md:mb-3">
    <Link id='links' href="mailto:sarthak20.sonawane@gmail.com"><MdEmail /></Link>
    <Link id='links' href="https://github.com/sarthakk20" target="_blank"><FaGithub /></Link>
    <Link id='links' href="https://www.linkedin.com/in/sarthak-sonawane-b5b799283/" target="_blank"><FaLinkedin /></Link>
    </motion.div>
    </div>
    </section>
  )
}

export default contact