import React, { useEffect, useState } from 'react';

const AppUse = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoding] = useState(true)
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            // console.log(data)
            setTimeout(() => {
                setApps(data)
                setLoding(false)
            }, 1000)
        }
        fetchData()
    }, [])
    console.log(apps)
    return {apps,loading};
};

export default AppUse;