import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Nav/page";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),

  title: {
    default: "Sarthak Sonawane | Full Stack Developer",
    template: "%s | Sarthak Sonawane",
  },

  description:
    "Portfolio of Sarthak Sonawane, a Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and modern web technologies. Explore my projects, skills, and experience.",

  keywords: [
    "Sarthak Sonawane",
    "Full Stack Developer",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Sarthak Sonawane",
    },
  ],

  creator: "Sarthak Sonawane",

  icons: {
    icon: "/myimg1.jpg",
    apple: "/myimg1.jpg",
  },

  openGraph: {
    title: "Sarthak Sonawane | Full Stack Developer",
    description:
      "Explore my portfolio showcasing modern web applications, full-stack projects, and responsive user experiences built with the MERN Stack and Next.js.",
    siteName: "Sarthak Sonawane Portfolio",
    images: [
      {
        url: "/myimg1.jpg",
        width: 1200,
        height: 630,
        alt: "Sarthak Sonawane Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sarthak Sonawane | Full Stack Developer",
    description:
      "Explore my portfolio showcasing modern full-stack web applications and projects.",
    images: ["/myimg1.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
         <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
