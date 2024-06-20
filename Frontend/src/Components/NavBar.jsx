import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark, FaCartShopping } from "react-icons/fa6";
import { AuthContext } from '../Contexts/AuthProvider';
import { CartContext } from '../Contexts/CartContext';
import logo from '../assets/Sonorus.JPG';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    const [isSticky, setIsSticky]=useState(false);

    const {user} = useContext(AuthContext)
    const { totalQuantity } = useContext(CartContext);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    //navigation items
    const navItems = [
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Shop", path: "/shop"},
        {link: "Sell Your Mobile", path: "/sign-up"},
        {link: "Blog", path: "/blog"},
    ]

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/* logo */}
                <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><img src={logo} alt='logo' className='h-10'/>Sonorus</Link>

                {/* nav items for large screens */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path} 
                        className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                    }
                </ul>

                {/* Cart icon for large screens */}
                <div className='hidden lg:flex items-center space-x-6'>
                    <Link to="/cart" className='flex items-center'>
                    <FaCartShopping className='w-5 h-5 text-black mr-1' />
                    <span className='text-black'>{totalQuantity}</span>
                    </Link>
                </div>

                {/* menu button for small screens */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : 
                            <FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>
            </div>

            {/* nav items for small screens */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link, path}) => <Link key={path} to={path} 
                    className='block text-base text-white uppercase cursor-pointer'>{link}</Link>)
                }
                {/* Cart icon for small screens */}
                <Link to="/cart" className='flex items-center'>
                    <FaCartShopping className='w-5 h-5 text-white mr-1' />
                    <span className='text-white'>{totalQuantity}</span>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default NavBar