import React from 'react';

const Login = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">

            <div className="w-full max-w-md p-6 space-y-4 md:space-y-6 sm:p-8 bg-white rounded-xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">

                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Create Your Account
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="Full Name"
                            required
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="name@example.com"
                            required
                        />
                    </div>

                    {/* Photo URL Field */}
                    <div>
                        <label
                            htmlFor="photoURL"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Photo URL (Optional)
                        </label>
                        <input
                            type="url"
                            name="photoURL"
                            id="photoURL"
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
                            type={show ? 'text' : "password"}
                            name="password"
                            id="password"
                            placeholder="********"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            required
                        />
                        <span onClick={handleShowPass} className='text-gray-500 absolute inset-y-0 right-0 top-7 flex items-center pr-3 cursor-pointer'>
                            {
                                show ? <FaEye className='h-5 w-5 hover:text-red-600' /> : <FaEyeSlash className='h-5 w-5 hover:text-red-600' />
                            }
                        </span>

                    </div><p className='text-red-600'>{error}</p>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 transition duration-150"
                    >
                        Create Account
                    </button>

                    {/* Link to Login Page - Red Accent */}
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                        Already have an account?
                        <Link
                            href="/login"
                            className="font-medium text-red-600 hover:underline dark:text-red-500 ml-1"
                        >
                            Login here
                        </Link>
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
                    className="w-full flex justify-center items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 gap-2.5 shadow-sm transition duration-150"
                >
                    <FcGoogle size={'20px'} />
                    <span>Sign up with Google</span>
                </button>
            </div>

        </section>
    );
};

export default Login;