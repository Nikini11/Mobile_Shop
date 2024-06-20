import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';

const MobileCards = ({headline, mobiles}) => {
  return (
    <div className='card my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
     
        {
            mobiles.map(mobile => <SwiperSlide key={mobile._id}>
              <Link to={`/mobile/${mobile._id}`}>
                <div className='relative p-4 border rounded-lg shadow-lg h-full flex flex-col items-center'>
                  <div className='w-full h-48 flex items-center justify-center'>
                    <img src={mobile.imgURL} alt="" className='object-cover h-full' />
                  </div>
                  <div className='mt-4 text-center'>
                    <h3 className='text-lg font-semibold'>{mobile.model}</h3>
                    <p className='text-gray-500'>{mobile.brand}</p>
                    <p className='text-blue-700 font-bold'>{mobile.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>)
        } 
      </Swiper>
    </div>
  )
}

export default MobileCards