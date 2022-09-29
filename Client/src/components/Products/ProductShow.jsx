import React from 'react'
import {Box} from "@chakra-ui/react"
import Cards from './Cards'
import {useEffect} from 'react'
import { getProductsData } from '../../redux/AppReducer/action'
import {useDispatch, useSelector} from 'react-redux'
import {Grid,GridItem} from "@chakra-ui/react"
import AllProduct from './AllProduct'
import { Loading } from '../loading/Loading'
 

const ProductShow = () => {
const dispatch = useDispatch()
 const products = useSelector((state)=>state.AppReducer.products)
 
 

 useEffect(() => {
   dispatch(getProductsData())
 }, [])
 const loading = useSelector((state)=>state.AppReducer.notLoading)
 if(loading === false){
  return <Loading/>
 }
 
  return (
   <Grid 
   gap={['10px', '10px', '20px', '20px', '20px']}
   
   templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} 
    justifyContent="flex-end">
     {products?.map((el,i)=>(
 <GridItem key={i}>
 

     <AllProduct key={i} {...el}/>
 
 </GridItem>
     ))}
    </Grid>
  )
}

export default ProductShow