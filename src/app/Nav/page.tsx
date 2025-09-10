'use client'
import React from 'react'
import { motion } from 'framer-motion'
const MotionLink = motion("a");
// import Link from 'next/link'

function Nav() {
  return ( 
        <motion.nav 
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex w-screen px-5 py-5 justify-between text-white bg-black/50 backdrop-blur-md z-50 fixed top-0 left-0">
          <h1 className="font-bold items-center md:text-xl sm:text-md">Sarthak.Dev</h1>
          <div className='pl-8'>
            <motion.a
            whileHover={{ scale: 1.1, color: "#2563eb" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#hero-section" 
            className="mr-1 hidden sm:inline text-gray-400 hover:text-md hover:text-gray-200 text-sm sm:mr-4 sm:text-md md:text-lg">
            Home</motion.a>
            <motion.a
            whileHover={{ scale: 1.1, color: "#2563eb" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#About" 
            className="mr-1 hidden sm:inline text-gray-400 hover:text-md hover:text-gray-200 text-sm sm:mr-4 sm:text-md md:text-lg">
            About</motion.a>
            <motion.a
            whileHover={{ scale: 1.1, color: "#2563eb" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#Skills" 
            className="mr-1 hidden sm:inline text-gray-400 hover:text-md hover:text-gray-200 text-sm sm:mr-4 sm:text-md md:text-lg">
            Skills</motion.a>
            <motion.a
            whileHover={{ scale: 1.1, color: "#2563eb" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#Projects" 
            className="mr-1 hidden sm:inline text-gray-400 hover:text-md hover:text-gray-200 text-sm sm:mr-4 sm:text-md md:text-lg">
            Projects</motion.a>
            <motion.a
            whileHover={{ scale: 1.1, color: "#2563eb" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#contact" 
            className="mr-1 hidden sm:inline text-gray-400 hover:text-md hover:text-gray-200 text-sm sm:text-md md:text-lg scroll-smooth">
            Contact</motion.a>
          </div>
        </motion.nav>
  )
}

export default Nav;