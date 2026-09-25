'use client'
interface ButtunProps {
    app: IApp


}
import { Appcontext } from '@/context/AppProvider'
import { IApp } from '@/types/app.type'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

const AppInstall = ({ app }: ButtunProps) => {
    const { installedApps, setInstalledApps } = useContext(Appcontext)
    console.log(installedApps, setInstalledApps)
    const handleInstall = () => {
        console.log('clicke me')
        setInstalledApps([...installedApps, app])
        toast.success(`${app.title} App the succesfully!`)
    }
    return (
        <button onClick={() => { handleInstall() }}
            type="button"
            className="mt-4 rounded-md bg-emerald-500 px-5 py-2 text-sm font-semibold text-white cursor-pointer hover:bg-emerald-600"
        >
            Install Now ({app.size} MB)
        </button>

    )
}

export default AppInstall