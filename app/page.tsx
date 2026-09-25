
import Banner from '@/components/homepage/Banner';
import TrendingApps from '@/components/homepage/TrendingApps';
import React from 'react';

const page = () => {
  return (
    <div className='text-center'>
      <Banner />
      <TrendingApps/>
    </div>
  );
};

export default page;