import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleMobile = () => {
    const {_id,model,imgURL} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imgURL} alt='' className='h-96'/>
        <h2>{model}</h2>
    </div>
  )
}

export default SingleMobile