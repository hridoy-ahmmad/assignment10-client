import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarCards = ({ carData }) => {
    const box = {
        borderRadius: 5,
    };

   
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,     
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0 }}
            style={box}
            data-aos-delay="200"
            className="max-w-full w-full rounded-xl overflow-hidden shadow-xl 
                       bg-white border-2 border-red-50 
                       hover:shadow-2xl hover:shadow-red-400/50 
                       transition duration-300  ease-in-out cursor-pointer"
        >
            {/* Car Image Section */}
            <div className="h-44 relative">
                <img
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                    src={carData.imageUrl}
                    alt={carData.name}
                />
                {/* badge */}
                <div
                    className={`absolute top-2 right-2 p-2 px-4 rounded-lg text-sm font-semibold ${
                        carData.status === 'Booked'
                            ? 'bg-red-400 text-white'
                            : 'bg-green-300 text-black'
                    }`}
                >
                    {carData.status}
                </div>
            </div>

            <div className="p-5">
                {/* Car Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    <span className="text-red-600 font-extrabold">{carData.carName}</span>
                </h3>

                <div>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Model: {carData.carTypeOrModel}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                        <span className="font-semibold">Provider: {carData.providerName}</span>
                    </p>
                </div>

                {/* Price and Button Container */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                    <div className="text-2xl font-extrabold text-red-600">
                        ${carData.rentPricePerDay}
                        <span className="text-sm font-normal text-gray-500 ml-1">/ day</span>
                    </div>

                    <Link
                        to={`/carDetails/${carData._id}`}
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
        </motion.div>
    );
};

export default CarCards;
