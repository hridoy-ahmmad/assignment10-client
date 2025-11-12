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

    const searchedCars = carsData.filter(car =>
    car.carName.toLowerCase().includes(search.toLowerCase()))


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
                {/* Search Car */}
                <div class="max-w-xl mx-auto p-4">
                    <form action="#" method="GET" class="relative">

                        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-600">
                           <IoSearch  />
                        </div>

                        <input
                            type="search"
                            name="search"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search cars by name"
                            class="w-full py-3 pl-12 pr-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full 
                   shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
                            aria-label="Search"
                        />

                    </form>
                </div>

                <div className='grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-4 p-4'>
                    { searchedCars.length>0 ? (
                        carsData.map(carData => <CarCards key={carData._id} carData={carData}></CarCards>)) : 
                         <div className='col-span-full'>
                            <NoSearchFound></NoSearchFound>
                        </div>
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