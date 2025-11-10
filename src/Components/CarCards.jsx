import React from 'react';
import { Link } from 'react-router';

const CarCards = ({ carData }) => {
    console.log(carData);

    return (
        <div
            className="max-w-full w-full rounded-xl overflow-hidden shadow-xl 
                       bg-white border-2 border-red-50 hover:border-red-400
                       hover:shadow-2xl hover:shadow-red-400/50 
                       hover:scale-[1.01] transition duration-300 ease-in-out cursor-pointer"
        >
            {/* Car Image Section */}
            <div className="h-44">
                {/* Placeholder image tag */}
                <img
                    className="w-full h-full object-cover"
                    src={carData.imageUrl}
                    alt={carData.name}
                />
                {/*  (Optional Visual Aid) */}
            </div>

            <div className="p-5">
                {/* Car Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 ">
                <span className='text-red-600 font-extrabold'>{carData.carName}</span> 
                </h3>

              <div className=''>
                  {/* Car Type / Model */}
                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Model: {carData.carTypeOrModel} </span>   
                </p>

                {/* Provider Name */}
                <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Provider: {carData.providerName} </span> 
                </p>
              </div>

                {/* Price and Button Container */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-300">

                    {/* Rent Price (Bold Red Vibe) */}
                    <div className="text-2xl font-extrabold text-red-600">
                        ${ carData.rentPricePerDay}
                        <span className="text-sm font-normal text-gray-500 ml-1">/ day</span>
                    </div>

                    {/* View Details Button (Red Vibe) */}
                    <Link
                       
                        className="px-4 py-2 text-sm font-semibold text-white 
                       bg-red-700 rounded-lg 
                       hover:bg-red-800 focus:outline-none focus:ring-2 
                       focus:ring-red-500 focus:ring-opacity-50 
                       transition duration-150 ease-in-out"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCards;