import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from './Loading';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyListings = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [myCars, setMyCars] = useState([]);

  
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {
        fetch('https://assignment10-server-rouge-six.vercel.app/cars')
            .then((res) => res.json())
            .then((data) => {
                const cars = data.filter((car) => car.providerEmail === user.email);
                setMyCars(cars);
                setLoading(false);
            });
    }, [user.email]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment10-server-rouge-six.vercel.app/cars/${_id}`, { method: 'DELETE' })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                icon: 'success',
                            });
                            const remaining = myCars.filter((car) => car._id !== _id);
                            setMyCars(remaining);
                        }
                    });
            }
        });
    };

    if (loading) {
        return <Loading />;
    }

    if (myCars.length === 0) {
        return (
            <div
                className="text-center p-8 bg-yellow-50 rounded-lg max-w-5xl mx-auto my-6"
                data-aos="fade-up"
            >
                <h2 className="text-xl font-bold text-yellow-700">No cars Found</h2>
                <div className="flex flex-col gap-5 justify-center items-center mt-4">
                    <p className="text-gray-600">
                        You haven't added any cars yet. Start exploring!
                    </p>
                    <Link
                        to={'/addCar'}
                        className="text-white text-center bg-red-700 hover:bg-red-800 transition-colors duration-200 py-2 px-5 rounded-lg font-semibold shadow-md"
                        data-aos="zoom-in"
                    >
                        Add Car
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto my-6 p-4">
            <div
                className="p-4 bg-white shadow-xl rounded-lg"
                data-aos="fade-down"
            >
                <h1 className="text-2xl font-extrabold text-red-700 uppercase py-5">
                    My List
                </h1>

                <div className="hidden md:grid grid-cols-6 gap-4 items-center text-xs font-semibold uppercase text-gray-500 border-b pb-2 mb-2 tracking-wider">
                    <div className="col-span-1">Car Name</div>
                    <div className="col-span-1">Category</div>
                    <div className="col-span-1">Rent Price</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-2 text-right">Actions</div>
                </div>

                {myCars.map((myCar, index) => (
                    <div
                        key={myCar._id}
                        className="border-b md:border-b-0 md:grid md:grid-cols-6 gap-4 items-center py-4 md:py-2 last:border-b-0 bg-red-100 rounded-sm shadow-sm mt-2 p-4"
                        data-aos="fade-up"
                        data-aos-delay={index * 100} // ✅ stagger animation for each card
                    >
                        <div className="md:col-span-1 mb-2 md:mb-0">
                            <div className="font-bold text-lg text-gray-900">
                                {myCar.carName}
                            </div>
                        </div>

                        <div className="md:col-span-1 mb-2 md:mb-0">
                            <span className="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">
                                Category:
                            </span>
                            <div className="text-gray-600">{myCar.category}</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-2 mb-3 md:mb-0">
                            <div>
                                <span className="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">
                                    Price:
                                </span>
                                <div className="text-green-600 font-bold">
                                    ${myCar.rentPricePerDay}/day
                                </div>
                            </div>

                            <div>
                                <span className="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">
                                    Status:
                                </span>
                                <span className="px-2 py-0.5 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {myCar.status}
                                </span>
                            </div>
                        </div>

                        <div className="md:col-span-2 text-left md:text-right flex justify-end gap-2 pt-2 border-t md:border-t-0">
                            <Link
                                to={`/updateCar/${myCar._id}`}
                                className="text-center bg-green-700 hover:bg-green-800 transition-colors duration-200 py-2 px-5 rounded-lg font-semibold shadow-md"
                            >
                                Update
                            </Link>
                            <button
                                onClick={() => handleDelete(myCar._id)}
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

export default MyListings;
