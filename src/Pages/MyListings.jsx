import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from './Loading';
import Swal from 'sweetalert2';

const MyListings = () => {

    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [myCars, setMyCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/cars')
            .then(res => res.json())
            .then(data => {
                const cars = data.filter(car => car.providerEmail === user.email)
                setMyCars(cars)
                setLoading(false)
            })
    }, [user.email])
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/cars/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('deleted', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = myCars.filter(car => car._id !== _id)
                            setMyCars(remaining)

                        }
                    })

            }
        });
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (myCars.length === 0) {
        return (
            <div className="text-center p-8 bg-yellow-50 rounded-lg max-w-5xl mx-auto my-6">
                <h2 className='text-xl font-bold text-yellow-700'>
                    No cars Found
                </h2>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <p className='text-gray-600'>
                        You haven't add any cars yet. Start exploring!

                    </p>
                    <Link
                        to={'/addCar'}
                        class="text-white text-center bg-red-700 hover:bg-red-800 transition-colors duration-200 py-2 px-5 rounded-lg font-semibold  shadow-md ">
                        Add Car
                    </Link>
                </div>
            </div>

        );
    }

    return (
        <div>

            <div class="p-4 bg-white shadow-xl rounded-lg max-w-5xl mx-auto my-6">
                <h1 className='text-2xl font-extrabold text-red-700 
               uppercase py-5'>
                    My List-
                </h1>
                <div class="hidden md:grid grid-cols-6 gap-4 items-center text-xs font-semibold uppercase text-gray-500 border-b pb-2 mb-2 tracking-wider">
                    <div class="col-span-1">Car Name</div>
                    <div class="col-span-1">Category</div>
                    <div class="col-span-1">Rent Price</div>
                    <div class="col-span-1">Status</div>
                    <div class="col-span-2 text-right">Actions</div>
                </div>

                {
                    myCars.map(myCar => <div>
                        <div class="border-b md:border-b-0 md:grid md:grid-cols-6 gap-4 items-center py-4 md:py-2 last:border-b-0 bg-red-100 rounded-sm shadow-sm mt-2 p-4">

                            <div class="md:col-span-1 mb-2 md:mb-0">
                                <div class="font-bold text-lg text-gray-900"> {myCar.carName} </div>
                            </div>

                            <div class="md:col-span-1 mb-2 md:mb-0">
                                <span class="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">Category:</span>
                                <div class="text-gray-600">{myCar.category}</div>
                            </div>

                            <div class="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-2 mb-3 md:mb-0">
                                <div>
                                    <span class="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">Price:</span>
                                    <div class="text-green-600 font-bold">${myCar.rentPricePerDay}/day</div>
                                </div>

                                <div>
                                    <span class="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">Status:</span>
                                    <span class="px-2 py-0.5 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {myCar.status}
                                    </span>
                                </div>
                            </div>

                            <div class="md:col-span-2  text-left md:text-right flex justify-end gap-2 pt-2 border-t md:border-t-0">
                                <Link
                                to={`/updateCar/${myCar._id}`} class="text-center bg-green-700 hover:bg-green-800 transition-colors duration-200 py-2 px-5 rounded-lg font-semibold shadow-md">
                                    Update
                                </Link>
                                <button
                                    onClick={() => handleDelete(myCar._id)}
                                    class=" text-center bg-red-700 hover:bg-red-800 transition-colors duration-200 py-2 px-5 rounded-lg font-semibold shadow-md">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>)
                }


            </div>

        </div>
    );
};

export default MyListings;