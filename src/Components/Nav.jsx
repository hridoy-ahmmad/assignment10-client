import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'

const Nav = () => {

    const navItem = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    `block px-4 py-2 hover:text-red-500 hover:bg-transparent ${isActive ? "text-red-500 font-semibold" : ""}`
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/addCar'
                className={({ isActive }) =>
                    `block px-4 py-2 hover:text-red-500 hover:bg-transparent ${isActive ? "text-red-500 font-semibold" : ""}`
                }
            >
                Add Car
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/myListings'
                className={({ isActive }) =>
                    `block px-4 py-2 hover:text-red-500 hover:bg-transparent ${isActive ? "text-red-500 font-semibold" : ""}`
                }
            >
                My Listings
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/myBookings'
                className={({ isActive }) =>
                    `block px-4 py-2 hover:text-red-500 hover:bg-transparent ${isActive ? "text-red-500 font-semibold" : ""}`
                }
            >
                My Bookings
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/browseCars'
                className={({ isActive }) =>
                    `block px-4 py-2 hover:text-red-500 hover:bg-transparent ${isActive ? "text-red-500 font-semibold" : ""}`
                }
            >
                Browse Cars
            </NavLink>
        </li>
    </>

    return (
        <div className=' sticky top-0'>
            <div className="navbar  mx-auto max-w-[1140px] flex justify-center items-center p-4">
                <div className="navbar-start bg-transparent">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content  z-1 mt-3 w-52 p-2 shadow-2xl ">
                            {
                                navItem
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className='flex justify-center items-center'>
                        <img src={logo} width={'100px'} className='rounded-bl-2xl hidden lg:block md:block' alt="" />
                        <a className=" text-xl text-red-500 font-extrabold ml-2">TurboTrack</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <div className="navbar-end cursor-pointer text-white">
                    <a className=" bg-[#E83E3F] border-none py-3 px-8 rounded-lg hover:bg-[#f93E3F] transition-colors duration-100">login/SIgnup</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;