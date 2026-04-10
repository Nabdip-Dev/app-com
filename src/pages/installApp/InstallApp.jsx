import React, { useContext } from 'react';
import { InstallAppContext } from '../../contact/InstallAppCoantext';
import { toast } from 'react-toastify';



const InstallApp = () => {
    const { installApp, setInstallApp } = useContext(InstallAppContext)
    console.log(installApp, 'contaxt')
    const hendelUnStall = (app) => {
        const restApps = installApp.filter((iApp) => iApp.id != app.id);
        setInstallApp(restApps)
        toast.warning(`${app.title} is unstalled!`)
    }
    return (
        <div className='container mx-auto'>
            {installApp.length === 0 ? <h1 className='text-center font-bold text-4xl my-15 text-rose-600'>Not Installed app Found . Plase Install App!</h1> :
                installApp.map((app, index) => {
                    return <div key={index} className='flex items-center justify-between bg-amber-100 p-4 rounded-2xl mt-5'>
                        <div className='flex items-center gap-3'>
                            <img className='h-30 w-30' src={app.image} alt="" />
                            <h1 className='text-4xl'>{app.title}</h1>
                        </div>
                        <div>
                            <button onClick={() => hendelUnStall(app)} className='btn bg-red-700 text-white '>unstall</button>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default InstallApp;