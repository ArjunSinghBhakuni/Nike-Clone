import React from 'react'
import { Box,   VStack,Image,Text,Button,Container,Heading } from '@chakra-ui/react'

 
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
 const handleClick =()=>{
  console.log("yes")
  navigate("/checkout")
 }

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
<BtnCheckout onClick={handleClick}  />
  </Box>
    </Box>
  :  
     <Container width={"100%"} pb={"200px"}>
        <Box textAlign="center" mt={"50px"}>
          <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zGfbc45UO1GBzJRX4OiYHAx4ChsDRDlTyg&usqp=CAU"} m={"auto"} height={"150px"} />
          <Heading fontSize={"22px"} mt="10px">
            Oops!
          </Heading>
          <Text mt="10px">Looks like there is no item in your cart yet.</Text>
          <Button
            mt="10px"
            background={"grey"}
            color={"white"}
            _hover={{ backgroundColor: "black" }}
            _active={{ backgroundColor: "black" }}
            onClick={() => navigate("/products")}
          >
            ADD PRODUCTS
          </Button>
        </Box>
      </Container>
    }
  </>
  ) 
}

export default Cart