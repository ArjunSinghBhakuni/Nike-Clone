import { Box, Flex, VStack } from '@chakra-ui/react'

import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartShow from '../../components/cart/CartShow'
import TotalPrice from '../../components/cart/TotalPrice'
import { getCartData } from '../../redux/AppReducer/action'

const Cart = () => {
 

 const CartData = useSelector((state)=>state.AppReducer.cart)
 console.log("CartData",CartData)
 
  return (
    <Flex   justifyContent={"space-between"}>
<VStack>

{CartData?.map((e,i)=>(
  <CartShow key={i} {...e}/>
  ))}
  </VStack>
<TotalPrice key={CartData._id} CartData={CartData}/>
    </Flex>
  )
}

export default Cart