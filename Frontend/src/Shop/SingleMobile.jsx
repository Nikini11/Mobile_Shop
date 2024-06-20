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

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={mobile.imgURL} alt={mobile.model} className='h-96' />
      <h2>{mobile.model}</h2>
      <p>{mobile.description}</p>
      <p>Brand: {mobile.brand}</p>
      <p>Price: ${mobile.price}</p>
      {/* Add more details as needed */}
      <button 
        onClick={() => addToCart(mobile)} 
        className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 flex items-center'
      >
        <FaCartShopping className='mr-2' />
        Add to Cart
      </button>
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