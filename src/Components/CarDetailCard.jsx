import React from 'react';
import { FaEnvelope, FaTag, FaUserTie } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';

const CarDetailCard = ({ carInfo }) => {
    const { carName, carTypeOrModel, description, category, rentPricePerDay, status, location, imageUrl, providerName, providerEmail } = carInfo
    return (
        <div>
            <div className="max-w-7xl mx-auto p-4 md:p-8 bg-gray-50">
                <div className="bg-white shadow-xl rounded-xl overflow-hidden">

                    {/* Image Section: Adjusted height for better mobile viewing (h-64 on small, h-96 on md+) */}
                    <div className="h-64 md:h-96 w-full ">
                        <img
                            src={imageUrl}
                            alt={carName}
                            className="w-full h-full object-cover "
                        />
                    </div>

                    <div className="p-6 md:p-10">

                        {/* Header and Price: */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 border-b pb-4 ">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 md:mb-0">
                                {carName}
                            </h1>
                            <div className="text-left md:text-right">
                                <p className="text-4xl sm:text-5xl font-extrabold text-red-600">
                                    ${rentPricePerDay}<span className="text-lg text-gray-500 font-semibold">
                                        / Day
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Key Details Grid: Already good with grid-cols-1 on mobile, grid-cols-2 on md */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">

                            {/* Status */}
                            <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 rounded-full ${status === 'Available' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                                <p className="text-base sm:text-lg font-semibold text-gray-700">
                                    Status: <span className="font-bold"> {status} </span>
                                </p>
                            </div>

                            {/* Category */}
                            <div className="flex items-center space-x-3">
                                <FaTag className="text-blue-500 text-xl" />
                                <p className="text-base sm:text-lg font-semibold text-gray-700">
                                    Category: <span className="font-bold">
                                        {category}
                                    </span>
                                </p>
                            </div>

                            {/* Location */}
                            <div className="flex items-center space-x-3">
                                <IoLocation className="text-red-500 text-xl" />
                                <p className="text-base sm:text-lg font-semibold text-gray-700">
                                    Location: <span className="font-bold"> {location} </span>
                                </p>
                            </div>
                        </div>

                        {/* Description: Adjusted heading size */}
                        <div className="mb-10">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 border-b-2 pb-1">
                                Description
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                {description}
                            </p>
                        </div>

                        {/* Provider Information: Adjusted heading and text sizes */}
                        <div className="mb-10 p-4 sm:p-6 bg-red-50 rounded-lg border border-red-200">
                            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 flex items-center">
                                <FaUserTie className="mr-2" /> Provider Information
                            </h2>
                            <p className="text-sm sm:text-lg text-gray-700 mb-1">
                                <span className="font-semibold mr-1">Name:</span>{providerName}
                            </p>
                            <p className="text-sm sm:text-lg text-gray-700 flex items-center">
                                <FaEnvelope className="mr-2 text-red-500" />
                                <span className="font-semibold mr-1">Email:</span> {providerEmail}
                            </p>
                        </div>

                        {/* Book Now Button: Already responsive with w-full on mobile and smaller widths on md+ */}
                        <div className="text-center">
                            <button
                                // onClick={() => alert(`Initiating booking for ${carName}...`)}
                                className="w-full md:w-1/2 lg:w-1/3 px-8 py-4 text-lg sm:text-xl font-bold text-white
                                           bg-red-700 rounded-xl shadow-lg
                                           hover:bg-red-800 hover:shadow-xl transition duration-300
                                           focus:outline-none focus:ring-4 focus:ring-red-300"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailCard;