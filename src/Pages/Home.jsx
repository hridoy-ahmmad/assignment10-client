import React, { useEffect, useState } from 'react';
import Slider from '../Components/Slider';
import { Link } from 'react-router';
import CarCards from '../Components/carCards';
import WhyChoose from '../Components/WhyChoose';
import Testimonial from '../Components/Testimonial';
import Loading from './Loading';
import { IoSearch } from 'react-icons/io5';
import NoSearchFound from '../Components/NoSearchFound';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopCars from '../Components/TopCars';

const Home = () => {
    const [carsData, setCarsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        fetch('https://assignment10-server-rouge-six.vercel.app/latest_cars')
            .then(res => res.json())
            .then(data => {
                setCarsData(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(true);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    const searchedCars = carsData.filter(car =>
        car.carName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <Slider />

            <div className='py-10 mt-0'>
                <div className='mx-auto max-w-7xl'>
                    {/* Main Heading Section */}
                    <div
                        className="text-center mb-8 mt-12 main"
                        data-aos="fade-up"
                    >
                        <h2 className="text-4xl font-extrabold text-red-600 sm:text-5xl">
                            Latest Cars
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
                            Find the perfect ride for your next journey.
                        </p>
                    </div>

                    {/* Search Car Section */}
                    <div
                        className="max-w-xl mx-auto p-4 search"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <form action="#" method="GET" className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-600">
                                <IoSearch />
                            </div>
                            <input
                                type="search"
                                name="search"
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search cars by name"
                                className="w-full py-3 pl-12 pr-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full 
                                       shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
                                aria-label="Search"
                            />
                        </form>
                    </div>

                    {/* Car Grid */}
                    <div className='grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-4 p-4'>
                        {searchedCars.length > 0 ? (
                            searchedCars.map((carData) => (
                                <CarCards key={carData._id} carData={carData} />
                            ))
                        ) : (
                            <div className='col-span-full'>
                                <NoSearchFound />
                            </div>
                        )}
                    </div>

                    {/* Browse All Button */}
                    <div className="cursor-pointer text-white my-10 flex justify-center items-center" data-aos="fade-up" data-aos-delay="300">
                        <Link
                            to={'browseCars'}
                            className="bg-red-700 border-none py-3 px-8 rounded-sm hover:bg-red-800 hover:shadow-xl transition duration-300"
                        >
                            Browse All
                        </Link>
                    </div>
                </div>
            </div>

            <TopCars></TopCars>
            <Testimonial />
            <WhyChoose />
        </div>
    );
};

export default Home;
