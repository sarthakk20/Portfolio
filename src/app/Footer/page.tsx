'use client'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
return (
<footer 
id='footer' 
className="py-6 text-center text-gray-500 text-[12px] sm:text-sm bg-black"
>
<div className="max-w-7xl mx-auto flex flex-col items-center gap-4">

  <h3 className="font-semibold text-xl text-gray-300 hover:text-white transition-colors duration-300">Sarthak Sonawane</h3>

  <div className="flex space-x-6">

    <a
      href="https://github.com/sarthakk20"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl text-gray-400 hover:text-white transition"
      title="GitHub"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/sarthak-sonawane-b5b799283/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl text-gray-400 hover:text-white transition"
      title="LinkedIn"
    >
      <FaLinkedin />
    </a>

    <a
      href="mailto:sarthak20.sonawane@gmail.com?subject=Portfolio Inquiry&body=Hi Sarthak,%0A%0AI came across your portfolio and would like to discuss..."
      className="text-xl text-gray-400 hover:text-white transition"
      title="Email"
    >
      <FaEnvelope />
    </a>

  </div>

  <p className="text-gray-500 mt-2 hover:text-gray-300 transition-colors duration-300">
    ©{new Date().getFullYear()} Sarthak.Dev | All rights reserved.
  </p>
</div>
</footer>
);
}