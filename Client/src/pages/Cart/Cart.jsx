import { Box } from '@chakra-ui/react'

import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartShow from '../../components/cart/CartShow'
import { getCartData } from '../../redux/AppReducer/action'

const Cart = () => {
const dispatch = useDispatch()
 useEffect(()=>{
dispatch(getCartData())
 },[])

 const CartData = useSelector((state)=>state.AppReducer.cart)
 console.log("CartData",CartData)
 
  return (
    <Box>
{CartData?.map((e,i)=>(
 <CartShow key={i} {...e}/>
))}
    </Box>
  )
}

export default Cart