import { Github, FileDown } from "lucide-react";

export default function CertificationSection() {
  return (
    <section className="mb-16  motion-preset-slide-right motion-duration-500">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Certificates
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-teal-500 dark:border-teal-400">
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-4">
          <li className="flex items-center gap-10">
            Harvard CS50
            <a
              href="https://github.com/FelixMairamhof/Harvard-CS50-Intro-Computer-Sience"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <Github className="w-5 h-5 hover:scale-105" />
            </a>
            <a
              href="/CS50x.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <FileDown className="w-5 h-5 hover:scale-105" />
            </a>
          </li>
          <li className="flex items-center gap-10">
            Complete Web Developer Bootcamp
            <a
              href="https://github.com/FelixMairamhof/Web2-Fullstack-PERN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <Github className="w-5 h-5 hover:scale-105" />
            </a>
            <a
              href="https://github.com/FelixMairamhof/Web3-Blockchain-ICP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <Github className="w-5 h-5 hover:scale-105" />
            </a>
            <a
              href="/WebDevCourse.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <FileDown className="w-5 h-5 hover:scale-105" />
            </a>
          </li>
          <li className="flex items-center gap-10">
            ECDL
            <a
              href="/ecdl.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <FileDown className="w-5 h-5 hover:scale-105" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
