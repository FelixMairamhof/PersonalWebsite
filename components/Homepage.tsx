"use client";
import { useState } from 'react'
import { Menu, X, ChevronRight, Code, BarChart2, BookOpen, Video, FileText, Mail, Twitter, Linkedin, Github, Globe, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isGerman, setIsGerman] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-teal-100 to-white dark:from-gray-800 dark:to-gray-900 min-h-screen">

        {/* Homepage Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <header className="mb-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center">
                <div className="text-center lg:text-left mb-4 lg:hidden">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Your Name</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300">Software Developer | Finance Expert | Business Enthusiast</p>
                </div>
                <div className="relative inline-block">
                  <img
                    src="/felix-mairamhof.jpg"
                    alt="Felix Mairamhof"
                    className="rounded-full w-64 h-64 object-cover border-4 border-teal-500 dark:border-teal-400"
                  />
                  <div className="absolute inset-0 rounded-full bg-teal-500 dark:bg-teal-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="lg:w-2/3 lg:pl-12">
                <div className="hidden lg:block mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Your Name</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300">Software Developer | Finance Expert | Business Enthusiast</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  As a multifaceted professional with expertise in software development, finance, and business, 
                  I bring a unique perspective to every project. My passion lies in creating innovative solutions 
                  that bridge the gap between technology and business needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700">
                    <BookOpen className="mr-2 h-4 w-4" /> Book Reviews
                  </Button>
                  <Button variant="outline" className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700">
                    <Video className="mr-2 h-4 w-4" /> Video Recommendations
                  </Button>
                  <Button variant="outline" className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700">
                    <FileText className="mr-2 h-4 w-4" /> Blog
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Code, title: "Project 1", description: "A software development project", webLink: "https://project1.com", githubLink: "https://github.com/yourusername/project1" },
                { icon: BarChart2, title: "Project 2", description: "A finance analysis tool", webLink: "https://project2.com", githubLink: "https://github.com/yourusername/project2" },
                { icon: FileText, title: "Project 3", description: "A business strategy framework", webLink: "https://project3.com", githubLink: "https://github.com/yourusername/project3" },
              ].map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-teal-500 dark:border-teal-400">
                  <project.icon className="w-12 h-12 text-teal-500 dark:text-teal-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a href={project.webLink} target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                      <Globe className="w-5 h-5" />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Resume Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Resume</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-teal-500 dark:border-teal-400">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Work Experience</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Software Developer at Tech Company (2018-Present)</li>
                  <li>Financial Analyst at Finance Firm (2015-2018)</li>
                  <li>Business Consultant at Consulting Agency (2013-2015)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Education</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Master's in Business Administration, University Name (2013)</li>
                  <li>Bachelor's in Computer Science, University Name (2011)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Get in Touch</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8 border-t-4 border-teal-500 dark:border-teal-400">
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-teal-500 dark:bg-teal-500 dark:text-white  dark:hover:bg-teal-600 hover:bg-teal-600 text-white font-semibold">
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </Button>
                <Button variant="outline" className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
                <Button variant="outline" className="bg-white  dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700">
                  <Twitter className="mr-2 h-4 w-4" /> Twitter
                </Button>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Stay Updated</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-b-4 border-teal-500 dark:border-teal-400">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Subscribe to my newsletter for the latest updates on my projects, book reviews, and video recommendations.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <Input type="email" placeholder="Enter your email" className="flex-grow dark:bg-gray-700 dark:text-gray-100" />
                <Button type="submit" className="bg-teal-500 dark:bg-teal-500 dark:text-white dark:hover:bg-teal-600 hover:bg-teal-600 text-white font-semibold">
                  Subscribe <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8  border-t-2 border-teal-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-teal-400">YourName</span>
              </div>
              <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 flex items-center">
                LinkedIn <Linkedin className="w-6 h-6 ml-2" />
              </a>
              <a href="#" className="hover:text-teal-400 flex items-center">
                GitHub <Github className="w-6 h-6 ml-2" />
              </a>
              <a href="#" className="hover:text-teal-400 flex items-center">
                Twitter <Twitter className="w-6 h-6 ml-2" />
              </a>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} YourName. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}