import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';
import { FaCartShopping } from 'react-icons/fa6';

const SingleMobile = () => {
  const { id } = useParams(); // Get the _id from the URL params
  const [mobile, setMobile] = useState(null); // State to hold the mobile details
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    const fetchMobile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/mobile/${id}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMobile(data); // Update state with fetched mobile data
      } catch (error) {
        console.error('Error fetching mobile:', error);
      }
    };

    fetchMobile(); // Fetch mobile details on component mount
  }, [id]); // Dependency array ensures fetchMobile runs when id changes

  if (!mobile) {
    return <div>Loading...</div>; // Placeholder while data is being fetched
  }
  const descriptionPoints = mobile.Description.split('\n');

  return (
    <div className='mt-28 px-4 lg:px-24 flex flex-col lg:flex-row' style={{ background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(207,241,240,1) 0%, rgba(80,147,138,1) 100%)', minHeight: '100vh', padding: '2rem' }}>
      <div className='flex-1'>
        <img src={mobile.imgURL} alt={mobile.model} className='h-96 mb-4 rounded' />
        <h2 className='text-2xl font-bold mb-4'>{mobile.model}</h2>
        <p className='text-xl mb-2'>Price: Rs. {mobile.price}</p>
        <p className='text-xl mb-2'>Brand: {mobile.brand}</p>
        <p className='text-xl mb-2'>In-stock: {mobile.stock}</p>
        <button 
          onClick={() => addToCart(mobile)} 
          className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 flex items-center'
        >
          <FaCartShopping className='mr-2' />
          Add to Cart
        </button>
      </div>
      <div className='flex-1 lg:ml-8 mt-8 lg:mt-0'>
        <h3 className='text-2xl font-bold mb-4'>Key features</h3>
        <ul className='list-disc list-inside'>
          {descriptionPoints.map((point, index) => (
            <li key={index} className='mb-2 text-lg'>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleMobile;

// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// const SingleMobile = () => {
//     const {_id,model,imgURL} = useLoaderData();
//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//         <img src={imgURL} alt='' className='h-96'/>
//         <h2>{model}</h2>
//     </div>
//   )
// }

// export default SingleMobile