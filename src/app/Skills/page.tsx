'use client'
import React from 'react'
import { easeOut, motion } from 'framer-motion'
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
    <div
    id='Skills'
    className='h-full w-screen flex justify-center bg-black text-3xl font-bold pt-10 scroll-smooth'
    >
      <div className='max-w-6xl w-full'>
        <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
          className='pt-10 text-2xl font-bold sm:text-2xl md:text-3xl text-center text-white mb-10'
        >Skills</motion.h1>
      <div
      id='btn-container'
      className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center px-2 sm:px-10 py-10 border-1 rounded-2xl mx-5'
      >
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-1' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >NEXT.JS</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-2' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >REACT.JS</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-3' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >MONGODB</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-4' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >NODE.JS</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-5' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >GITHUB</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-6' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >GIT</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-7' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400  p-2 mx-2'
        >JAVASRRIPT</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-8' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >TAILWIND</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-9' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >CSS</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-10' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >HTML</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-11' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >C++</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-12' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >C</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-13' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >VERCEL</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-14' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >NETLIFY</motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        id='btn-15' 
        className='rounded-lg text-center border-1 border-blue-400 text-white text-lg sm:text-xl md:text-2xl duration-400 p-2 mx-2'
        >BOOTSTRAP</motion.p>

      </div>
        
      </div>

    </div>
  )
}

export default skills