import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Shop from './Pages/Shop' 
import Cart from './Pages/Cart'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category="men's clothing"/>}/>
        <Route path='/women' element={<ShopCategory category="women's clothing"/>}/>
        <Route path='/jewelery' element={<ShopCategory category='jewelery'/>}/>
        <Route path='/electronics' element={<ShopCategory category="electronics"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
