import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AddCar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

 
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const rentPrice = parseInt(e.target.rentPrice.value);
        const newCarInfo = {
            carName: e.target.carName.value,
            description: e.target.description.value,
            category: e.target.category.value,
            rentPricePerDay: rentPrice,
            location: e.target.location.value,
            imageUrl: e.target.imageUrl.value,
            providerName: e.target.providerName.value,
            providerEmail: e.target.providerEmail.value,
            status: e.target.status.value,
            carTypeOrModel: e.target.model.value,
            date: new Date(),
        };

        fetch('https://assignment10-server-rouge-six.vercel.app/cars', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newCarInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Car added successfully. See My listings');
                navigate('/');
            })
            .catch((err) => console.log(err));

        e.target.reset();
    };

    return (
        <div>
            <div className="bg-gray-50 p-8 flex items-center justify-center">
                <div
                    className="w-full max-w-2xl bg-white p-8 rounded-sm rounded-t-4xl shadow-2xl shadow-red-200 border-t-10 border-red-600"
                    data-aos="fade-up"
                >
                    <h2
                        className="text-3xl font-bold mb-6 text-red-700 border-b pb-3"
                        data-aos="fade-down"
                    >
                        List Your Rental Car
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5 text-black/80">
                        {/* Car Name */}
                        <div data-aos="fade-right">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Car Name*
                            </label>
                            <input
                                type="text"
                                name="carName"
                                placeholder="e.g., Tesla Model 3"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                                required
                            />
                        </div>

                        {/* Model */}
                        <div data-aos="fade-left">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Car model
                            </label>
                            <input
                                type="text"
                                name="model"
                                placeholder="e.g., Leaf e+ 62kWh"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                            />
                        </div>

                        {/* Description */}
                        <div data-aos="fade-right">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description*
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="3"
                                placeholder="A brief, professional description of the car."
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-red-500 focus:border-red-500 transition duration-150"
                                required
                            ></textarea>
                        </div>

                        {/* Category */}
                        <div data-aos="fade-left">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category*
                            </label>
                            <select
                                id="category"
                                name="category"
                                className="mt-1 block w-full bg-white border border-gray-300 text-gray-900 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 transition duration-150"
                                required
                            >
                                <option value="">Select a Category</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Luxury">Luxury</option>
                                <option value="Electric">Electric</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div data-aos="fade-right">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Status*
                            </label>
                            <select
                                name="status"
                                className="mt-1 block w-full bg-white border border-gray-300 text-gray-900 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 transition duration-150"
                                required
                            >
                                <option value="">Select a Status</option>
                                <option value="Available">Available</option>
                            </select>
                        </div>

                        {/* Rent Price */}
                        <div data-aos="fade-left">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Rent Price (per day)*
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    $
                                </div>
                                <input
                                    type="number"
                                    name="rentPrice"
                                    className="mt-1 text-black/80 w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div data-aos="fade-right">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Location*
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="City, State/Region"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div data-aos="fade-left">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Hosted Image URL*
                            </label>
                            <input
                                type="url"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="https://example.com/car-image.jpg"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                                required
                            />
                        </div>

                        {/* Provider Info */}
                        <div data-aos="fade-up" className="pt-4 border-t border-gray-200">
                            <h3 className="text-base font-semibold text-gray-800 mb-3">
                                Provider Information
                            </h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Provider Name (read-only)
                                </label>
                                <input
                                    type="text"
                                    id="providerName"
                                    name="providerName"
                                    readOnly
                                    value={user.displayName}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 cursor-not-allowed bg-gray-100 text-gray-500 rounded-md"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Provider Email (read-only)
                                </label>
                                <input
                                    type="email"
                                    name="providerEmail"
                                    readOnly
                                    value={user.email}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 cursor-not-allowed bg-gray-100 text-gray-500 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div data-aos="zoom-in" className="pt-6">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
                            >
                                Add Car
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCar;
