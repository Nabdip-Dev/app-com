import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/share/Navbar';

const Rootlayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />

            <div>
                <h1>Footer</h1>
            </div>
        </div>
    );
};

export default Rootlayout;