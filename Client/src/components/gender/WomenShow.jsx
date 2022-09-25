import React from 'react'
import {Box} from "@chakra-ui/react"
 
import {useEffect} from 'react'
import { getWomenData } from '../../redux/AppReducer/action'
import {useDispatch, useSelector} from 'react-redux'
import {Grid,GridItem} from "@chakra-ui/react"
import Cards from '../Products/Cards'
import AllProduct from '../Products/AllProduct'

const WomenShow = () => {
const dispatch = useDispatch()
 const women = useSelector((state)=>state.AppReducer.women)
 useEffect(() => {
   dispatch(getWomenData())
 }, [])
 
  return (
   <Grid templateColumns='repeat(3, 1fr)'>
     {women?.map((el,i)=>(
 <GridItem>

<AllProduct key={i} {...el}/>
 </GridItem>
     ))}
    </Grid>
  )
}

export default WomenShow