import React, { useEffect, useState } from 'react';
import Slider from '../Components/Slider';
import { Link, useLoaderData } from 'react-router';
import CarCards from '../Components/carCards';
import WhyChoose from '../Components/WhyChoose';
import Testimonial from '../Components/Testimonial';
import Loading from './Loading';
import { IoSearch } from 'react-icons/io5';
import NoSearchFound from '../Components/NoSearchFound';

const Home = () => {
    const [carsData, setCarsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/latest_cars')
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
            <div className='mx-auto max-w-7xl'>
                <div className="text-center mb-8 mt-12">
                    <h2 className="text-4xl font-extrabold text-red-600 sm:text-5xl">
                        Latest Cars
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
                        Find the perfect ride for your next journey.</p>
                </div>
               
                

                <div className='grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-4 p-4'>
                    { 
                        carsData.map(carData => <CarCards key={carData._id} carData={carData}></CarCards>) 
                         
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