import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {FaStar} from 'react-icons/fa6';
import { Avatar } from "flowbite-react";

import proPic1 from '../assets/Profiles/proPic1.jpg';
import proPic2 from '../assets/Profiles/proPic2.jpg';
import proPic3 from '../assets/Profiles/proPic3.jpg';
import proPic4 from '../assets/Profiles/proPic4.jpg';
import proPic5 from '../assets/Profiles/proPic5.jpg';
import proPic6 from '../assets/Profiles/proPic6.jpg';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 loading-snug'>Our Customers</h2>
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>"Great selection of mobile phones with competitive prices. I appreciated the detailed specifications and user reviews, 
                                which helped me make an informed decision. My new phone arrived in perfect condition. Will shop again!"</p>

                            <Avatar alt='' img={proPic1} rounded className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Vincent Crabbe</h5>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>"Exceptional service! The search and filter options made it easy to compare different models. 
                                I found a great deal on a high-end phone. The checkout process was smooth, and the delivery was prompt. Very satisfied!"</p>

                            <Avatar alt='' img={proPic2} rounded className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Narcisia Malfoy</h5>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>"I was able to find a great phone within my budget thanks to the advanced filters and clear pricing. 
                                The ordering process was straightforward, and my phone was delivered in just two days. Very pleased with my purchase."</p>

                            <Avatar alt='' img={proPic3} rounded className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Bellatrix Lestrange</h5>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>"Amazing deals and fantastic customer service! 
                                I had an issue with my payment, but it was resolved quickly through live chat. 
                                My phone arrived on time, and I'm extremely happy with it. Highly recommend this shop!"</p>

                            <Avatar alt='' img={proPic4} rounded className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Bill Weasley</h5>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>"I was able to find a great phone within my budget thanks to the advanced filters and clear pricing. 
                                The ordering process was straightforward, and my phone was delivered in just two days. Very pleased with my purchase."</p>

                            <Avatar alt='' img={proPic5} rounded className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Seamus Finnegan</h5>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>"Best online shopping experience for mobiles! The product descriptions are very detailed, and the user 
                                reviews are helpful. I received my phone the next day, and it works perfectly. Excellent service overall!"</p>

                            <Avatar alt='' img={proPic6} rounded className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Parvati Patil</h5>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Review