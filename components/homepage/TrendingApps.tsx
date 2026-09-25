import { IApp } from '@/types/app.type';
import React from 'react';
import AppCart from '../shared/AppCart';
import { getAllApps } from '@/lib/app';

const TrendingApps = async () => {
  const data = await getAllApps()
  
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mt-5">Trending Apps</h2>

        <p className="mt-2 text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* data display cart */}
      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {

          data.slice(0, 8).map((app: IApp, ind: number) => {
            return <div key={ind}>

              <AppCart app={app}></AppCart>
            </div>


          })
        }

      </div>
    </div>
  );
};

export default TrendingApps;