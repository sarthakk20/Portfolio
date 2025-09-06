import React from 'react'
function Hero() {
    
    return (     
        <div 
            id='hero-section'
            className="p-5 mx-5 text-center h-screen w-full md:px-5 md:h-90vh flex flex-col justify-center items-center bg-black "
            >
            <img 
            id='myImg'
            src="myimg1.jpg" 
            alt="sarthak Img" 
            className="w-40 h-40 my-15 md:w-60 md:h-60 rounded-full mb-12 border-4 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
            <h1
            // initial={{ opacity: 0, y: -50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
            className="text-4xl font-bold md:text-5xl md:font-extrabold mb-4"
            >
            Hi, I’m <span id='myName' /*className="text-blue-600"*/>Sarthak Sonawane.</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            A passionate MERN & Full Stack Developer who loves building web apps
            that solve real-world problems.
        </p>
        </div>
    )
    }

export default Hero