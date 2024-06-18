import React, { useEffect, useState } from 'react'
import MobileCards from '../Components/MobileCards';

const PopularPhones = () => {
    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-mobiles").then(res => res.json()).then(data => setMobiles(data.slice(0,6)))
    },[])
  return (
    <div>
        <MobileCards mobiles={mobiles} headline="Best Seller Devices"/>
    </div>
  )
}

export default PopularPhones