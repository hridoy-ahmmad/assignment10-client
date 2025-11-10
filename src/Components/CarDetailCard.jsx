import React from 'react';
import { FaEnvelope, FaTag, FaUserTie } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';

const CarDetailCard = ({carInfo}) => {
    const { carName, carTypeOrModel, description, category, rentPricePerDay, status, location, imageUrl, providerName,providerEmail } = carInfo
    return (
        <div>
             <div className="max-w-[1140px] mx-auto p-4 md:p-8 bg-gray-50">
            <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
                
                {/* Image Section */}
                <div className="h-96 w-full">
                    <img 
                        src={imageUrl} 
                        alt={carName} 
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-6 md:p-10">
                    
                    {/* Header and Price */}
                    <div className="flex justify-between items-start mb-6 border-b pb-4">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            {carName}
                        </h1>
                        <div className="text-right">
                            <p className="text-5xl font-extrabold text-red-600">
                                ${rentPricePerDay}<span className="text-lg text-gray-500 font-semibold">
                                / Day
                            </span>
                            </p>
                            
                        </div>
                    </div>

                    {/* Key Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                        
                        {/* Status */}
                        <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${status === 'Available' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                            <p className="text-lg font-semibold text-gray-700">
                                Status: <span className="font-bold"> {status} </span>
                            </p>
                        </div>

                        {/* Category */}
                        <div className="flex items-center space-x-3">
                            <FaTag className="text-blue-500 text-xl" />
                            <p className="text-lg font-semibold text-gray-700">
                                Category: <span className="font-bold">
                                    {category}

                                </span>
                            </p>
                        </div>
                        
                        {/* Location */}
                        <div className="flex items-center space-x-3">
                          <IoLocation className="text-red-500 text-xl" />
                            <p className="text-lg font-semibold text-gray-700">
                                Location: <span className="font-bold"> {location} </span>
                            </p>
                        </div>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 pb-1">
                            Description
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Provider Information */}
                    <div className="mb-10 p-6 bg-red-50 rounded-lg border border-red-200">
                        <h2 className="text-2xl font-bold text-red-700 mb-3 flex items-center">
                            <FaUserTie className="mr-2" /> Provider Information
                        </h2>
                        <p className="text-lg text-gray-700 mb-1">
                            <span className="font-semibold">Name:</span>{providerName}
                        </p>
                        <p className="text-lg text-gray-700 flex items-center">
                            <FaEnvelope className="mr-2 text-red-500" />
                            <span className="font-semibold">Email:</span> {providerEmail}
                        </p>
                    </div>

                    {/* Book Now Button */}
                    <div className="text-center">
                        <button
                            // onClick={() => alert(`Initiating booking for ${car.carName}...`)}
                            className="w-full md:w-1/2 lg:w-1/3 px-8 py-4 text-xl font-bold text-white 
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