import React from 'react';
import { useLoaderData } from 'react-router';
import CarCards from '../Components/carCards';

const BrowseCars = () => {
    const carsData = useLoaderData()
    console.log(carsData);

    return (
        <div className=''>
            <div className='relative bg-cover bg-center w-full h-[200px] md:h-[400px] lg:h-[500px] mt-[-150px]'
                style={
                    {
                        backgroundImage: `url(${'https://i.ibb.co.com/35L1vdsT/Corolla.jpg'})`,

                    }
                }>

                <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'></div>
            </div>
            <div className='mt-10 mb-5'>
                <h1 className='text-2xl font-extrabold text-red-700 
               uppercase  text-center p-2'>
                    All Cars
                </h1>
                <p className='text-black text-center'>Find the perfect ride for your next journey.</p>
            </div>

            <div className='grid lg:grid-cols-3 2 md:grid-cols-2  gap-4 p-4 mx-auto max-w-[1140px]'>
                {
                    carsData.map(carData => <CarCards key={carData._id} carData={carData}></CarCards>)
                }
            </div>
        </div>
    );
};

export default BrowseCars;