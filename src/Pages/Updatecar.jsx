import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const Updatecar = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    console.log(data);

    const { _id, carName, description, category, rentPricePerDay, status, location, carTypeOrModel } = data
    const handleUpdate = e => {

        e.preventDefault()
        const rentPrice = parseInt(e.target.rentPrice.value)
        const updateCarInfo = {
            carName: e.target.carName.value,
            description: e.target.description.value,
            category: e.target.category.value,
            rentPricePerDay: rentPrice,
            location: e.target.location.value,
            imageUrl: e.target.imageUrl.value,
            status: e.target.status.value,
            carTypeOrModel: e.target.model.value,
        }
        fetch(`http://localhost:3000/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateCarInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log((data));
                toast.success('Car added successfully. See My listings')
            })
            .catch(err => {
                console.log(err);

            })
    }

    return (
        <div>
            <div className=" bg-gray-50 p-8 flex items-center justify-center">
                <div className="w-full max-w-2xl bg-white p-8 rounded-sm rounded-t-4xl shadow-2xl shadow-red-200 border-t-10 border-red-600">

                    {/* Header with Red Accent */}
                    <h2 className="text-3xl font-bold mb-6  text-red-700 border-b pb-3">
                        Update Your car Information
                    </h2>

                    <form
                        onSubmit={handleUpdate}
                        className="space-y-5 text-black/80">

                        {/* Car Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Car Name*
                            </label>
                            <input
                                type="text"
                                defaultValue={carName}
                                name="carName"
                                placeholder="e.g., Tesla Model 3"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                                required
                            />
                        </div>
                        {/* Model */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Car model
                            </label>
                            <input
                                type="text"
                                name="model"
                                defaultValue={carTypeOrModel}
                                placeholder="e.g., Leaf e+ 62kWh"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"

                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description*
                            </label>
                            <textarea
                                id="description"
                                defaultValue={description}
                                name="description"
                                rows="3"
                                placeholder="A brief, professional description of the car."
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-red-500 focus:border-red-500 transition duration-150"
                                required
                            ></textarea>
                        </div>

                        {/* Category (Dropdown) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category*
                            </label>
                            <select
                                id="category"
                                defaultValue={category}
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
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Status*
                            </label>
                            <select

                                name="status"
                                defaultValue={status}
                                className="mt-1 block w-full bg-white border border-gray-300 text-gray-900 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 transition duration-150"
                                required
                            >
                                <option value="">Select a Staus</option>
                                <option value="Available">Available</option>

                            </select>
                        </div>

                        {/* Rent Price (per day) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Rent Price (per day)*
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    $
                                </div>
                                <input
                                    type="number"
                                    defaultValue={rentPricePerDay}
                                    name="rentPrice"
                                    className="mt-1 text-black/80 w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Location*
                            </label>
                            <input
                                type="text"
                                defaultValue={location}
                                id="location"
                                name="location"
                                placeholder="City, State/Region"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                                required
                            />
                        </div>

                        {/* Hosted Image URL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Hosted Image URL (from unplash or google/any)*
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

                        {/* Provider Details (Read-only) */}
                        <div className="pt-4 border-t border-gray-200">
                            <h3 className="text-base font-semibold text-gray-800 mb-3">Provider Information</h3>

                            {/* Provider Name (Read-only) */}
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
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 cursor-not-allowed bg-gray-100 text-gray-500 rounded-md "
                                />
                            </div>

                            {/* Provider Email (Read-only) */}
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Provider Email (read-only)
                                </label>
                                <input
                                    type="email"
                                    name="providerEmail"
                                    readOnly
                                    value={user.email}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 cursor-not-allowed bg-gray-100 text-gray-500 rounded-md "
                                />
                            </div>
                        </div>

                        {/* Submit Button with Red Vibe */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
                            >
                                Update Car
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Updatecar;