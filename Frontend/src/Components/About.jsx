import React from 'react';
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa6';
import { Avatar } from "flowbite-react";

import proPic1 from '../assets/Profiles/proPic1.jpg';
import proPic2 from '../assets/Profiles/proPic2.jpg';
import proPic3 from '../assets/Profiles/proPic3.jpg';

const About = () => {
  return (
    <div className="about-container px-4 lg:px-24 my-20 max-w-7xl mx-auto">
      <section className="mission-section py-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700">
          At Sonorus, our mission is to provide our customers with the best mobile devices from top brands at unbeatable prices. We strive to make mobile technology accessible to everyone, enhancing everyday life with the latest innovations and exceptional service.
        </p>
      </section>

      <section className="vision-section py-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Vision</h2>
        <p className="text-lg text-gray-700">
          We envision a world where everyone has access to cutting-edge mobile technology that empowers them to achieve their goals and stay connected. We aim to be the go-to destination for mobile phones, accessories, and unparalleled customer support.
        </p>
      </section>

      <section className="values-section py-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Customer First: We prioritize our customers' needs and satisfaction in every decision we make.</li>
          <li>Integrity: We conduct our business with honesty and transparency.</li>
          <li>Innovation: We constantly seek out the latest in mobile technology to provide our customers with the best products.</li>
          <li>Quality: We ensure that every product we offer meets our high standards of quality and reliability.</li>
          <li>Community: We are committed to giving back to the community and making a positive impact.</li>
        </ul>
      </section>

      <section className="history-section py-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Our History</h2>
        <p className="text-lg text-gray-700">
          Founded in 2022, Sonorus began as a small local shop with a passion for mobile technology. Over the years, we have grown into a leading online retailer, serving customers across the country. Our journey has been driven by a commitment to excellence and a desire to bring the best mobile devices to our customers.
        </p>
      </section>

      <section className="team-section py-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Team</h2>
        <ul className="list-none text-lg text-gray-700">
          <li><strong>Founder & CEO         : </strong> Mr. Harry James Potter</li>
          <li><strong>Head of Operations    :</strong> Ms. Hermoine Jean Granger</li>
          <li><strong>Customer Support Lead :</strong> Mr. Ronald Billius Weasley</li>
          <li><strong>Technical Expert      :</strong> Mr. Neville Longbottom</li>
        </ul>
      </section>

      <section className="testimonials-section py-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Customer Feedbacks</h2>
        <div className="testimonials">
          <div className='space-y-6 py-9'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-2'>"Great selection of mobile phones with competitive prices. I appreciated the detailed specifications and user reviews, 
                                which helped me make an informed decision. My new phone arrived in perfect condition. Will shop again!"</p>

                            <Avatar alt='' img={proPic1} rounded className='w-10 mb-1'/>
                            <h5 className='text-lg font-medium'>Vincent Crabbe</h5>
                        </div>
          </div>
          <div className='space-y-6 py-9'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-2'>"Exceptional service! The search and filter options made it easy to compare different models. 
                                I found a great deal on a high-end phone. The checkout process was smooth, and the delivery was prompt. Very satisfied!"</p>

                            <Avatar alt='' img={proPic2} rounded className='w-10 mb-1'/>
                            <h5 className='text-lg font-medium'>Narcisia Malfoy</h5>
                        </div>
          </div>
          <div className='space-y-6 py-9'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-2'>"I was able to find a great phone within my budget thanks to the advanced filters and clear pricing. 
                                The ordering process was straightforward, and my phone was delivered in just two days. Very pleased with my purchase."</p>

                            <Avatar alt='' img={proPic3} rounded className='w-10 mb-1'/>
                            <h5 className='text-lg font-medium'>Bellatrix Lestrange</h5>
                        </div>
          </div>
          </div>
      </section>

      <section className="why-choose-us-section py-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Wide Selection: We offer a diverse range of mobile phones and accessories from leading brands.</li>
          <li>Competitive Prices: Our prices are unbeatable, ensuring you get the best value for your money.</li>
          <li>Expert Advice: Our knowledgeable staff is always ready to help you find the perfect device.</li>
          <li>Fast Shipping: We provide quick and reliable shipping options to get your new phone to you as soon as possible.</li>
          <li>Secure Shopping: Your privacy and security are our top priorities, with secure payment options and data protection.</li>
        </ul>
      </section>

      <section className="connect-with-us-section py-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Connect with Us</h2>
        <p className="text-lg text-gray-700">Stay connected with us on social media for the latest updates and promotions:</p>
        <ul className="list-none flex space-x-4 mt-4">
          <li><Link to="[Facebook Link]" className="text-blue-700 hover:text-blue-900">Facebook</Link></li>
          <li><Link to="[Twitter Link]" className="text-blue-700 hover:text-blue-900">Twitter</Link></li>
          <li><Link to="[Instagram Link]" className="text-blue-700 hover:text-blue-900">Instagram</Link></li>
          <li><Link to="[LinkedIn Link]" className="text-blue-700 hover:text-blue-900">LinkedIn</Link></li>
        </ul>
      </section>

      <section className="contact-us-section py-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700">Have questions or need assistance? Contact us at:</p>
        <ul className="list-none mt-4 text-lg text-gray-700">
          <li><strong>Email:</strong> sonorus.mobile@gmail.com</li>
          <li><strong>Phone:</strong> +94 11 229 2872</li>
          <li><strong>Address:</strong> No. 04, Privet Drive, Surrey</li>
        </ul>
      </section>
    </div>
  )
}

export default About;
