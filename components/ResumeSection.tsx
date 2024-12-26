export default function ResumeSection() {
  return (
    <section className="mb-16  motion-preset-slide-right motion-duration-500">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Resume
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-teal-500 dark:border-teal-400">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Work Experience
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Software Developer at Comm-Unity (2024-Present)</li>
            <li>Business Developer at Comm-Unity (August 2024)</li>
            <li>Java Developer at Uniquare (Juli 2024)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Education
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>HTL (HigherTechnicalSchool) Mössingerstraße (2021 - Now)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
