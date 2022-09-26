import React from 'react'
import { Box,   VStack } from '@chakra-ui/react'

 
import { useDispatch, useSelector } from 'react-redux'
import { BtnCheckout } from '../../components/cart/BtnCheckout'
 
import CartShow from '../../components/cart/CartShow'
 
import { OrderSummary } from '../../components/order/OrderSummary'
 
import { getCartData } from '../../redux/AppReducer/action'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CheckoutForm } from '../../components/checkout/CheckoutForm'

const Cart = () => {
 
const navigate = useNavigate()
 const CartData = useSelector((state)=>state.AppReducer.cart)
 console.log("CartData",CartData)
 
 const [showDeliveryForm,setShowDeliveryForm] = useState(false)

  return (
    <>
    <Box display="flex"  border={"1px solid red"} justifyContent="space-between" p="50px 100px" >
 
    <Box w="500px">
{ CartData?.map((e,i)=>(
  <CartShow key={i} {...e}/>
  ))
}
  </Box>
 
 
 
  <Box>
<OrderSummary   key={CartData._id} CartData={CartData}/>
<BtnCheckout  />
  </Box>
    </Box>
  </>
  ) 
}

export default Cart