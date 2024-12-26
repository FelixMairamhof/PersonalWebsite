import { BluetoothConnectedIcon, WifiHigh, CloudRainWind, Github } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="mb-16  motion-preset-slide-right motion-duration-500">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Featured Projects
      </h2>
      <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
        Here are some Projects. If you want to see more check my Github
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-teal-500 dark:border-teal-400">
          <BluetoothConnectedIcon className="w-12 h-12 text-teal-500 dark:text-teal-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Bluetooth / WiFi Onboarding App
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A software / system development project where you can connect to an ESP32 via an PWA (ProgressiveWebApp) and onboard your WiFi via Bluetooth Low Energy
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/FelixMairamhof/WIFI-BLE-PWA-IoT-Onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <Github className="w-5 h-5 hover:scale-105" />
            </a>
            <a
              href="https://github.com/FelixMairamhof/WIFI-BLE-ESP32-IoT-Onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <Github className="w-5 h-5 hover:scale-105" />
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-teal-500 dark:border-teal-400">
          <WifiHigh className="w-12 h-12 text-teal-500 dark:text-teal-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            IoT Sensor Onboarding App
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A software / system development project where you can onboard an IoT Sensor via an PWA (ProgressiveWebApp) into your ThingsBoard and ChirpStack
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/FelixMairamhof/Onboarding-App-IoT-Wizard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <Github className="w-5 h-5 hover:scale-105" />
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-teal-500 dark:border-teal-400">
          <CloudRainWind className="w-12 h-12 text-teal-500 dark:text-teal-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Weather App
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A software project (ProgressiveWebApp) where you can see Weather everywhere in the World and in your current Location. You can also have different Tabs open at the same time
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/FelixMairamhof/Weather-App"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
            >
              <Github className="w-5 h-5 hover:scale-105" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
