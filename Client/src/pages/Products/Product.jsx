import React from 'react'
import {HStack}  from '@chakra-ui/react';
import Slidebar from '../../components/Products/Slidebar';
import ProductShow from '../../components/Products/ProductShow';
const Product = () => {
  return (
     <HStack space={10}>
      <Slidebar/>
      <ProductShow/>
     </HStack>
  )
}

export default Product