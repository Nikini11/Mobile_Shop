import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

  const handleLogOut = () => {
    logOut().then(() => {
        // Signed out 
        alert('Log out successful!')
        navigate(from, {replace:true})
      }).catch((error) => {
        
      });
  }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-700 px-4 py-2 text-white rounded' 
        onClick={handleLogOut}>Logout</button>
    </div>
  )
}


export default LogOut;