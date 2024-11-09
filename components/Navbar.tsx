// FILE: Navbar.tsx
"use client";
import { useState } from "react";
import { BookIcon, CodeXmlIcon, FilesIcon, Menu, PlusCircle, VideoIcon, X } from "lucide-react";
import Link from 'next/link';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 border-b-2 border-teal-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <img src="/TealLogoVector.png" alt="Logo" className="h-10 w-10  scale-150 mr-4" />
                            <span className="text-2xl font-bold text-teal-400">Felix Mairamhof</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/books" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex"><BookIcon className="mr-2 h-4 w-4" /> Books</Link>
                            <Link href="/blog" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex"><FilesIcon className="mr-2 h-4 w-4" />Blog</Link>
                            <Link href="/courses" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex"><CodeXmlIcon className="mr-2 h-4 w-4" />Courses</Link>
                            <Link href="/videos" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex"><VideoIcon className="mr-2 h-4 w-4" />Videos</Link>
                            <Link href="/admin" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex"><PlusCircle className="mr-2 h-4 w-4" />Admin</Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
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
                        <Link href="/books" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Books</Link>
                        <Link href="/blog" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Blogs</Link>
                        <Link href="/courses" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Courses</Link>
                        <Link href="/videos" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Videos</Link>
                        <Link href="/admin" className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Admin</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}