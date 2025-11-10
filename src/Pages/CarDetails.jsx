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
       <div>
        <CarDetailCard carInfo={carInfo}></CarDetailCard>
       </div>
    );
};

export default CarDetails;