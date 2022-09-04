import { Box, Flex, VStack } from '@chakra-ui/react'

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartShow from '../../components/cart/CartShow'
import TotalPrice from '../../components/cart/TotalPrice'
import { CheckoutForm } from '../../components/checkout/CheckoutForm'
import { OrderSummary } from '../../components/order/OrderSummary'
 
import { getCartData } from '../../redux/AppReducer/action'

const Cart = () => {
 const [togle,setTogle] = useState(true)

 const CartData = useSelector((state)=>state.AppReducer.cart)
 console.log("CartData",CartData)
 
  return (
    <>
    <Flex  border={"1px solid red"}  >
<VStack border={"1px solid red"} w="70%" >
{togle ? <CheckoutForm/> :CartData?.map((e,i)=>(
  <CartShow key={i} {...e}/>
  ))
}
  </VStack>
  
<OrderSummary setTogle={setTogle} key={CartData._id} CartData={CartData}/>
    </Flex>
  </>
  ) 
}

export default Cart