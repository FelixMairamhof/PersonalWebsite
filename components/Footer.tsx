import { Linkedin, Github } from 'lucide-react';

export function Footer() {
    return (
    <>
    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8  border-t-2 border-teal-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
    <h1 className='motion-preset-typewriter-[15] motion-duration-2000 text-2xl font-bold text-teal-400'>Felix Mairamhof</h1>
    </div>

    <div className="flex space-x-4">
    <a href="https://www.linkedin.com/in/felix-mairamhof-9b7ba4325/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 flex items-center">
      LinkedIn <Linkedin className="w-6 h-6 ml-2" />
    </a>
    <a href="https://github.com/FelixMairamhof"  target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 flex items-center">
      GitHub <Github className="w-6 h-6 ml-2" />
    </a>
    {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 flex items-center">
      Twitter <Twitter className="w-6 h-6 ml-2" />
    </a> */}
    </div>
    </div>
     <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Felix Mairamhof. All rights reserved.
    </div>
    </div>
    </footer>
    </>
    );
}
