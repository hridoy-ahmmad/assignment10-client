import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    // console.log(user);

    const handleSignOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
        }).then((result) => {
            if (result.isConfirmed)
                logOut(auth)
                    .then(() => {
                        navigate('/')
                        {
                            Swal.fire({
                                title: "Logged Out!",
                                text: "Log Out Successfull.",
                                icon: "success"
                            });
                        }
                    });

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
        <div className='relative sticky top-0 z-10 h-[100px]  bg-gradient-to-r from-black/70 via-black/70 to-black/70 '>
            <div className="navbar mx-auto max-w-7xl flex justify-center items-center p-4 h-25">
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

                <div className="navbar-end cursor-pointer text-white flex gap-2">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navItem
                            }
                        </ul>

                    </div>

                    <div className=''>
                        {
                            user &&
                            <img
                                referrerPolicy='no-referrer'
                                onClick={() => setModal(!modal)}
                                className='rounded-full w-12 h-12 border-2' src={user.photoURL} alt="" />
                        }


                    </div>
                    {
                        user ?
                            '' : <Link to={'registration'} className="  bg-red-700 border-none py-3 px-2 rounded-sm hover:bg-red-800 hover:shadow-xl transition duration-300">login or Signup</Link>
                    }

                </div>
                <div className='absolute  lg:right-0 top-20'>
                    {modal && user &&
                        <div className="bg-gradient-to-r from-black/70  to-red-400 p-6 rounded-xl shadow-lg w-72 text-white flex flex-col items-center gap-4">
                            <h1 className="text-xl font-bold truncate text-center">{user.displayName}</h1>
                            <h2 className="text-sm font-medium text-red-100 truncate text-center">{user.email}</h2>

                            <Link
                                to="/"
                                onClick={handleSignOut}
                                className="w-full text-center bg-red-700 hover:bg-red-800 transition-colors duration-200 py-2 px-5 rounded-lg font-semibold shadow-md"
                            >
                                Log Out
                            </Link>

                            <button
                                onClick={() => setModal(false)}
                                className="w-full text-center bg-red-500 hover:bg-red-600 transition-colors duration-200 py-2 px-3 rounded-lg font-semibold"
                            >
                                Close
                            </button>
                        </div>

                    }
                </div>
            </div>

        </div>
    );
};

export default Nav;