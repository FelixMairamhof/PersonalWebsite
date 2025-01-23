// FILE: Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { BookIcon, CodeXmlIcon, FilesIcon, PlusCircle, VideoIcon } from "lucide-react";
import Link from 'next/link';

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-gray-800 border-b-2 shadow-2xl border-teal-500 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src="/TealLogoVector.png" alt="Logo" className="h-10 w-10 scale-150 mr-4" />
              <span className="text-2xl font-bold text-teal-400">Felix Mairamhof</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#header" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "header" ? "bg-gray-700" : ""}`}>Home</Link>
              <Link href="#contact" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "contact" ? "bg-gray-700" : ""}`}>Contact</Link>
              <Link href="#projects" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "projects" ? "bg-gray-700" : ""}`}>Projects</Link>
              <Link href="#resume" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "resume" ? "bg-gray-700" : ""}`}>Resume</Link>
              <Link href="#tech-stack" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "tech-stack" ? "bg-gray-700" : ""}`}>Tech Stack</Link>
              <Link href="#hackathons" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "hackathons" ? "bg-gray-700" : ""}`}>Hackathons</Link>
              <Link href="#certifications" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "certifications" ? "bg-gray-700" : ""}`}>Certifications</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#header" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "header" ? "bg-gray-700" : ""}`}>Home</Link>
          <Link href="#contact" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "contact" ? "bg-gray-700" : ""}`}>Contact</Link>
          <Link href="#projects" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "projects" ? "bg-gray-700" : ""}`}>Projects</Link>
          <Link href="#resume" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "resume" ? "bg-gray-700" : ""}`}>Resume</Link>
          <Link href="#tech-stack" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "tech-stack" ? "bg-gray-700" : ""}`}>Tech Stack</Link>
          <Link href="#hackathons" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "hackathons" ? "bg-gray-700" : ""}`}>Hackathons</Link>
          <Link href="#certifications" className={`text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold ${activeSection === "certifications" ? "bg-gray-700" : ""}`}>Certifications</Link>
        </div>
      </div>
    </nav>
  );
}