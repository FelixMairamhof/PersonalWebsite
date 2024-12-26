export default function TechStackSection() {
  return (
    <section className="mb-16  motion-preset-slide-right motion-duration-500">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Tech Stack
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-teal-500 dark:border-teal-400">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Frontend
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            React | Vite | Tailwind | JavaScript | HTML | CSS | NextJs
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Backend
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            NodeJs | Express | Java Spring | Spring Boot | Python Flask | C# .NET Blazor
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Database
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Postgres SQL | SQL Light | Azure SQL
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            DevOps
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Docker | Azure Cloud | AWS | CI/CD GitHub Actions
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Blockchain
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            ICP (Internet Computer) | Motoko
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Networks
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Cisco Packet Tracer | Routing | DHCP | VLAN | OSPF | DNS
          </p>
        </div>
      </div>
    </section>
  );
}
