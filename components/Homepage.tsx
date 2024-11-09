"use server";

import { Menu, X, ChevronRight, Code, BarChart2, BookOpen, Video, FileText, Mail, Twitter, Linkedin, Github, Globe, Moon, Sun, Code2, Code2Icon, WifiZeroIcon, WifiHigh, BluetoothConnectedIcon, CloudRainWind } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import Link from 'next/link';

export default async function Homepage() {
 

  return (
    <div className="min-h-screen dark">
      <div className="bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 min-h-screen">

        {/* Homepage Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <header className="mb-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center">
                <div className="text-center lg:text-left mb-4 lg:hidden">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Felix Mairamhof</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300">Technology | Finance | Business </p>
                </div>
                <div className="relative inline-block hover:scale-95  transition-transform ease-in-out duration-300">
                  <img
                  src="/felix-mairamhof.jpg"
                  alt="Felix Mairamhof"
                  className="rounded-full w-64 h-64 object-cover border-4 border-teal-500 dark:border-teal-400"
                  />
                  <div className="absolute inset-0 rounded-full bg-teal-500 dark:bg-teal-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/felix-mairamhof-9b7ba4325/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/FelixMairamhof" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="lg:w-2/3 lg:pl-12">
                <div className="hidden lg:block mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Felix Mairamhof</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300">Technology | Finance | Business</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  As a multifaceted professional with expertise in software development, finance, and business, 
                  I bring a unique perspective to every project. My passion lies in creating innovative solutions 
                  that bridge the gap between technology and business needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="books" className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700 flex items-center p-2 px-4  rounded-xl">
                    <BookOpen className="mr-2 h-4 w-4" /> Books
                  </Link>
                  <Link href="blog" className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700 flex items-center p-2 px-4  rounded-xl">
                    <FileText className="mr-2 h-4 w-4" /> Blog
                  </Link>
                  <Link href="videos" className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700 flex items-center p-2 px-4  rounded-xl">
                    <Video className="mr-2 h-4 w-4" /> Videos
                  </Link>
                  <Link href="courses" className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700 flex items-center p-2 px-4  rounded-xl">
                    <Code2 className="mr-2 h-4 w-4" /> Courses
                  </Link>
                </div>
              </div>
            </div>
          </header>
          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Get in Touch</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8 border-t-4 border-teal-500 dark:border-teal-400">
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:felix.mairamhof@edu.htl-klu.at" className="bg-teal-500 dark:bg-teal-500 dark:text-white  dark:hover:bg-teal-600 hover:bg-teal-600 text-white font-semibold flex items-center p-2 px-4  rounded-md">
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </a>
                <a href="https://github.com/FelixMairamhof" target="_blank" rel="noopener noreferrer" className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700 flex items-center p-2 px-4  rounded-md">
                    <Github className="mr-2 h-4 w-4" /> Github
                </a>
                <a href="https://www.linkedin.com/in/felix-mairamhof-9b7ba4325/" target="_blank" rel="noopener noreferrer" className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700 flex items-center p-2 px-4  rounded-md">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </section>
          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Featured Projects</h2>
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Here are some Projects. If you want to see more check my Github</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-teal-500 dark:border-teal-400">
                  <BluetoothConnectedIcon className="w-12 h-12 text-teal-500 dark:text-teal-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Bluetooth / WiFi Onboarding App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A software / system development project where you can connect to an ESP32 via an PWA (ProgressiveWebApp) and onboard your WiFi via Bluetooth Low Energy</p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/FelixMairamhof/WIFI-BLE-PWA-IoT-Onboarding" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/FelixMairamhof/WIFI-BLE-ESP32-IoT-Onboarding" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-teal-500 dark:border-teal-400">
                  <WifiHigh className="w-12 h-12 text-teal-500 dark:text-teal-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">IoT Sensor Onboarding App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A software / system development project where you can onboard an IoT Sensor via an PWA (ProgressiveWebApp) into your ThingsBoard and ChirpStack</p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/FelixMairamhof/Onboarding-App-IoT-Wizard" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-teal-500 dark:border-teal-400">
                  <CloudRainWind className="w-12 h-12 text-teal-500 dark:text-teal-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Weather App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A software project (ProgressiveWebApp) where you can see Weather everywhere in the World and in your current Location. You can also have different Tabs open at the same time</p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/FelixMairamhof/Weather-App" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
            </div>
          </section>

          {/* Resume Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Resume</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-teal-500 dark:border-teal-400">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Work Experience</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Software Developer at Comm-Unity (2024-Present)</li>
                  <li>Business Developer at Comm-Unity (August 2024)</li>
                  <li>Java Developer at Uniquare (Juli 2024)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Education</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>HTL (HigherTechnicalSchool) Mössingerstraße (2021 - Now)</li>
                </ul>
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

        
      </div>
    </div>
  )
}