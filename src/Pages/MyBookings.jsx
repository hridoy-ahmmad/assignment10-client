import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './Loading';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookedCars, setBookedCars] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {
        fetch(`https://assignment10-server-rouge-six.vercel.app/bookedCars?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBookedCars(data);
                setLoading(false);
            });
    }, [user.email]);

    if (loading) {
        return <Loading />;
    }

    if (bookedCars.length === 0) {
        return (
            <div
                className="text-center p-8 bg-yellow-50 rounded-lg max-w-5xl mx-auto my-6"
                data-aos="fade-up"
            >
                <h2 className="text-xl font-bold text-yellow-700">No Bookings Found</h2>
                <div className="flex flex-col gap-5 justify-center items-center mt-4">
                    <p className="text-gray-600">
                        You haven't booked any cars yet. Start exploring!
                    </p>
                    <Link
                        to={'/browseCars'}
                        className="text-white text-center bg-red-700 hover:bg-red-800 transition-colors duration-200 py-2 px-5 rounded-lg font-semibold shadow-md"
                        data-aos="zoom-in"
                    >
                        Browse Cars
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div
                className="p-4 bg-white shadow-xl rounded-lg max-w-5xl mx-auto my-6"
                data-aos="fade-down"
            >
                <h1 className="text-2xl font-extrabold text-red-700 uppercase py-5">
                    My Bookings
                </h1>

                <div className="hidden md:grid grid-cols-6 gap-4 items-center text-xs font-semibold uppercase text-gray-500 border-b pb-2 mb-2 tracking-wider">
                    <div className="col-span-1">Car Name</div>
                    <div className="col-span-1">Category</div>
                    <div className="col-span-1">Rent Price</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-2 text-right">Actions</div>
                </div>

                {bookedCars.map((car, index) => (
                    <div
                        key={car._id}
                        className="border-b md:border-b-0 md:grid md:grid-cols-6 gap-4 items-center py-4 md:py-2 last:border-b-0 bg-red-100 rounded-sm shadow-sm mt-2 p-4"
                        data-aos="fade-up"
                        data-aos-delay={index * 100} 
                    >
                        <div className="md:col-span-1 mb-2 md:mb-0">
                            <div className="font-bold text-lg text-gray-900">{car.carName}</div>
                        </div>

                        <div className="md:col-span-1 mb-2 md:mb-0">
                            <span className="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">
                                Category:
                            </span>
                            <div className="text-gray-600">{car.category}</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-2 mb-3 md:mb-0">
                            <div>
                                <span className="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">
                                    Price:
                                </span>
                                <div className="text-green-600 font-bold">{car.rentPricePerDay}$/day</div>
                            </div>

                            <div>
                                <span className="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">
                                    Status:
                                </span>
                                <span className="px-2 py-0.5 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    booked
                                </span>
                            </div>
                        </div>

                        <div className="md:col-span-2 text-left md:text-right flex justify-end gap-2 pt-2 border-t md:border-t-0">
                            <button
                                className="text-center bg-red-700 hover:bg-red-800 transition-colors duration-200 py-2 px-5 rounded-lg font-semibold shadow-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
