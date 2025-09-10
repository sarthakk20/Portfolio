'use client'

export default function Footer() {
return (
<footer id='footer' className="py-6 text-center text-gray-500 text-[12px] sm:text-sm bg-black">
©{new Date().getFullYear()} Sarthak.Dev built with Next.js & Tailwind & Framer-Motion.
</footer>
);
}