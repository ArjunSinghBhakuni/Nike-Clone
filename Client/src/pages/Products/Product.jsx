import React from 'react'
import {Box}  from '@chakra-ui/react';
 
import ProductShow from '../../components/Products/ProductShow';
import Sidebar from '../../components/Products/Sidebar';
const Product = () => {
  return (
     <Box marginTop={"50px"} display={"flex"}>
 <Sidebar/>
      <ProductShow/>  
     </Box>
  )
}

export default Product