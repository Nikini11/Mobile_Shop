import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const EditMobiles = () => {
  const {id} = useParams();
  const {model, brand, imgURL, description, price} = useLoaderData();
  
  const mobileBrands = [
    'Apple',
    'Samsung',
    'Xiomi',
    'Redmi',
    'Honor',
    'Vivo',
    'Oppo'
  ]

  const [selectedBrand, setSelectedBrand] = useState(mobileBrands[0]);

  const handleChangeSelectedBrand = (event) => {
    setSelectedBrand(event.target.value);
  }

  //handle Mobile Submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const model = form.model.value;
    const brand = form.brand.value;
    const imgURL = form.imgURL.value;
    const description = form.description.value;
    const price = form.price.value;

    const updatedMobileObj = {
      model, brand, imgURL, description, price
    }

    fetch(`http://localhost:5000/mobile/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedMobileObj)
    }).then(res => res.json()).then(data => {
      alert("Mobile is updated successfully!")
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Mobile Info</h2>
        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="model" value="Mobile Model" />
            </div>
            <TextInput id="model" name='model' type="text" placeholder="Mobile Model" defaultValue={model} required />
          </div>
          
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Mobile Brand" />
            </div>
            <select id='inputState' name='brand' className='w-full rounded' 
            value={selectedBrand} onChange={handleChangeSelectedBrand} defaultValue={brand}>
              {
                mobileBrands.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </select>
          </div>
          
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="imgURL" value="Mobile Image URL" />
            </div>
            <TextInput id="imgURL" name='imgURL' type="text" placeholder="Mobile Image URL" defaultValue={imgURL} required />
          </div>
          
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <Textarea id="description" placeholder="Mention about RAM, Storage, Battery health, Color & etc." defaultValue={description} required rows={6} />
          </div>

          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput id="price" name='price' type="text" placeholder="Rs." defaultValue={price} required />
          </div>

          <Button type="submit">Update Mobile</Button>
      </form>
    </div>
  )
}

export default EditMobiles