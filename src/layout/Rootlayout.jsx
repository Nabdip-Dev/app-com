import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/share/Navbar';
import { ToastContainer } from 'react-toastify';

const Rootlayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />

            <div>
                <h1>Footer</h1>
            </div>
              <ToastContainer />
        </div>
    );
};

export default Rootlayout;