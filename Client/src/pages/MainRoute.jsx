import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/Route/PrivateRoute'
 
import Login from './authentication/Login'
import Signup from './authentication/Signup'
import Cart from './Cart/Cart'
import Checkout from './checkout/Checkout'
import { Description } from './description/Description'
import { Home } from './home/Home'
 
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
      <Route  path='/' element={<Home/>}  />
      <Route path='/products' element={<Product/>} />
      <Route path='/products/men' element={<Men/>} />
      <Route path='/products/women' element={<Women/>} />
      <Route path='/products/kids' element={<Kids/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/products/:id' element={<Description/>} />
      <Route path='/cart' element={
       <PrivateRoute>
        
      <Cart/>
       </PrivateRoute>
      } />
      <Route path='/checkout' element={
      <PrivateRoute>

        <Checkout/>
      </PrivateRoute>
      } />
      
    </Routes>
    </>
  )
}

export default MainRoute