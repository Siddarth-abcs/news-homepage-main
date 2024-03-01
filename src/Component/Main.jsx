import React, { useState } from 'react'
import desktopimg from '../../assets/images/image-web-3-desktop.jpg'
import mobileimg from '../../assets/images/image-web-3-mobile.jpg'

import retro from '../../assets/images/image-retro-pcs.jpg'
import Laptop from '../../assets/images/image-top-laptops.jpg'
import Gaming from '../../assets/images/image-gaming-growth.jpg'



export const Main = () => {


  return (
    <div className='w-5/6 m-auto md:grid md:grid-rows-2 grid-cols-3 gap-4 sm:flex sm:flex-col'>


      {/* part1 img */}
      <div className='bg-yellow-600 h-full col-span-2 row-span-2'>
        <img src={mobileimg} alt="" className='h-full md:hidden' />
        <img src={desktopimg} alt="" className='h-full hidden md:block' />
      </div>


      {/* part2 col text */}
      <div className='bg-veryDarkBlue text-white h-full row-span-3'>

      <div className='my-10'>
      <h1 className='text-softorange text-5xl font-bold w-5/6 m-auto'>New</h1>
      {/* col 1 */}
        <div className='w-5/6 m-auto mt-4'>
          <h2 className='text-2xl font-medium'>Hydrogen VS Electric Cars</h2>
          <p className='py-1'>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr className='my-2' />
        </div>
        {/* col 2 */}
        <div className='w-5/6 m-auto'>
          <h2 className='text-2xl font-medium'>The Downsides of Al Artistry </h2>
          <p className='py-1'>What are the possible adverse effects of on-demand Al image generation?</p>
          <hr className='my-2' />
        </div>
        {/* col 3 */}
        <div className='w-5/6 m-auto'>
          <h2 className='text-2xl font-medium'>Is VC Funding Drying Up?</h2>
          <p className='py-1'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>

      </div>

      {/* part3 tow box with button  */}
      <div className='h-full'>
      <div className='mr-4'>
      <h1 className='text-6xl font-medium'>
        The Bright Future of Web 3.0?
        </h1>
      </div>
      </div>
      <div className='h-full'>
        <p className='text-base my-2'>
        We dive into the next evolution of the web that 
        claims to put the power of the platforms 
        back into the hands of the people. But 
        is it really fulfilling its promise?
        </p>
      <a class="inline-block border bg-Softred px-12 py-3 text-sm font-medium text-white tracking-widest hover:bg-veryDarkBlue my-3" href="#">
      READ MORE
      </a>
      </div>

      {/* bottom three box */}
      <div className='h-[160px] grid grid-rows-2 grid-cols-2 mt-6'>

      <img src={retro} alt="" className='h-[160px] row-span-3' />
      <div className='h-[160px] my-4'>
      <h1 className='text-2xl font-bold my-1'>01</h1>
      <h2 className='text-1xl font-bold'>Reviving Retro PCs</h2>
      <p className='my-1'>
      What happens when old PCS are given modern upgrades?
      </p>
      </div>
      </div>
      
      <div className='h-[160px] grid grid-rows-2 grid-cols-2 mt-6'>

      <img src={Laptop} alt="" className='h-[160px] row-span-3' />
      <div className='h-[160px] my-4'>
      <h1 className='text-2xl font-bold my-1'>02</h1>
      <h2 className='text-1xl font-bold'>Top 10 Laptops 2022</h2>
      <p className='my-1'>
      Our best picks for various needs and budgets.
      </p>
      </div>
      </div>

      <div className='h-[160px] grid grid-rows-2 grid-cols-2 mt-6'>

      <img src={Gaming} alt="" className='h-[160px] row-span-3' />
      <div className='h-[160px] my-4'>
      <h1 className='text-2xl font-bold my-1'>03</h1>
      <h2 className='text-1xl font-bold'>The Growth of Gaming</h2>
      <p className='my-1'>
      How the pandemic has sparked
      fresh opportunities.
      </p>
      </div>
      </div>
    </div>
  )
}
