import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import {Link} from 'react-router-dom';

const ManageMobiles = () => {
  const [allMobiles, setAllMobiles] = useState([]);
  useEffect( () => {
    fetch("http://localhost:5000/all-mobiles").then(res => res.json()).then(data => setAllMobiles(data));
  }, [])

  //delete a mobile
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/mobile/${id}`, {method: "DELETE"}).then(res => res.json()).then(data => {
      alert('Item is deleted successfully')
      form.reset();
    })
  }
  return (
    <div className='mt-0.25 px-4 lg:px-24' style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(207,241,240,1) 0%, rgba(80,147,138,1) 100%)', minHeight: '100vh', padding: '2rem' }}>
      <h2 className='mb-8 text-3xl font-bold'>Inventory</h2>
      <Table striped className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Mobile Model</Table.HeadCell>
          <Table.HeadCell>Brand</Table.HeadCell>
          <Table.HeadCell>Specifications</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Stock</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allMobiles.map((mobile, index) => <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell>{mobile.model}</Table.Cell>
            <Table.Cell>{mobile.brand}</Table.Cell>
            <Table.Cell>{mobile.specifications}</Table.Cell>
            <Table.Cell>{mobile.description}</Table.Cell>
            <Table.Cell>{mobile.stock}</Table.Cell>
            <Table.Cell>{mobile.price}</Table.Cell>
            <Table.Cell>
              <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                    to={`/admin/dashboard/edit-mobiles/${mobile._id}`}>
                      Edit
              </Link>
              <button onClick={() => handleDelete(mobile._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>
          )
        }
      </Table> 
    </div>
  )
}

export default ManageMobiles