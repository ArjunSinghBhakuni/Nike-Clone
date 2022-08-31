import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './authentication/Login'
import Signup from './authentication/Signup'
import Cart from './Cart/Cart'
import Homepage from './HomePage/Homepage'
import Navbar from './navbar/Navbar'
import Kids from './Products/Kids'
import Men from './Products/Men'
import Product from './Products/Product'
import Women from './Products/Women'

const MainRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Homepage/>}  />
      <Route path='/products' element={<Product/>} />
      <Route path='/products/men' element={<Men/>} />
      <Route path='/products/women' element={<Women/>} />
      <Route path='/products/kids' element={<Kids/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      
    </Routes>
    </>
  )
}

export default MainRoute