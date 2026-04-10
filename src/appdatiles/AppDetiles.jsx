import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import AppUse from '../hooks/AppUse';
import { RingLoader } from 'react-spinners';
import { InstallAppContext } from '../contact/InstallAppCoantext';
import { toast } from 'react-toastify';

const AppDetiles = () => {
    const { id } = useParams();
    const { apps, loading } = AppUse();
    const expectedApp = apps.find((app) => String(app.id) === id)


    const { installApp, setInstallApp } = useContext(InstallAppContext)

    if (loading) {
        return (
            <div className='flex justify-center items-center'><RingLoader /></div>
        )
    }
    const hendelInstallApp = () => {
        setInstallApp([...installApp, expectedApp])
        toast.success(`${expectedApp.title} is Installed !`)
    }
    console.log(installApp)

    return (
        <div className='flex mx-auto container justify-center items-center'>
            <div className='flex flex-col justify-center items-center bg-red-100 p-4 rounded-2xl space-y-2'>
                <img className='h-40 w-40' src={expectedApp?.image} alt="" />
                <h1 className='font-bold text-2xl'>{expectedApp?.title} </h1>
                <h3 className='font-semibold text-xl'>{expectedApp?.companyName}</h3>
                <button onClick={hendelInstallApp} className='btn bg-amber-400'>Install</button>
            </div>
        </div>
    );
};

export default AppDetiles;