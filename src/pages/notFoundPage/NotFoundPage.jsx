import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 overflow-hidden">
            {/* Background subtle circles */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-pink-300 rounded-full opacity-30 animate-pulse"></div>

            {/* Main content */}
            <div className="z-10 text-center px-6">
                <h1 className="text-9xl font-extrabold text-purple-600 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    Sorry, the page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};


export default NotFoundPage;