'use client'
import React from 'react'
import {easeIn, easeOut, motion} from 'framer-motion'
function Hero() {
    
    return (     
        <div 
            id='hero-section'
            className="p-5 mx-5 text-center h-screen w-full md:px-5 md:h-90vh flex flex-col justify-center items-center bg-black "
            >
            <motion.img 
            initial={{ opacity: 0, y:-40 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}  
            id='myImg'
            src="myimg1.jpg" 
            alt="sarthak Img" 
            className="w-50 h-50 my-15 md:w-60 md:h-60 rounded-full mb-12 border-4 object-cover cursor-pointer hover:scale-110  transition-transform duration-300"
            />
            <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold md:text-5xl md:font-extrabold mb-4"
            >
            Hi, I’m <span id='myName'>Sarthak Sonawane.</span>
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-md mx-6 md:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            A passionate Frontend & Full Stack Developer who loves building web apps
            that solve real-world problems.
        </motion.p>
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            id='resume' className="mt-6 flex justify-center hover:cursor-pointer text-sm sm:text-md md:text-lg">
            <a href="SarthakSonawane-NewResume.pdf" download>
            <button 
            className='hover:cursor-pointer'
            type="button">Download My Resume</button>
            </a>
        </motion.div>
        </div>
    )
    }

export default Hero