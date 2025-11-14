import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Annimation from '../animation/Success.json'
import Lottie from 'lottie-react';

const Updatecar = () => {
    const { user } = useContext(AuthContext);
    const [success, setSuccess] = useState(false)
    const data = useLoaderData();

    useEffect(() => {
        AOS.init({ duration: 600, once: true, easing: 'ease-in-out' });
    }, []);

    if (!data) return <p>Loading...</p>;

    const { _id, carName, description, category, rentPricePerDay, status, location, carTypeOrModel } = data;

    const handleUpdate = e => {
        e.preventDefault();
        const rentPrice = parseInt(e.target.rentPrice.value);
        const updateCarInfo = {
            carName: e.target.carName.value,
            description: e.target.description.value,
            category: e.target.category.value,
            rentPricePerDay: rentPrice,
            location: e.target.location.value,
            imageUrl: e.target.imageUrl.value,
            status: e.target.status.value,
            carTypeOrModel: e.target.model.value,
        };

        fetch(`https://assignment10-server-rouge-six.vercel.app/cars/${_id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updateCarInfo)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Car updated successfully. See My Listings');
            setSuccess(true)
            setTimeout(()=> setSuccess(false), 3000)
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="bg-gray-50 min-h-screen p-8 flex justify-center items-center">
            <div className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-red-600">
                <h2 className="text-3xl font-bold mb-6 text-red-700 border-b pb-3" data-aos="fade-down">
                    Update Your Car Information
                </h2>
                    {/* Lottie animation overlay */}
                    {success && (
                        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
                            <Lottie animationData={Annimation} loop={false} style={{ width: 300, height: 300 }} />
                        </div>
                    )}

                <form onSubmit={handleUpdate} className="space-y-5 text-black/80">

                    <div data-aos="fade-right" data-aos-delay="50">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Car Name*</label>
                        <input type="text" defaultValue={carName} name="carName" required className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500" />
                    </div>

                    <div data-aos="fade-left" data-aos-delay="100">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Car Model</label>
                        <input type="text" defaultValue={carTypeOrModel} name="model" className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500" />
                    </div>

                    <div data-aos="fade-right" data-aos-delay="150">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                        <textarea name="description" defaultValue={description} rows="3" required className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"></textarea>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="200">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                        <select defaultValue={category} name="category" required className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500">
                            <option value="">Select a Category</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Electric">Electric</option>
                        </select>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="250">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status*</label>
                        <select defaultValue={status} name="status" required className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500">
                            <option value="">Select Status</option>
                            <option value="Available">Available</option>
                        </select>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="300">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Rent Price (per day)*</label>
                        <input type="number" defaultValue={rentPricePerDay} name="rentPrice" className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500" />
                    </div>

                    <div data-aos="fade-right" data-aos-delay="350">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
                        <input type="text" defaultValue={location} name="location" required className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500" />
                    </div>

                    <div data-aos="fade-left" data-aos-delay="400">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Hosted Image URL*</label>
                        <input type="url" name="imageUrl" required className="w-full px-3 py-2 border rounded-md focus:ring-red-500 focus:border-red-500" />
                    </div>

                    <div className="pt-4 border-t border-gray-200" data-aos="fade-up" data-aos-delay="450">
                        <h3 className="text-base font-semibold text-gray-800 mb-3">Provider Information</h3>
                        <input type="text" value={user.displayName} readOnly className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-500 cursor-not-allowed mb-4" />
                        <input type="email" value={user.email} readOnly className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-500 cursor-not-allowed" />
                    </div>

                    <div className="pt-6" data-aos="zoom-in" data-aos-delay="500">
                        <button type="submit" className="w-full py-2 px-4 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition duration-150">
                            Update Car
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Updatecar;
