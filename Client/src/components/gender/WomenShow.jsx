import React from 'react'
import {Box} from "@chakra-ui/react"
 
import {useEffect} from 'react'
import { getWomenData } from '../../redux/AppReducer/action'
import {useDispatch, useSelector} from 'react-redux'
import {Grid,GridItem} from "@chakra-ui/react"
import Cards from '../Products/Cards'
import AllProduct from '../Products/AllProduct'
import { Loading } from '../loading/Loading'

const WomenShow = () => {
const dispatch = useDispatch()
 const women = useSelector((state)=>state.AppReducer.women)
 useEffect(() => {
   dispatch(getWomenData())
 }, [])
 
 const loading = useSelector((state)=>state.AppReducer.notLoading)
 if(loading === false){
  return <Loading/>
 }
  return (
   <Grid templateColumns='repeat(4, 1fr)'  gap={"20px"} justifyContent="flex-end">
     {women?.map((el,i)=>(
 <GridItem>

<AllProduct key={i} {...el}/>
 </GridItem>
     ))}
    </Grid>
  )
}

export default WomenShow