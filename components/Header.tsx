import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-16 motion-preset-slide-right motion-duration-2000">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center">
          <div className="text-center lg:text-left mb-4 lg:hidden ">
          <h1 className='motion-preset-typewriter-[15] motion-duration-2000 text-2xl font-bold text-teal-400'>Felix Mairamhof</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technology | Finance | Business{" "}
            </p>
          </div>
          <div className="motion-preset-focus motion-duration-2000 relative inline-block hover:scale-95 transition-transform ease-in-out duration-300">
            <Image
              src="/felix-mairamhof.jpg"
              width={256}
              height={256}
              alt="Felix Mairamhof"
              className="rounded-full w-64 h-64 object-cover border-4 border-teal-500 dark:border-teal-400"
            />
            <div className="absolute inset-0 rounded-full bg-teal-500 dark:bg-teal-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/felix-mairamhof-9b7ba4325/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/FelixMairamhof"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <Github className="w-6 h-6 hover:scale-105" />
            </a>
          </div>
        </div>
        <div className="lg:w-2/3 lg:pl-12">
          <div className="hidden lg:block mb-8">
            <h1 className="text-4xl font-bold text-teal-400 dark:text-teal-400 mb-2 motion-preset-typewriter-[15] motion-duration-2000">
              Felix Mairamhof
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technology | Finance | Business
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            As a multifaceted professional with expertise in software
            development, finance, and business, I bring a unique perspective to
            every project. My passion lies in creating innovative solutions that
            bridge the gap between technology and business needs.
          </p>
        </div>
      </div>
    </header>
  );
}
