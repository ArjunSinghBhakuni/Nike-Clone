import { Box, Button, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { countCartData, deleteCartData, getCartData } from '../../redux/AppReducer/action'

const CartShow = ({title,img,price,_id,count}) => {
const dispatch = useDispatch()
 const handleChange =(id,type)=>{
 
  if(count ===1 && type ==="dec"){
    console.log("count is",count)
dispatch(deleteCartData(id)).then((res)=>dispatch(getCartData()))
  }else {

    dispatch(countCartData(id,type) ).then((res)=>dispatch(getCartData()))
  }
 
 
 }
  return (
    <Flex marginTop={5}>
<Image src={img[0]} h="150px" />

<Stack>
 <Heading as={"h3"} size="m" >{title}</Heading>
 <Text >rs {price}</Text>
 <HStack>
  <Button onClick={()=>handleChange(_id,"dec")}size={"sm"}>-</Button>
<Text>{count}</Text>
  <Button onClick={()=>handleChange(_id,"inc")} size={"sm"}>+</Button>
 </HStack>
</Stack>
    </Flex>
  )
}

export default CartShow