"use server";

import CertificationSection from "./CertificationSection";
import ContactSection from "./ContactSection";
import HackathonsSection from "./HackathonsSection";
import Header from "./Header";
import ProjectsSection from "./ProjectsSection";
import ResumeSection from "./ResumeSection";
import TechStackSection from "./TechStackSection";


export default async function Homepage() {
  return (
    <div className="min-h-screen dark">
      <div className="bg-gradient-to-tr dark:from-gray-700 dark:to-gray-900 min-h-screen">
        {/* Homepage Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Header/>
          <ContactSection/>
          <ProjectsSection/>
          <ResumeSection/>
          <TechStackSection/>
          <HackathonsSection/>
          <CertificationSection/>
        </main>
      </div>
    </div>
  );
}
