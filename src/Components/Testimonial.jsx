import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoStarSharp } from 'react-icons/io5';

const Testimonial = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // animate once per scroll
    });
  }, []);

  return (
    <section className="bg-gradient-to-t from-white via-gray-100 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Hear directly from the people who've experienced our exceptional service.
          </p>
        </div>

        {/* Testimonials Grid Container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Testimonial Card 1 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://i.ibb.co.com/Y7NzH613/Outdoors-man-portrait-cropped.jpg"
                alt="Customer Avatar"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">Atish Dipankar</p>
                <p className="text-sm text-gray-500">Adventure Seeker</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "Absolutely seamless booking experience! The car was perfect for my road trip, and the support team was incredibly helpful when I had a question. Highly recommend!"
            </p>
            <div className="mt-4 flex justify-end text-yellow-500">
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            data-aos="zoom-in"
          >
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://i.ibb.co.com/HLnGb52q/istockphoto-1335941248-612x612.jpg"
                alt="Customer Avatar"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">John Mark</p>
                <p className="text-sm text-gray-500">Business Traveler</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "I frequently travel for business, and this service has consistently provided reliable and clean vehicles. The rates are competitive, and pickup is always a breeze."
            </p>
            <div className="mt-4 flex justify-end text-yellow-500">
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            data-aos="fade-left"
          >
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Customer Avatar"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">Emily White</p>
                <p className="text-sm text-gray-500">Family Vacationer</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "Booking for our family vacation was stress-free. We got a spacious SUV, and it made our trip so much more comfortable. Great communication throughout!"
            </p>
            <div className="mt-4 flex justify-end text-yellow-500">
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </div>
          </div>

          {/* Testimonial Card 4 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/77.jpg"
                alt="Customer Avatar"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">Michael Brown</p>
                <p className="text-sm text-gray-500">Urban Explorer</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "Needed a car last minute for a weekend getaway. The process was quick, the car was clean, and the price was fair. Will definitely use again!"
            </p>
            <div className="mt-4 flex justify-end text-yellow-500">
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </div>
          </div>

          {/* Testimonial Card 5 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            data-aos="zoom-in"
          >
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/women/90.jpg"
                alt="Customer Avatar"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">Sophia Lee</p>
                <p className="text-sm text-gray-500">Student</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "First time renting, and it was so easy! The instructions were clear, and I felt very supported. Great for students on a budget too."
            </p>
            <div className="mt-4 flex justify-end text-yellow-500">
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </div>
          </div>

          {/* Testimonial Card 6 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            data-aos="fade-left"
          >
            <div className="flex items-center mb-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/19.jpg"
                alt="Customer Avatar"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">David Kim</p>
                <p className="text-sm text-gray-500">Local Resident</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "Needed a temporary car while mine was in the shop. Your service was a lifesaver! Quick, efficient, and fairly priced. Will definitely use again if needed."
            </p>
            <div className="mt-4 flex justify-end text-yellow-500">
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;
