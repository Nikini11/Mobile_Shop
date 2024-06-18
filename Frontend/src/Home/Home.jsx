import React from 'react'
import Banner from '../Components/Banner'
import PopularPhones from './PopularPhones'
import FavMobile from './FavMobile'
import PromoBanner from './PromoBanner'
import SecondHand from './SecondHand'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Banner/>
      <PopularPhones/>
      <FavMobile/>
      <PromoBanner/>
      <SecondHand/>
      <Review/>
    </div>
  )
}

export default Home