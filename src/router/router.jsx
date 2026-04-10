import React from 'react';
import { createBrowserRouter } from 'react-router';
import Rootlayout from '../layout/Rootlayout';
import Home from '../pages/home/Home';
import Apps from '../pages/apps/Apps';
import InstallApp from '../pages/installApp/InstallApp';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import AppDetiles from '../appdatiles/AppDetiles';
import Dashboard from '../pages/dashboard/Dashboard';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Rootlayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/app',
                element: <Apps />
            },
            {
                path: '/app/:id',
                element: <AppDetiles />
            },
            {
                path: '/install',
                element: <InstallApp />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
        ],
        errorElement: <NotFoundPage />
    }

])

export default router;