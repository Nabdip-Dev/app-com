import React, { } from 'react';
import { RingLoader } from 'react-spinners';
import AppUse from '../../hooks/AppUse';

const Apps = () => {
    const { apps, loading } = AppUse();
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-center items-center container mx-auto mt-10'>
                    <h1 className='text-2xl font-bold'>All Apps</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <h1 className='text-2xl font-bold my-4'>Total Apps: {apps.length}</h1>
                {loading == true ? <div className='flex justify-center items-center'><RingLoader /></div> : <div className='grid grid-cols-3 gap-8 container mx-auto justify-items-center'>
                    {
                        apps.map((app, index) => {
                            return (
                                < div key={index} className="card bg-base-100 w-96 shadow-sm" >
                                    <figure>
                                        <img className='h-50 w-50'
                                            src={app.image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{app.title}</h2>
                                        <p>{app.description}</p>
                                        <div className="card-actions justify-between">
                                            <button className="p-2 rounded-2xl cursor-pointer bg-amber-200">{app.downloads}</button>
                                            <button className="p-2 rounded-full cursor-pointer bg-emerald-300">{app.ratingAvg}</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>}

            </div >
        </>


    );
};

export default Apps;