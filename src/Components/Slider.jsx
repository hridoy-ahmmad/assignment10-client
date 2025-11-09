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
        <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='relative'
                    style={
                        {
                            backgroundImage: `url(${car1})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: '100%',
                            height: '500px',
                        }
                    }>
                    <div className='absolute inset-0 bg-black opacity-50'></div>


                    <div className='mx-auto z-10 max-w-[1140px] h-full flex flex-col justify-center gap-10 p-4'>
                        <h1 className='text-white z-10 text-4xl font-bold text-start'> <span className=''>Discover</span>
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
                            <Link className=" bg-[#E83E3F] border-none py-3 px-8 rounded-lg hover:bg-[#f93E3F] transition-colors duration-100">Browse cars</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'
                    style={
                        {
                            backgroundImage: `url(${car1})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: '100%',
                            height: '500px',
                        }
                    }>
                    <div className='absolute inset-0 bg-black opacity-50'></div>


                    <div className='mx-auto z-10 max-w-[1140px] h-full flex flex-col justify-center gap-8 p-4'>
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
                            <Link className=" bg-[#E83E3F] border-none py-3 px-8 rounded-lg hover:bg-[#f93E3F] transition-colors duration-100">Make your List</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'
                    style={
                        {
                            backgroundImage: `url(${car1})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: '100%',
                            height: '500px',
                        }
                    }>
                    <div className='absolute inset-0 bg-black opacity-50'></div>


                    <div className='mx-auto z-10 max-w-[1140px] h-full flex flex-col justify-center gap-8 p-4'>
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
                            <Link className=" bg-[#E83E3F] border-none py-3 px-8 rounded-lg hover:bg-[#f93E3F] transition-colors duration-100">Browse cars</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
