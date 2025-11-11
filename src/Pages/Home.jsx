import React, { useEffect, useState } from 'react';
import Slider from '../Components/Slider';
import { Link, useLoaderData } from 'react-router';
import CarCards from '../Components/carCards';
import WhyChoose from '../Components/WhyChoose';
import Testimonial from '../Components/Testimonial';
import Loading from './Loading';

const Home = () => {
    const [carsData, setCarsData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3000/cars')
            .then(res => res.json())
            .then(data => {
                setCarsData(data)
                setLoading(false)
            }
            )
            .catch(() => {
                setLoading(true)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }


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
                        carsData.slice(0, 6).map(carData => <CarCards key={carData._id} carData={carData}></CarCards>)
                    }
                </div>
                <div className=" cursor-pointer text-white my-10 flex justify-center items-center">
                    <Link to={'browseCars'} className="  bg-red-700 border-none py-3 px-8 rounded-sm hover:bg-red-800 hover:shadow-xl transition duration-300">Browse All</Link>
                </div>

            </div>

            <WhyChoose></WhyChoose>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;