import React from 'react';
import Link from 'next/link';
import { HomeIcon} from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen flex items-center justify-center">
            <div>
                <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
                <p className="text-lg text-white mb-8">Sorry, the page you are looking for does not exist.</p>
                <Link href="/" className=" text-white bg-gray-800  hover:bg-gray-700 flex items-center p-2 px-4  rounded-xl">
                        <HomeIcon className="mr-2 h-4 w-4" /> Go back to home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
