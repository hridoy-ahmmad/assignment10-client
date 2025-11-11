import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import car1 from '../assets/moving-black-car-road_1268-21988.avif'

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router';

const Slider = () => {
    return (
        <div  className="w-full h-[600px] md:h-[600px] lg:h-[800px]">
            <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper mt-[-150px] h-full"
        >
            <SwiperSlide className=' '>
                <div className='relative h-full bg-cover bg-center w-full'
                    style={
                        {
                            backgroundImage: `url(${car1})`,
                           
                        }
                    }>
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent'></div>
                    <div className='mx-auto z-10 max-w-[1140px] h-full flex flex-col justify-center items-center lg:items-start md:items-start gap-10 p-4 mt-20 lg:mt-0 '>
                        <h1 className='text-white z-10  text-4xl font-bold text-start'> <span className=''>Discover</span>
                            <br />
                            <span className='text-6xl '>Your</span>
                            <TypeAnimation
                                className='text-white z-10 text-4xl font-bold text-start lg:text-6xl mt-10'
                                sequence={[
                                    ' Dream Car',
                                    1000,
                                    '',
                                    500,
                                ]}
                                wrapper="span"
                                speed={200}
                                style={{ color: 'red' }}
                                repeat={Infinity}
                            /></h1>
                        <p className='text-start z-10 text-xl'>Find the perfect car that suits your style and budget at TurboTrack.</p>
                        <div className="navbar-end flex lg:justify-start z-10 cursor-pointer text-white">
                            <Link className="  bg-red-700 border-none py-3 px-8 rounded-sm hover:bg-red-800 hover:shadow-xl transition duration-300">Browse cars</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative h-full bg-cover bg-center w-full'
                    style={
                        {
                            backgroundImage: `url(${car1})`,
                           
                        }
                    }>
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent'></div>

                    <div className='mx-auto z-10 max-w-[1140px] h-full flex flex-col justify-center items-center lg:items-start md:items-start gap-10 p-4 mt-20 lg:mt-0 '>
                        <h1 className='text-white z-10 text-4xl font-bold text-start'> <span className=''>Sell</span>
                            <br />
                            <span className='text-6xl '>Your</span>
                            <TypeAnimation
                                className='text-white z-10 text-4xl font-bold text-start lg:text-6xl'
                                sequence={[
                                    ' Car Easily',
                                    1000,
                                    '',
                                    500,
                                ]}
                                wrapper="span"
                                speed={200}
                                style={{ color: 'red' }}
                                repeat={Infinity}
                            /></h1>
                        <p className='text-start z-10 text-xl'>List your car in minutes and reach thousands of potential buyers.</p>
                        <div className="navbar-end flex lg:justify-start z-10 cursor-pointer text-white">
                            <Link className="  bg-red-700 border-none py-3 px-8 rounded-sm hover:bg-red-800 hover:shadow-xl transition duration-300">Make your List</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative h-full bg-cover bg-center w-full'
                    style={
                        {
                            backgroundImage: `url(${car1})`,
                           
                        }
                    }>
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent'></div>
                    <div className='mx-auto z-10 max-w-[1140px] h-full flex flex-col justify-center items-center lg:items-start md:items-start gap-10 p-4 mt-20 lg:mt-0 '>
                        <h1 className='text-white z-10 text-4xl font-bold text-start'> <span className=''>Book</span>
                            <br />
                            <span className='text-6xl '>Your</span>
                            <TypeAnimation
                                className='text-white z-10 text-4xl font-bold text-start lg:text-6xl'
                                sequence={[
                                    ' Car Online',
                                    1000,
                                    '',
                                    500,
                                ]}
                                wrapper="span"
                                speed={200}
                                style={{ color: 'red' }}
                                repeat={Infinity}
                            /></h1>
                        <p className='text-start z-10 text-xl'>Browse cars and book your favorite ride hassle-free.</p>
                        <div className="navbar-end flex lg:justify-start z-10 cursor-pointer text-white">
                            <Link className="  bg-red-700 border-none py-3 px-8 rounded-sm hover:bg-red-800 hover:shadow-xl transition duration-300">Browse cars</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper></div>
        
    );
};

export default Slider;
