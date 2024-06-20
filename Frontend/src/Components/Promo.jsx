import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Prom from '../assets/Promo.JPG'

const Promo = () => {
  const [receiptNumber, setReceiptNumber] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const generatePromoCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPromoCode(code);
  };

  const handleGeneratePromo = () => {
    generatePromoCode();
  };

  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24' >
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
            </div>
            <div>
                <img src={Prom} alt="" className='rounded'/>
            </div>
        </div>
      <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='md:w-1/2'>
          <h2 className='text-4xl text-blue-700 font-bold mb-6 leading-snug'>Enter Receipt Number</h2>
          <input
            type="text"
            value={receiptNumber}
            onChange={(e) => setReceiptNumber(e.target.value)}
            className='px-4 py-2 border border-gray-300 rounded w-full md:w-auto mb-6'
          />
          <button
            onClick={handleGeneratePromo}
            className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'
          >
            Generate Promo Code
          </button>
          {promoCode && (
            <div className='mt-4'>
              <p className='text-lg font-semibold'>Your Promo Code:</p>
              <p className='text-xl font-bold text-blue-700'>{promoCode}</p>
            </div>
          )}
        </div>
      </div>
      {/* <div className='md:w-1/2'>
        <img src={Prom} alt="" className='rounded-lg max-w-full h-auto'/>
      </div> */}
    </div>
  );
};

export default Promo;
