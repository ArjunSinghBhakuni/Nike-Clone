import React from 'react'
import {Box, Button, Heading, Stack } from "@chakra-ui/react"
const TotalPrice = ({CartData}) => {

 let totalPrice = CartData.reduce((a,ac)=>a+ac.price,0)
 console.log(totalPrice)
 let Quantity = CartData.reduce((a,ac)=>a+ac.count,0)
 console.log(Quantity)
  return (
    <Box  border={"1px solid red"} h="15rem" w="20rem" >
     <Stack>
     <Heading as="h3" size={"lg"}>
      {`Total Price : ${totalPrice} `}
      </Heading> 
       <Heading as="h3" size={"lg"}>
       {` Quantity: ${Quantity} `}
       </Heading>
     </Stack>
     <Button>Pay</Button>
    </Box>
  )
}

export default TotalPrice