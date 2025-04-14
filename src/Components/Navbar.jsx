import React from 'react'
import './components.css'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/logo.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)


  return (
    <div className='navbar d-flex justify-content-around p-2 shadow-sm'>
        <div className="nav-logo d-flex align-items-center gap-2">
            <Link to='/' ><img src={logo} alt="" /></Link>
        </div>
        <ul className="nav-menu d-flex align-items-center list-unstyled gap-4 text-black fs-6">
            <li onClick={()=>{setMenu("shop")}} className='gap-0'><Link to='/' style={{ textDecoration:'none', color:'black' }}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}} className='gap-0'><Link to='/men' style={{ textDecoration:'none', color:'black' }}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}} className='gap-0'><Link to='/women' style={{ textDecoration:'none', color:'black' }}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("jewelery")}} className='gap-0'><Link to='/jewelery' style={{ textDecoration:'none', color:'black' }}>Jewelery</Link>{menu==="jewelrey"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("electronics")}} className='gap-0'><Link to='/electronics' style={{ textDecoration:'none', color:'black' }}>Electronics</Link>{menu==="electronics"?<hr/>:<></>}</li>      
        </ul>
        <div className="nav-login-cart d-flex align-items-center gap-5">
            <Link to='/login' style={{ textDecoration:'none', color:'black' }} ><button className='btn btn-lg btn-light border-secondary rounded-pill d-flex align-text-center align-middle py-2 px-4'><p className='p my-0 mx-2 small'>Login</p></button></Link>
            <Link to='/cart' style={{ textDecoration:'none', color:'black' }} ><i className="bi bi-cart3 position-relative h3">
                <span className="position-absolute top-20 start-80 translate-middle px-2 py-1 bg-warning rounded-circle text-center">
                    <span className="text-white fs-6 d-flex fst-normal"><p className='m-0 small'>{getTotalCartItems()}</p></span>
                </span>
            </i></Link>   
        </div>
    </div>
  )
}

export default Navbar