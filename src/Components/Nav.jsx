import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(user);

    const handleSignOut = () => {
        logOut(auth)
        .then(() => {
            navigate('/')
            alert('are you sure to log Out!')
            toast.success('Log Out Successfull')
        }).catch(() => {
            
        });

    }

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
        <div className=' sticky top-0 z-10  bg-gradient-to-r from-black/70 via-black/70 to-black/70 '>
            <div className="navbar mx-auto max-w-[1140px] flex justify-center items-center p-4 h-25">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-gradient-to-r from-black/80 via-black/80 to-transparent  z-1 mt-3 w-52 p-2 shadow-2xl text-white">
                            {
                                navItem
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className='flex justify-center items-center'>
                        <img src={logo} width={'56px'} className='rounded-bl-2xl hidden lg:block' alt="" />
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
                <div className="navbar-end cursor-pointer text-white flex gap-2">

                    {
                        user ? <img className='rounded-full w-12 h-12 border-2' src={user.photoURL} alt="" /> : ''
                    }


                    {
                        user ?
                            <Link
                                onClick={handleSignOut}
                                className=" bg-[#E83E3F] border-none py-3 px-8 rounded-lg hover:bg-[#f93E3F] transition-colors duration-100">Log Out</Link> : <Link to={'registration'} className=" bg-[#E83E3F] border-none py-3 px-8 rounded-lg hover:bg-[#f93E3F] transition-colors duration-100">login/SIgnup</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;