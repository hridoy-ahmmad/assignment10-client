import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const Registration = () => {
    const[show, setShow] = useState(false)

const handleShowPass = ()=>{
    setShow(!show)
}
const handleSubmit = (e) =>{
    e.preventDefault()
    const name = e.target.name.value
    const email =e.target.email.value
    const URL = e.target.photoURL.value
    const password = e.target.password.value
    console.log(name, email, URL, password);
    

}

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="w-full max-w-md p-6 space-y-4 md:space-y-6 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Create an Account
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            // RED VIBE: Focus/Ring color changed to red-600/red-500
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="Full Name"
                            
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            // RED VIBE: Focus/Ring color changed to red-600/red-500
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="name@company.com"
                            
                        />
                    </div>

                    {/* Photo URL Field */}
                    <div>
                        <label
                            htmlFor="photoURL"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Photo URL
                        </label>
                        <input
                            type="url"
                            name="photoURL"
                            id="photoURL"
                            // RED VIBE: Focus/Ring color changed to red-600/red-500
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="Paste your image link here"
                        />
                    </div>

                    {/* Password Field */}
                    <div className='relative'>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type= {show? 'text': "password"} 
                            name="password"
                            id="password"
                            placeholder="*******"
                            // RED VIBE: Focus/Ring color changed to red-600/red-500
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            
                        />
                        <p onClick={handleShowPass} className='text-red-600 absolute top-10.5 right-4 '>
                           {
                            show?<FaEye />:<FaEyeSlash />
                           }  
                        </p>
                    </div>

                    {/* Submit Button - Primary Red */}
                    <button
                        type="submit"
                        className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                        Create Account
                    </button>

                    {/* Link to Login Page - Red Accent */}
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                        Already have an account? 
                        <a
                            href="/login"
                            className="font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                            Login here
                        </a>
                    </p>
                </form>

                {/* Separator */}
                <div className="flex items-center">
                    <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
                    <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">OR</span>
                    <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
                </div>

                {/* Google Login Option */}
                <button
                    type="button"
                    className="w-full flex justify-center items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 gap-2.5"
                >
                    {/* Placeholder Google Icon */}
                    <FcGoogle size={'20px'}/>
                    <span>Sign up with Google</span>
                    
                </button>
            </div>
        </section>
    );
};

export default Registration;