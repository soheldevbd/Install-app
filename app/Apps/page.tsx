import AppCart from '@/components/shared/AppCart';
import { getAllApps } from '@/lib/app';
import { IApp } from '@/types/app.type';
import React from 'react';

const page = async () => {
  const data = await getAllApps()
  console.log(data)
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mt-5">All Trending Apps</h2>

        <p className="mt-2 text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>




      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {

          data.map((app: IApp, ind: number) => {
            return <div key={ind}>

              <AppCart app={app}></AppCart>
            </div>


          })
        }

      </div>
    </div>
  );
};

export default page;