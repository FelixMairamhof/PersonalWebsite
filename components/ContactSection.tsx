import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="mb-16 motion-preset-slide-right motion-duration-2000">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Get in Touch
      </h2>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8 border-t-4 border-teal-500 dark:border-teal-400">
        <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
          I&apos;m always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:felix.mairamhof@edu.htl-klu.at"
            className="bg-teal-500 dark:bg-teal-500 dark:text-white dark:hover:bg-teal-600 hover:bg-teal-600 text-white font-semibold flex items-center p-2 px-4 rounded-md"
          >
            <Mail className="mr-2 h-4 w-4 motion-preset-oscillate " /> Email Me
          </a>
          <a
            href="https://github.com/FelixMairamhof"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700 flex items-center p-2 px-4 rounded-md"
          >
            <Github className="mr-2 h-4 w-4 hover:scale-105" /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/felix-mairamhof-9b7ba4325/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:text-white dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-gray-700 flex items-center p-2 px-4 rounded-md"
          >
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
