import React from 'react'
import { Link } from 'react-router-dom'
import Promo from '../assets/Promo.JPG'

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='md:w-2/3'> 
                <h2 className='text-6xl text-blue-700 font-bold mb-6 leading-snug'>Limited Time Offer!</h2>
                <h2 className='text-4xl text-blue-500 font-bold mb-6 leading-snug'>Xiaomi Mi 11 Lite 5G</h2>
                <p className='mb-10 text-lg md:w-full'>Experience next-level performance with the latest Xiaomi Mi 11 Lite 5G smartphone. </p>
                <ul className='pl-6 mb-6 space-y-2 text-lg'>
                  <li className='relative pl-6'><span className='absolute left-0 top-0 text-blue-700'>✔ </span>Dual speakers</li>
                  <li className='relative pl-6'><span className='absolute left-0 top-0 text-blue-700'>✔ </span>Side fingerprint sensor</li>
                  <li className='relative pl-6'><span className='absolute left-0 top-0 text-blue-700'>✔ </span>Multi-functional NFC</li>
                  <li className='relative pl-6'><span className='absolute left-0 top-0 text-blue-700'>✔ </span>LiquidCool technology</li>
                </ul>
                <h3 className='text-2xl font-bold mb-4'>Shop Now and Save!</h3>
                <Link to="/promo" className='mt-12 block'>
                <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo</button>
                </Link>
            </div>
            <div>
                <img src={Promo} alt="" className='rounded'/>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner