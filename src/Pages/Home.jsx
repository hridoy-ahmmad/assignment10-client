import React from 'react';
import Slider from '../Components/Slider';
import { Link, useLoaderData } from 'react-router';
import CarCards from '../Components/carCards';
import WhyChoose from '../Components/WhyChoose';
import Testimonial from '../Components/Testimonial';

const Home = () => {
    const carsData = useLoaderData()
    // console.log(carsData);

    return (
        <div>
            <Slider></Slider>

            <div className='mx-auto max-w-[1140px]'>
                <div className='mt-10 mb-5'>
                    <h1 className='text-2xl font-extrabold text-red-700 
               uppercase  text-center p-2'>
                        Latest Cars
                    </h1>
                    <p className='text-black text-center'>Find the perfect ride for your next journey.</p>
                </div>

                <div className='grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-4 p-4'>
                    {
                        carsData.slice(0,6).map(carData => <CarCards key={carData._id} carData={carData}></CarCards>)
                    }
                </div>
                <div className=" cursor-pointer text-white my-10 flex justify-center items-center">
                    <Link className=" bg-[#E83E3F] border-none py-3 px-8 rounded-lg hover:bg-[#f93E3F] transition-colors duration-100 hover:scale-[1.03]">Browse All</Link>
                </div>

            </div>

            <WhyChoose></WhyChoose>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;