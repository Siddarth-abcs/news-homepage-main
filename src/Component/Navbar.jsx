import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/icon-menu.svg';
import closemenu from '../../assets/images/icon-menu-close.svg';

export const Navbar = () => {
  const [btn, setBtn] = useState(false);

  return (
    <nav className='relative my-8'>
      <div className='flex h-[60px] w-5/6 mx-auto justify-between text-lg'>
        {/* logo */}
        <img src={logo} alt="logo" className='h-4/6 my-auto' />

        {/* btn */}
        <button onClick={() => setBtn(!btn)} className='md:hidden py-4 ml-[70%] z-10'>
          {!btn ? <img src={menu} alt="Menu" className='w-10 h-8' /> : <img src={closemenu} alt='closeMenu' className='w-10 h-8' />}
        </button>
        <div className='hidden md:block'>
        <ul className='flex'>
            <li className='py-4 px-4'>Home</li>
            <li className='py-4 px-4'>About</li>
            <li className='py-4 px-4'>New</li>
            <li className='py-4 px-4'>Popular</li>
            <li className='py-4 px-4'>Categories</li>
          </ul>
        </div>
      </div>


      {/* menu */}
      {btn && (
        <div className='text-lg h-screen mt-[-18%] bg-offWhite w-4/6 absolute right-0 shadow-lg'>
          <ul className='px-[10%] py-36'>
            <li className='py-4'>Home</li>
            <li className='py-4'>About</li>
            <li className='py-4'>New</li>
            <li className='py-4'>Popular</li>
            <li className='py-4'>Categories</li>
          </ul>
        </div>
      )}
    </nav>
  );
};
