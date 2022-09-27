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
import { useEffect } from 'react'

const Cart = () => {
 
const navigate = useNavigate()
const [dataAvail,setDataAvail] = useState(false)
 const CartData = useSelector((state)=>state.AppReducer.cart)
 console.log("CartData",CartData)

 const dispatch = useDispatch()
 
 useEffect(()=>{
  CartData.length>0 ? setDataAvail(true): setDataAvail(false)

 },[CartData,dataAvail])
 
 useEffect(()=>{
  dispatch(getCartData())
 },[])
 const [showDeliveryForm,setShowDeliveryForm] = useState(false)

  return (
    <>
    {dataAvail ?
   
    <Box display="flex"    >
 
    <Box  w={"70%"}   >
{ CartData?.map((e,i)=>(
  <CartShow key={i} {...e}/>
  ))
}
  </Box>
 
 
 
  <Box marginLeft={"100px"}>
<OrderSummary   key={CartData._id} CartData={CartData}/>
<BtnCheckout  />
  </Box>
    </Box>
  : <Box>
    Please buy something
  </Box>   }
  </>
  ) 
}

export default Cart