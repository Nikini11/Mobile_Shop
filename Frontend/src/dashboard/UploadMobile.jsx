import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadMobile = () => {
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
  const handleMobileSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const model = form.model.value;
    const brand = form.brand.value;
    const imgURL = form.imgURL.value;
    const specifications = form.specifications.value;
    const Description = form.Description.value;
    const colors = form.colors.value;
    const stock = form.stock.value;
    const price = form.price.value;

    const mobileObj = {
      model, brand, imgURL, specifications, Description, price, colors, stock
    }

    fetch("http://localhost:5000/upload-mobile", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(mobileObj)
    }).then(res => res.json()).then(data => {
      alert("Mobile uploaded successfully!")
      form.reset();
    }).catch(error => {
      console.error('Error uploading mobile:', error);
      alert("Failed to upload mobile. Please try again.");
    });
  }

  return (
    <div className='mt-0.25 px-4 lg:px-24' style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(207,241,240,1) 0%, rgba(80,147,138,1) 100%)', minHeight: '100vh', padding: '2rem' }}>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Mobile</h2>
        <form onSubmit={handleMobileSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="model" value="Mobile Model" />
            </div>
            <TextInput id="model" name='model' type="text" placeholder="Mobile Model" required />
          </div>
          
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Mobile Brand" />
            </div>
            <select id='inputState' name='brand' className='w-full rounded' 
            value={selectedBrand} onChange={handleChangeSelectedBrand}>
              {
                mobileBrands.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </select>
          </div>
          
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="imgURL" value="Mobile Image URL" />
            </div>
            <TextInput id="imgURL" name='imgURL' type="text" placeholder="Mobile Image URL" required />
          </div>

          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="specifications" value="Specifications" />
            </div>
            <Textarea id="specifications" name='specifications' placeholder="RAM & Storage" required rows={2} />
          </div>
          
          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="Description" value="Description" />
            </div>
            <Textarea id="Description" name='Description' placeholder="Key features" required rows={8} />
          </div>

          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="colors" value="Colors" />
            </div>
            <TextInput id="colors" name='colors' type="text" placeholder="Available colors" required />
          </div>

          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="stock" value="Stock" />
            </div>
            <TextInput id="stock" name='stock' type="number" placeholder="Quantity" required />
          </div>

          <div className='lg:w-full'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput id="price" name='price' type="number" placeholder="Rs." required />
          </div>

          <Button type="submit">Upload Mobile</Button>
      </form>
    </div>
  )
}

export default UploadMobile