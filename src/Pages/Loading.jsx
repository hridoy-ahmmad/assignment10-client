import Lottie from 'lottie-react';
import React from 'react';
import Animation from '../animation/Loading.json'

const Loading = () => {
    return <div className='min-h-screen flex justify-center items-center text-black'>
        {/* <span className="loading loading-ring loading-xl size-20">Loading</span> */}
        <Lottie animationData={Animation} loop={true}></Lottie>
    </div>
};

export default Loading;