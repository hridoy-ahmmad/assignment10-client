import React, { useEffect, useState } from 'react';
import CarCards from '../Components/carCards';
import Loading from './Loading';

const BrowseCars = () => {

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
            .catch(()=>{
                setLoading(true)
            })
    }, [])

if(loading){
    return <Loading></Loading>
}



    return (
        <div className=''>


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