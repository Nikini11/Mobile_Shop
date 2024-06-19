import React from 'react'
import BannerSlider from '../Home/BannerSlider'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Mobiles
                    <span className='text-blue-700'> for the Best Prices</span>
                </h2>
                <p className='md:w-4/5 text-justify'>Explore a wide range of smartphones from top brands at unbeatable prices, and enjoy a seamless, secure transaction experience. 
                    Join our community today and discover the easiest way to buy or sell your mobile phone!</p>
                <div>
                    <input type='search' name='search' id='search' placeholder='Search a mobile' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
        
            {/* right side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <BannerSlider/>
            </div>
        </div>
    </div>
  )
}

export default Banner
