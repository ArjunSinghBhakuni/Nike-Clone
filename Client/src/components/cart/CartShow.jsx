import { Box, Button, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'

const CartShow = ({title,img,price,_id}) => {
const dispatch = useDispatch()
 const handleChange =(type)=>{

 
 }
  return (
    <Flex marginTop={5}>
<Image src={img[0]} h="150px" />

<Stack>
 <Heading as={"h3"} size="m" >{title}</Heading>
 <Text >rs {price}</Text>
 <HStack>
  <Button onClick={()=>handleChange("inc")}size={"sm"}>-</Button>
<Text></Text>
  <Button onClick={()=>handleChange("dec")} size={"sm"}>+</Button>
 </HStack>
</Stack>
    </Flex>
  )
}

export default CartShow