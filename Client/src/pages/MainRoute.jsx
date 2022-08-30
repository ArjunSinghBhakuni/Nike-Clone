import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
      <Route path='/men' element={<Men/>} />
      <Route path='/women' element={<Women/>} />
      <Route path='/kids' element={<Kids/>} />
    </Routes>
    </>
  )
}

export default MainRoute