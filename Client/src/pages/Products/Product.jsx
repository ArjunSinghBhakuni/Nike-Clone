import React from 'react'
import {HStack}  from '@chakra-ui/react';
import Slidebar, { LeftSideFilter } from '../../components/Products/LeftSideFilter';
import ProductShow from '../../components/Products/ProductShow';
const Product = () => {
  return (
     <HStack space={10}>
    <LeftSideFilter/>?
      <ProductShow/>  
     </HStack>
  )
}

export default Product