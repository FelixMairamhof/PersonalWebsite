// FILE: Navbar.tsx
"use client";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from 'next/link';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <nav className="bg-white dark:bg-gray-800 border-b-2 border-teal-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">YourName</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/book-reviews" className="text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Book Reviews</Link>
                            <Link href="/video-recommendations" className="text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Video Recommendations</Link>
                            <Link href="/blog" className="text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Blog</Link>
                            <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold">
                            {isDarkMode ? "Light Mode " : "Dark Mode"}
                        </button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/book-reviews" className="text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Book Reviews</Link>
                        <Link href="/video-recommendations" className="text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Video Recommendations</Link>
                        <Link href="/blog" className="text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                        <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                            {isDarkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}