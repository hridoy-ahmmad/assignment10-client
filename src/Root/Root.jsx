import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;