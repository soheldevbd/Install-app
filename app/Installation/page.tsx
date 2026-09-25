"use client"
import AppCart from '@/components/shared/AppCart'
import { Appcontext } from '@/context/AppProvider'
import { IApp } from '@/types/app.type'
import Link from 'next/link'
import React, { useContext } from 'react'

const page = () => {
  const { installedApps } = useContext(Appcontext)
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mt-5">All Trending Apps</h2>

        <p className="mt-2 text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {
        installedApps.length > 0 ? (
          <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {

              installedApps.map((app: IApp, ind: number) => {
                return <div key={ind}>

                  <AppCart app={app}></AppCart>
                </div>


              })
            }

          </div>
        ) : (
          <p className=' text-center'>Not app installedApps</p>

        )
      }



    </div>



  )
}

export default page