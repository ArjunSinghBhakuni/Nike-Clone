import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { CheckoutForm } from '../../components/checkout/CheckoutForm'
import { PlaceOrderBtn } from '../../components/checkout/PlaceOrder'
import { OrderSummary } from '../../components/order/OrderSummary'

const Checkout = () => {
 const CartData = useSelector((state)=>state.AppReducer.cart)
 console.log("CartData",CartData)
  return (
   <>
   <Flex  border={"1px solid red"}  >
<VStack border={"1px solid red"} w="70%" >
<CheckoutForm/>
  </VStack>
  <VStack>
<OrderSummary   key={CartData._id} CartData={CartData}/>
<PlaceOrderBtn/>
  </VStack>
    </Flex>
   
   </>
  )
}

export default Checkout