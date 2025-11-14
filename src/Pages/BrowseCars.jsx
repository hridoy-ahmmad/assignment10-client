import React, { useEffect, useState } from 'react';
import CarCards from '../Components/carCards';
import Loading from './Loading';
import { IoCarSport, IoSadOutline, IoSearch } from 'react-icons/io5';
import NoSearchFound from '../Components/NoSearchFound';

const BrowseCars = () => {

    const [carsData, setCarsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://assignment10-server-rouge-six.vercel.app/cars')
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

    const searchedCars = carsData.filter(carData =>
        carData.carName.toLowerCase().includes(search.toLowerCase())
    )


    return (
        <div>
            <div className="text-center mb-8 mt-12">
                <div className=' flex justify-center items-center gap-2'>
                    <IoCarSport className='text-red-600'/>
                    <p className='text-gray-600'>all cars here</p>
                </div>
                <h2 className="text-4xl font-extrabold text-red-600 sm:text-5xl">
                    All Cars
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
                    Find the perfect ride for your next journey.</p>
            </div>

            {/* search */}
            <div class="max-w-xl mx-auto p-4">
                <form action="#" method="GET" class="relative">

                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-600">
                        <IoSearch />
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
            <div className='grid lg:grid-cols-3 2 md:grid-cols-2  gap-4 p-4 mx-auto max-w-7xl'>
                {
                    searchedCars.length > 0 ?
                        (searchedCars.map(carData => <CarCards key={carData._id} carData={carData}></CarCards>)) :
                        <div className='col-span-full'>
                            <NoSearchFound></NoSearchFound>
                        </div>

                }
            </div>
        </div>
    );
};

export default BrowseCars;