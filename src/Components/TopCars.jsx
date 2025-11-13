import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from 'react-icons/fa6';
import { IoCarSport } from 'react-icons/io5';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const TopCars = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const topCars = [
    {
      _id: 1,
      carName: "Tesla Model S",
      imageUrl: "https://i.ibb.co.com/60KPv1qs/OIP-16.webp",
      description: "The Tesla Model S is an all-electric luxury sedan with cutting-edge technology, fast acceleration, and a long-range battery.",
      rentPricePerDay: 180,
      rating: 5,
    },
    {
      _id: 2,
      carName: "BMW M5 Competition",
      imageUrl: "https://i.ibb.co.com/8nnhd3Z3/OIP-15.webp",
      description: "BMW M5 delivers thrilling performance, sporty design, and luxury comfort with a powerful V8 twin-turbo engine.",
      rentPricePerDay: 200,
      rating: 4.9,
    },
    {
      _id: 3,
      carName: "Audi A8",
      imageUrl: "https://i.ibb.co.com/9mmvhZJg/OIP-13.webp",
      description: "Audi A8 combines sophistication and innovation with a plush interior and an advanced driving experience.",
      rentPricePerDay: 170,
      rating: 4.8,
    },
    {
      _id: 4,
      carName: "Mercedes-Benz S-Class",
      imageUrl: "https://i.ibb.co.com/PvPXCNYG/4-2025-BMW-X5-Competition-front-view.jpg",
      description: "The Mercedes-Benz S-Class defines modern luxury with supreme comfort, technology, and craftsmanship.",
      rentPricePerDay: 210,
      rating: 4.9,
    },
    {
      _id: 5,
      carName: "Lamborghini Huracán EVO",
      imageUrl: "https://i.ibb.co.com/HfFtv3gM/OIP-12.webp",
      description: "Lamborghini Huracán EVO is the epitome of speed, power, and Italian design, built for the ultimate driving thrill.",
      rentPricePerDay: 400,
      rating: 5,
    },
    {
      _id: 6,
      carName: "Audi A10",
      imageUrl: "https://i.ibb.co.com/9mmvhZJg/OIP-13.webp",
      description: "Audi A10 combines sophistication and innovation with a plush interior and an advanced driving experience.",
      rentPricePerDay: 190,
      rating: 4.8,
    }
  ];

  return (

    <div className='bg-gradient-to-t from-white via-red-50 to-white'>
      <div className="max-w-7xl mx-auto px-6 py-16 ">
        <h2
          className="text-4xl flex gap-3 justify-center items-center font-extrabold text-center text-gray-900 mb-12"
          data-aos="fade-right"
        >
          <IoCarSport /> <span>Top Rated Cars</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {topCars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition  transform hover:-translate-y-2 border"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={car.imageUrl}
                  alt={car.carName}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
                <span className="absolute flex justify-center items-center gap-3 top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  <FaStar /> {car.rating}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <a
                  data-tooltip-id="tooltip-anchor-hide"
                  data-tooltip-content={`Per Day: $${car.rentPricePerDay}`}
                  data-tooltip-delay-hide={1000}
                  
                  
                >
                  <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {car.carName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {car.description}
                  </p>
                </div>
                </a>
                <Tooltip id="tooltip-anchor-hide" className='!bg-rose-600 !w-50 !text-center !text-2xl' />
                

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCars;
