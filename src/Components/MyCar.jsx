import React from 'react';

const MyCar = ({ myCar }) => {
    console.log(myCar);
    const { carName, category, rentPricePerDay, status } = myCar


    return (
        <div>
            <div class="border-b md:border-b-0 md:grid md:grid-cols-6 gap-4 items-center py-4 md:py-2 last:border-b-0">

                <div class="md:col-span-1 mb-2 md:mb-0">
                    <div class="font-bold text-lg text-gray-900"> {carName} </div>
                </div>

                <div class="md:col-span-1 mb-2 md:mb-0">
                    <span class="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">Category:</span>
                    <div class="text-gray-600">{category}</div>
                </div>

                <div class="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-2 mb-3 md:mb-0">
                    <div>
                        <span class="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">Price:</span>
                        <div class="text-green-600 font-bold">${rentPricePerDay}/day</div>
                    </div>

                    <div>
                        <span class="md:hidden text-xs font-medium uppercase text-gray-500 mr-2">Status:</span>
                        <span class="px-2 py-0.5 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {status}
                        </span>
                    </div>
                </div>

                <div class="md:col-span-2 text-left md:text-right space-y-2 md:space-y-0 md:space-x-2 pt-2 border-t md:border-t-0">
                    <button class="text-center bg-green-700 hover:bg-green-800 transition-colors duration-200 py-2 px-5 rounded-lg font-semibold shadow-md">
                        Update
                    </button>
                    <button class=" text-center bg-red-700 hover:bg-red-800 transition-colors duration-200 py-2 px-5 rounded-lg font-semibold shadow-md">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyCar;