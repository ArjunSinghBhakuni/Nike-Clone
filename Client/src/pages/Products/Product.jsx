import React from 'react'
import {Box}  from '@chakra-ui/react';
 
import ProductShow from '../../components/Products/ProductShow';
 
const Product = () => {
  return (
     <Box marginTop={"50px"} display={"flex"}>
 
      <ProductShow/>  
     </Box>
  )
}

export default Product