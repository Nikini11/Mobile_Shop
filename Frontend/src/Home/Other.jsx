import React, { useEffect, useState } from 'react'
import MobileCards from '../Components/MobileCards';

const Other = () => {
    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-mobiles").then(res => res.json()).then(data => setMobiles(data.slice(0,4)))
    },[])
  return (
    <div>
        <MobileCards mobiles={mobiles} headline="Other Items"/>
    </div>
  )
}

export default Other