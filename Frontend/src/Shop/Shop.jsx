import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card } from "flowbite-react";

const Shop = () => {
  const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-mobiles").then(res => res.json()).then(data => setMobiles(data))
    },[])
  return (
    <div className='mt-28 px-4 lg:px-24' style={{ background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(207,241,240,1) 0%, rgba(80,147,138,1) 100%)', minHeight: '100vh', padding: '2rem' }}>
      <h2 className='text-5xl font-bold text-center'>All Mobiles are Here!</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          mobiles.map(mobile => <Card
          >
            <img src={mobile.imgURL} alt='' className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {mobile.model}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {mobile.price}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              In stock : {mobile.stock}
            </p>
            <Link to={`/mobile/${mobile._id}`} className='inline-block mt-4'>
              <button className='bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 
              transition-colors duration-300 ease-in-out'>View</button>
            </Link>
            
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop

