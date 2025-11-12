import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div
            className='relative bg-cover bg-center w-full bg-gradient-to-r from-black/80 via-black/20 to-transparent'
            style={{ backgroundImage: `url('https://i.ibb.co/jkY9jcnC/maxresdefault.jpg')` }}
        >
            {/* overlay */}
            <div className='absolute inset-0 bg-[#000303da]'></div>

            <div className='relative z-10 mx-auto max-w-7xl'>
                <footer className="footer footer-horizontal footer-center lg:h-[300px] text-primary-content p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between">
                    
                    {/* Logo + description */}
                    <aside
                        className='text-start flex flex-col items-start'
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <img src={logo} width={'100px'} alt="Logo" />
                        <p className="font-bold text-gray-200 mt-2">
                            <span className='text-red-500 font-extrabold text-xl'>Turbo Track</span>
                            <br />
                            An online platform where you can easily find, book, or list your favorite cars for sale.
                        </p>
                    </aside>

                    {/* Quick links + social */}
                    <nav
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3 className="text-lg font-semibold lg:mb-3 text-start text-gray-200">Quick Links</h3>
                        <div className="flex flex-col gap-3 text-start">
                            <a href="/" className="text-gray-200 hover:text-white hover:underline">Terms & Conditions</a>
                            <div>
                                <h4 className="text-sm border-b-2 border-gray-300 font-medium text-gray-300 mb-2">Follow Us</h4>
                                <div className="flex gap-3">
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white">Facebook</a>
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white">Twitter</a>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Contact info */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <h3 className="text-lg font-semibold mb-3 text-gray-200">Contact Info</h3>
                        <ul className="space-y-2 text-gray-200">
                            <li>123/A, Banani, Dhaka, Bangladesh</li>
                            <li><a href="tel:+8801711123456" className="hover:underline">+880 1711-123456</a></li>
                            <li><a href="mailto:support@turbotrack.com" className="hover:underline">support@turbotrack.com</a></li>
                            <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
                        </ul>
                    </div>
                </footer>

                {/* Copyright */}
                <p
                    className='text-center p-4 border-t-2 border-gray-400 text-gray-200'
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    Copyright © {new Date().getFullYear()} - All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
