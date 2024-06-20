import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

const Cart = () => {
  const { cart, calculateTotal, removeFromCart } = useContext(CartContext);

  return (
    <div className='mt-28 px-4 lg:px-24' style={{ background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(207,241,240,1) 0%, rgba(80,147,138,1) 100%)', minHeight: '100vh', padding: '2rem' }}>
      <h2 className='text-2xl font-bold mb-4'>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className='text-lg'>Your cart is empty</p>
      ) : (
        <>
          <ul className='space-y-4'>
            {cart.map((mobile, index) => (
              <li key={index} className='flex items-center bg-white shadow-md rounded-lg p-4'>
                <img src={mobile.imgURL} alt={mobile.model} className='h-24 w-24 object-cover rounded-lg' />
                <div className='ml-4 flex-1'>
                  <h3 className='text-xl font-semibold'>{mobile.model}</h3>
                  <p className='text-gray-600'>Brand: {mobile.brand}</p>
                  <p className='text-gray-600'>Price: ${mobile.price}</p>
                  <p className='text-gray-600'>Quantity: {mobile.quantity}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(mobile._id)} 
                  className='bg-red-500 px-4 py-2 text-white font-medium hover:bg-red-700 transition-all ease-in duration-200 ml-auto'
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className='mt-6 p-4 bg-white shadow-md rounded-lg'>
            <h3 className='text-2xl font-bold'>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
