"use client"
type TAppContext = {
    installedApps: IApp[];
    setInstalledApps: React.Dispatch<React.SetStateAction<IApp[]>>;
};
import { IApp } from '@/types/app.type';
import React, { createContext, ReactNode, useState, } from 'react'
export const Appcontext = createContext<TAppContext>({
    installedApps: [],
    setInstalledApps: () => { }
})
const AppProvider = ({ children }: { children: ReactNode }) => {
    const [installedApps, setInstalledApps] = useState<IApp[]>([])
    const shareData = {
        installedApps,
        setInstalledApps

    }
    return (
        <Appcontext.Provider value={shareData}>
            {children}
        </Appcontext.Provider>
    )
}

export default AppProvider