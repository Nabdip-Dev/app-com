import React, { } from 'react';
import AppCard from '../ui/AppCard';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router';
import AppUse from '../../hooks/AppUse';
// const appPromise = fetch("/data.json").then((res) => res.json());

const TrandingApp = () => {
    const{apps, loading}= AppUse();
    return(
        <>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-center items-center container mx-auto mt-10'>
                    <h1 className='text-2xl font-bold'>Trusted by Millions, Built for You</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <h1 className='text-2xl font-bold my-4'>Total Apps: {apps.length}</h1>
                {loading == true ? <div className='flex justify-center items-center'><RingLoader /></div> : <div className='grid grid-cols-3 gap-8 container mx-auto justify-items-center'>
                    {
                        apps.slice(0, 9).map((app, index) => {
                            return (
                                <AppCard app={app} key={index} />
                            )
                        })
                    }
                </div>}
                <div className='flex justify-center items-center mt-8'>
                    <Link to={"./app"}>
                        <button className='btn bg-blue-700 text-white'>Show All</button>
                    </Link>
                </div>
            </div >
        </>


    );
};

export default TrandingApp;