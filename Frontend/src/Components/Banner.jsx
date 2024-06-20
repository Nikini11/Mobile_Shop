import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BannerSlider from '../Home/BannerSlider'

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/all-mobiles?model=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching mobile data:', error);
    }
  };

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

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
                    <input type='search' 
                        name='search' id='search' 
                        placeholder='Search a mobile' 
                        className='py-2 px-2 rounded-s-sm outline-none' 
                        value={searchTerm} 
                        onChange={handleChangeSearchTerm}/>
                    <button onClick={handleSearch} className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
        
            {/* right side */}
            <div className='md:w-1/2 space-y-8 h-full'>
            {/* Display search results */}
            {searchResults.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {searchResults.map((mobile) => (
                    <div key={mobile._id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
                    <div className='w-full h-48'>
                      <img src={mobile.imgURL} alt={mobile.model} className='w-full h-full object-cover' />
                    </div>
                    <div className='p-6 flex flex-col'>
                        <h3 className='text-2xl font-bold mb-2 text-blue-700'>{mobile.model}</h3>
                        <p className='text-gray-700 flex-grow'>{mobile.description}</p>
                        <Link to={`/mobile/${mobile._id}`} className='text-blue-700 font-semibold hover:text-blue-900 mt-auto'>
                        View
                        </Link>
                    </div>
                    </div>
                ))}
                </div>
            ) : (
                <BannerSlider />
            )}
            </div>
        </div>
    </div>
  )
}

export default Banner
