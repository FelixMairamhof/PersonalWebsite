'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from 'next/link'

type WorkExperience = {
  id: number
  company: string
  position: string
  duration: string
  description: string
}

type Project = {
  id: number
  title: string
  description: string
  techStack: string[]
  image: string
  siteUrl: string
  githubUrl: string
}

type Certification = {
  id: number
  name: string
  issuer: string
  date: string
}

type Hackathon = {
  id: number
  name: string
  date: string
  achievement: string
}

export function App() {
  const [activeSection, setActiveSection] = useState('techstack')

  const techStack = ["React", "TypeScript", "Node.js", "Python", "TensorFlow", "MongoDB", "GraphQL", "Docker"]

  const workExperience: WorkExperience[] = [
    {
      id: 1,
      company: "Tech Innovators Inc.",
      position: "Senior Full Stack Developer",
      duration: "2020 - Present",
      description: "Led development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      id: 2,
      company: "Data Dynamics LLC",
      position: "Machine Learning Engineer",
      duration: "2018 - 2020",
      description: "Developed and deployed machine learning models for predictive analytics in finance and healthcare sectors."
    }
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description: "An innovative web app that uses AI to prioritize and manage tasks efficiently.",
      techStack: ["React", "TypeScript", "Node.js", "TensorFlow.js"],
      image: "/placeholder.svg",
      siteUrl: "https://ai-taskmanager.example.com",
      githubUrl: "https://github.com/johndoe/ai-taskmanager"
    },
    {
      id: 2,
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology.",
      techStack: ["Solidity", "Ethereum", "React", "Web3.js"],
      image: "/placeholder.svg",
      siteUrl: "https://blockvote.example.com",
      githubUrl: "https://github.com/johndoe/blockvote"
    }
  ]

  const certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022"
    },
    {
      id: 2,
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2021"
    }
  ]
  
  const hackathons: Hackathon[] = [
    { id: 1, name: "Global AI Hackathon", date: "2023-01-15", achievement: "1st Place" },
    { id: 2, name: "Blockchain Innovation Challenge", date: "2023-06-30", achievement: "Best Technical Implementation" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['techstack', 'about', 'experience', 'projects', 'certifications', 'hackathons']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-500 to-teal-400 text-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-lg z-50">
        <ul className="flex justify-center space-x-4 p-4">
          {['techstack', 'about', 'experience', 'projects', 'certifications', 'hackathons'].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`text-lg font-semibold hover:text-teal-200 transition-colors ${
                  activeSection === section ? 'border-b-2 border-teal-200' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container mx-auto p-4 pt-24">
        <header className="flex flex-col items-center space-y-4 mb-12 pt-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-2">John Doe</h1>
            <p className="text-xl text-teal-200">Full-stack Developer & AI Enthusiast</p>
          </motion.div>
        </header>

        <motion.section
          id="techstack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-full text-lg hover:bg-white/30 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            A passionate developer with a knack for creating innovative solutions. I thrive on challenges and constantly push the boundaries of whats possible in tech.
          </p>
        </motion.section>

        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
          <div className="space-y-6">
            {workExperience.map((job) => (
              <Card key={job.id} className="bg-white/10 backdrop-blur-lg text-white border-none">
                <CardHeader>
                  <CardTitle className="text-2xl">{job.position}</CardTitle>
                  <CardDescription className="text-teal-200">{job.company} | {job.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg text-white border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
                    <p>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="bg-teal-500 px-2 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">Visit Site</Button>
                    </Link>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">View on GitHub</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="certifications"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg text-white border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl">{cert.name}</CardTitle>
                    <CardDescription className="text-teal-200">{cert.issuer} | {cert.date}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="hackathons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4">Hackathons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg text-white border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl">{hackathon.name}</CardTitle>
                    <CardDescription className="text-teal-200">{hackathon.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">Achievement: {hackathon.achievement}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}