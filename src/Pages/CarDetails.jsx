import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import CarCards from '../Components/carCards';
import CarDetailCard from '../Components/CarDetailCard';

const CarDetails = () => {
    const carsData = useLoaderData()
    const {id} = useParams()
    const [carInfo, setCarInfo] = useState([])

    useEffect(()=>{
        const carInfoBox = carsData.find(carData => carData._id === (id))
        setCarInfo(carInfoBox)
    },[carsData, id])
    console.log(carInfo);
    // console.log(carsData);
    
    return (
       <div className=''>
        <CarDetailCard carInfo={carInfo}></CarDetailCard>
        <h1 className='text-2xl font-extrabold text-red-700 
               uppercase  text-center p-2 mt-5'>
                        More You may like
                    </h1>
        <div className='grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-4 p-4 mx-w-[1140px] mx-auto'>
                    {
                        carsData.slice(5, 10).map(carData => <CarCards key={carData._id} carData={carData}></CarCards>)
                    }
                </div>
       </div>
    );
};

export default CarDetails;