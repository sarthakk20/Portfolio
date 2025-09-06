import React from 'react'
import Link from 'next/link'

function Nav() {
  return ( 
        <nav 
        className="flex w-screen px-5 py-5 justify-between text-white bg-black fixed top-0 left-0">
          <h1 className="font-bold items-center md:text-xl sm:text-md">Sarthak.Dev</h1>
          <div className='pl-8'>
            <Link href="#hero-section" className="mr-1 hidden sm:inline text-gray-400 hover:text-md hover:text-gray-200 text-sm sm:mr-4 sm:text-md md:text-lg">Home</Link>
            <Link href="#About" className="mr-1 hidden sm:inline text-gray-400 hover:text-md hover:text-gray-200 text-sm sm:mr-4 sm:text-md md:text-lg">About</Link>
            <Link href="#Skills" className="mr-1 hidden sm:inline text-gray-400 hover:text-md hover:text-gray-200 text-sm sm:mr-4 sm:text-md md:text-lg">Skills</Link>
            <Link href="#Projects" className="mr-1 hidden sm:inline text-gray-400 hover:text-md hover:text-gray-200 text-sm sm:mr-4 sm:text-md md:text-lg">Projects</Link>
            <Link href="#contact" className="mr-1 hidden sm:inline text-gray-400 hover:text-md hover:text-gray-200 text-sm sm:text-md md:text-lg scroll-smooth">Contact</Link>
          </div>
        </nav>
  )
}

export default Nav;