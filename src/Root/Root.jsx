import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Nav></Nav>
            <div className='flex-1 '>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;