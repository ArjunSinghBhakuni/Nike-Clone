import React from 'react'
import { Box, Flex, VStack } from '@chakra-ui/react'

 
import { useDispatch, useSelector } from 'react-redux'
import { BtnCheckout } from '../../components/cart/BtnCheckout'
 
import CartShow from '../../components/cart/CartShow'
 
import { OrderSummary } from '../../components/order/OrderSummary'
 
import { getCartData } from '../../redux/AppReducer/action'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
 
const navigate = useNavigate()
 const CartData = useSelector((state)=>state.AppReducer.cart)
 console.log("CartData",CartData)
 
 const handleClick =()=>{
  navigate("/checkout")
 }

  return (
    <>
    <Flex  border={"1px solid red"}  >
<VStack border={"1px solid red"} w="70%" >
{ CartData?.map((e,i)=>(
  <CartShow key={i} {...e}/>
  ))
}
  </VStack>
  <VStack>
<OrderSummary   key={CartData._id} CartData={CartData}/>
<BtnCheckout onClick={handleClick}/>
  </VStack>
    </Flex>
  </>
  ) 
}

export default Cart