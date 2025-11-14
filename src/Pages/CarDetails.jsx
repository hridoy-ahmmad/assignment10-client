import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaEnvelope, FaTag, FaUserTie } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import Loading from './Loading';

import Animation from "../animation/Success.json";
import Lottie from 'lottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarDetails = () => {
    const { user } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const data = useLoaderData();

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    if (!data) return <Loading />;

    const { carName, description, category, rentPricePerDay, status, location, imageUrl, providerName, providerEmail, _id } = data;

    const handleBookCars = () => {
        const bookedCarsInfo = {
            carId: _id,
            carName,
            category,
            rentPricePerDay,
            location,
            imageUrl,
            status: 'Unavailable',
            email: user.email,
            providerEmail,
            date: new Date(),
        };

        // Save booking
        fetch('https://assignment10-server-rouge-six.vercel.app/bookedCars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookedCarsInfo)
        })
            .then(res => res.json())
            .then(resData => {
                if (resData.insertedId) {
                    toast.success('You have successfully booked a ride');
                    setSuccess(true);
                    setTimeout(() => setSuccess(false), 3000);
                } else {
                    toast.warning('The car has already been booked');
                }
            })
            .catch(() => toast.warning('The car has already been booked'));

        // Update status
        fetch(`https://assignment10-server-rouge-six.vercel.app/status/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
        });
    };

    return (
        <div className='bg-gray-50 min-h-screen'>
            <div className="max-w-7xl mx-auto p-4 md:p-8">
                <div className="bg-white shadow-xl rounded-xl overflow-hidden relative">
                    {/* Lottie animation overlay */}
                    {success && (
                        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
                            <Lottie animationData={Animation} loop={false} style={{ width: 300, height: 300 }} />
                        </div>
                    )}

                    {/* Car Image */}
                    <div className="h-64 md:h-96 w-full" data-aos="fade-up">
                        <img src={imageUrl} alt={carName} className="w-full h-full object-cover" />
                    </div>

                    <div className="p-6 md:p-10">
                        {/* Title & Price */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 border-b pb-4" data-aos="fade-right">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 md:mb-0">{carName}</h1>
                            <div className="text-left md:text-right">
                                <p className="text-4xl sm:text-5xl font-extrabold text-red-600">
                                    ${rentPricePerDay}
                                    <span className="text-lg text-gray-500 font-semibold"> / Day</span>
                                </p>
                            </div>
                        </div>

                        {/* Key Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8" data-aos="fade-left">
                            <div className="flex items-center space-x-3">
                                <p className="text-base sm:text-lg font-semibold text-gray-700">
                                    Status: <span className="font-bold">{status}</span>
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaTag className="text-blue-500 text-xl" />
                                <p className="text-base sm:text-lg font-semibold text-gray-700">
                                    Category: <span className="font-bold">{category}</span>
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <IoLocation className="text-red-500 text-xl" />
                                <p className="text-base sm:text-lg font-semibold text-gray-700">
                                    Location: <span className="font-bold">{location}</span>
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-10" data-aos="fade-up">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 border-b-2 pb-1">
                                Description
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
                        </div>

                        {/* Provider Info */}
                        <div className="mb-10 p-4 sm:p-6 bg-red-50 rounded-lg border border-red-200" data-aos="fade-right">
                            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 flex items-center">
                                <FaUserTie className="mr-2" /> Provider Information
                            </h2>
                            <p className="text-sm sm:text-lg text-gray-700 mb-1">
                                <span className="font-semibold mr-1">Name:</span> {providerName}
                            </p>
                            <p className="text-sm sm:text-lg text-gray-700 flex items-center">
                                <FaEnvelope className="mr-2 text-red-500" />
                                <span className="font-semibold mr-1">Email:</span> {providerEmail}
                            </p>
                        </div>

                        {/* Book Now Button */}
                        <div className="text-center" data-aos="zoom-in">
                            <button
                                onClick={handleBookCars}
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

export default CarDetails;
