import React, { useEffect } from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { FaHandHoldingHand } from 'react-icons/fa6';
import { MdBookmarkAdded, MdSupportAgent } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChoose = () => {

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="bg-red-700 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-red-100 sm:mt-4">
            Discover the benefits of renting with our trusted service.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">

          {/* Card 1 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-3xl text-red-600 mx-auto">
              <MdBookmarkAdded />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-red-600">Easy Booking</h3>
              <p className="mt-2 text-gray-600">
                Our streamlined, user-friendly platform lets you secure your rental in just a few clicks, making the process fast and hassle-free.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            data-aos="fade-left"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-3xl text-red-600 mx-auto">
              <BiDollarCircle />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-red-600">Affordable Rates</h3>
              <p className="mt-2 text-gray-600">
                We offer competitive pricing and transparent deals with no hidden fees, ensuring you get the best value for your money every time.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-3xl text-red-600 mx-auto">
              <FaHandHoldingHand />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-red-600">Trusted Providers</h3>
              <p className="mt-2 text-gray-600">
                We partner exclusively with verified, top-rated rental companies to guarantee high-quality vehicles and reliable service for your peace of mind.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            data-aos="fade-left"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-3xl text-red-600 mx-auto">
              <MdSupportAgent />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-red-600">24/7 Support</h3>
              <p className="mt-2 text-gray-600">
                Our dedicated customer service team is available around the clock to assist you with any questions or issues during your rental period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
