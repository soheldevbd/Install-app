import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className=" container mx-auto">
      <div className='flex justify-between items-center py-6'>
        <div className=" flex items-center gap-1 ">
          <Image src={Logo} alt="logo" width={50} height={50}></Image>
          <h1>HERO.IO</h1>
        </div>
        <ul className=" flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Apps">Apps</Link>
          </li>
          <li>
            <Link href="/Installation">Installation</Link>
          </li>
        </ul>
        <button>Contribute</button>
      </div>
    </div>
  );
};

export default Navbar;