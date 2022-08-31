import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
    </Routes>
    </>
  )
}

export default MainRoute