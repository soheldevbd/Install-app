import Image from 'next/image';
import React from 'react';
import Banners from '@/assets/hero.png';
const Banner = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center pt-8 rounded-2xl bg-gray-100 gap-4 text-center">
        <h1 className="font-bold text-4xl">
          We Build <br />{' '}
          <span className=" text-purple-500"> Productive Apps</span>
        </h1>
        <p className=" max-w-175">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className=" flex gap-2">
          <button>Google Play</button>
          <button>App Store</button>
        </div>
        <Image
          src={Banners}
          alt="banner"
          width={100}
          height={100}
          className=" bg-center bg- cover w-187 h-auto"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
