import React, { use, useEffect, useState } from 'react';
// const appPromise = fetch("/data.json").then((res) => res.json());

const TrandingApp = () => {
    // const apps =use(appPromise)
    // console.log(apps)
    const [apps, setApps] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            // console.log(data)
            setApps(data)
        }
        fetchData()
    }, [])
    console.log(apps)
    return (

        <div className='flex flex-col justify-center items-center container mx-auto mt-10'>
            <h1 className='text-2xl font-bold'>Trusted by Millions, Built for You</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
        </div>

    );
};

export default TrandingApp;