import { useState } from "react";
import { InstallAppContext } from "./InstallAppCoantext";


const InstallAppProvider = ({children}) => {
    const [installApp, setInstallApp] = useState([])
    const data ={
        installApp,
        setInstallApp
    }
    return (<InstallAppContext.Provider value={data}>{children}</InstallAppContext.Provider>);
};

export default InstallAppProvider;