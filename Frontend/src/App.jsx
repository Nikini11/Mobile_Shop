import React, { useState } from 'react';
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar'
import MyFooter from './Components/MyFooter';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <MyFooter/>
    </>
  )
}

export default App
