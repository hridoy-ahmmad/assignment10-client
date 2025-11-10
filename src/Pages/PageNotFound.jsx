import React from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-md w-full text-center py-12 px-6 sm:px-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
        
        {/* Large Error Code */}
        <h1 className="text-9xl font-extrabold text-red-600 dark:text-red-500 tracking-widest animate-pulse">
          404
        </h1>
        
        {/* Subtitle Message */}
        <div className="bg-gray-200 dark:bg-gray-700 text-sm rounded-lg p-2 inline-block -mt-4 text-gray-700 dark:text-gray-200 shadow-md">
          Page Not Found
        </div>
        
        {/* Main Heading */}
        <p className="mt-8 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Uh oh! Lost in Space.
        </p>
        
        {/* Description */}
        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          It looks like the page you were looking for doesn't exist or has been moved. Don't worry, we can get you back on track!
        </p>
        
        {/* Call to Action Button */}
        <Link  
          to={"/"} 
          className="mt-8 inline-flex items-center space-x-2 px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-red-600 hover:bg-red-700 shadow-lg transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
          aria-label="Go to Home Page"
        >
          <IoHomeSharp />
          <span>Go Back Home</span>
        </Link>
      </div>
    </div>
    );
};

export default PageNotFound;