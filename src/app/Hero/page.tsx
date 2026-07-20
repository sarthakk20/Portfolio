'use client'
import React,{useState,useEffect} from 'react'
import {easeIn, easeInOut, easeOut, motion} from 'framer-motion'
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";
function Hero() {
    const [start, setStart] = useState(false);
    
    useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 400); // Wait 2 seconds after refresh
    
    return () => clearTimeout(timer);
    }, []);
    return (     
        
        <motion.div 
            id='hero-section'
            
            initial={{
                opacity: -4,
                scale: 0.98,
                filter: "blur(4.5px)",
            }}
            animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="px-5 text-center h-screen w-full md:px-5 md:h-90vh flex flex-col justify-center items-center bg-black "
            >
            
            <motion.img 
            id='myImg'
            src="myimg1.jpg" 
            alt="sarthak Img" 
            className="w-50 h-50 my-15 md:w-85 md:h-85 rounded-full 
            mb-12 border-4 object-cover cursor-pointer"
            whileHover={{ 
                scale: 1.08,
                boxShadow: ` 
                0 0 20px rgba(59,130,246,0.5),
                0 0 40px rgba(59,130,246,0.4),
                0 0 70px rgba(59,130,246,0.25) `, 
            }} 
            transition={{ 
                type: "spring",
                stiffness: 150,
                damping: 18,
            }}
            />
            <motion.h1
            className="text-4xl font-bold md:text-5xl md:font-extrabold mb-4"
            >
            Hi, I’m <br />
            {start && (<span id='myName'>
            <Typewriter
                words={[
                "Sarthak Sonawane.",
                "A Full Stack Developer.",
                "A Frontend Developer.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
            />
            </span>)}
        </motion.h1>

        <motion.p       
        className="text-md mx-6 md:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Turning ideas into fast, interactive, and scalable web experiences with React.js, Next.js, and the MERN stack—one component at a time.
        </motion.p>
        <motion.div
            whileHover={{ 
                scale: 1.04,
            }} 
            transition={{ 
            duration:0.1,
            ease:easeInOut,
            }}
            id='resume' 
            className="mt-6 flex justify-center hover:cursor-pointer text-sm sm:text-md md:text-lg">
            <a href="sarthak_cv (3).pdf" download>
            <button 
            className='hover:cursor-pointer flex items-center gap-2'
            type="button">
              <FaDownload />
              <span>Download Resume</span>
            </button>
            </a>
        </motion.div>

        </motion.div>
    )
    }

export default Hero