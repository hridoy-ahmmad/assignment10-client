import React from 'react';
import { IoSadOutline } from 'react-icons/io5';

const NoSearchFound = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <div class="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-md border border-gray-200 mx-auto max-w-xl my-12">
                <div class="mb-4 p-3 rounded-full  text-gray-500">
                   <IoSadOutline className='h-20 w-20'/>
                </div>

                <h3 class="text-2xl font-bold text-gray-800 mb-2 text-center">
                    No Results Found
                </h3>

                <p class="text-md text-gray-500 mb-6 text-center leading-relaxed">
                    We couldn't locate any vehicles matching your search keyword.
                </p>



            </div>
        </div>
    );
};

export default NoSearchFound;