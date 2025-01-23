import { Github } from "lucide-react";

export default function HackathonsSection() {
  return (
    <section className="mb-16  motion-preset-slide-right motion-duration-500">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Hackathons
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-teal-500 dark:border-teal-400">
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          <li className="flex items-center gap-10">
            Kelag Hackathon &quot;Energy Attack&quot;
            <a
              href="https://github.com/FelixMairamhof/Kelag-Hackathon-.NET-Azure-Ticketsystme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 dark:text-teal-400 hover:underline flex items-center gap-2"
            >
              <Github className="w-4 h-4 hover:scale-105" />
              
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
