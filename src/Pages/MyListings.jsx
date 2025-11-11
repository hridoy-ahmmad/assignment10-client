import React, { useContext, useEffect, useState } from 'react';
import {  } from 'react-router';
import MyCar from '../Components/MyCar';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from './Loading';

const MyListings = () => {

    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [myCars, setMyCars] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/cars')
        .then(res=>res.json())
        .then(data =>{
            const cars = data.filter( car => car.providerEmail === user.email )
            setMyCars(cars)
            setLoading(false)
        })
    },[user.email])

    if(loading){
        return <Loading></Loading>
    }
   
    return (
        <div>

            <div class="p-4 bg-white shadow-xl rounded-lg max-w-5xl mx-auto my-6">

                <div class="hidden md:grid grid-cols-6 gap-4 items-center text-xs font-semibold uppercase text-gray-500 border-b pb-2 mb-2 tracking-wider">
                    <div class="col-span-1">Car Name</div>
                    <div class="col-span-1">Category</div>
                    <div class="col-span-1">Rent Price</div>
                    <div class="col-span-1">Status</div>
                    <div class="col-span-2 text-right">Actions</div>
                </div>

                {
                    myCars.map(myCar=> <MyCar key={myCar._id} myCar={myCar} ></MyCar>)
                }
                
                
            </div>
           
        </div>
    );
};

export default MyListings;