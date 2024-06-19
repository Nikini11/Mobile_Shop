import React from 'react'
import Fav from '../assets/Fav3.png'
import { Link } from 'react-router-dom'
import Genuine from '../assets/Fav/Genuine.png'
import pay from '../assets/Fav/pay.jpg'
import support from '../assets/Fav/support.jpg'

const FavMobile = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={Fav} alt="" className='rounded md:w-full'/>
        </div>
        <div className='md:w-1/2'>
            <h2 className='text-5xl font-bold my-5 md:w-full leading-snug'>Find Your Favourite 
            <span className='text-blue-700'> Mobile Here!</span></h2>
            <p className='mb-10 text-lg md:w-full '>Whether you're into photography, gaming, or need a reliable everyday device, 
            we've got the latest models from top brands. Explore a wide range of top brands and the latest models, complete with 
            detailed specifications, user reviews, and expert recommendations. </p>
            <div className='flex flex-col sm:flex-row justify-between gap-10 md:w-full my-10'>
            {/* include icons representing each */}
                <div>
                    <img src={Genuine} alt="Genuine Products" className='h-12 w-11 mb-2' />
                    <h3 className='text-xl font-bold'>Genuine Products</h3>
                    <p className='text-base'>With warranty</p>
                </div>
                <div>
                    <img src={pay} alt="Secure pay" className='h-12 w-18 mb-2' />
                    <h3 className='text-xl font-bold'>Secure Payment</h3>
                    <p className='text-base'>100% secure payment</p>
                </div>
                <div>
                    <img src={support} alt="Support" className='h-12 w-12 mb-2' />
                    <h3 className='text-xl font-bold'>24/7 Support</h3>
                    <p className='text-base'>Dedicated support</p>
                </div>
            </div>

            <Link to="/shop" className='mt-12 block'>
            <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button>
            </Link>
        </div>
    </div>
  )
}

export default FavMobile