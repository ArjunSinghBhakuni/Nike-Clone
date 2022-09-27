import React from 'react'
import {Box} from "@chakra-ui/react"
 
import {useEffect} from 'react'
import {  getKidsData } from '../../redux/AppReducer/action'
import {useDispatch, useSelector} from 'react-redux'
import {Grid,GridItem} from "@chakra-ui/react"
import Cards from '../Products/Cards'
import AllProduct from '../Products/AllProduct'

const KidsShow = () => {
const dispatch = useDispatch()
 const kids = useSelector((state)=>state.AppReducer.kids)
 useEffect(() => {
   dispatch(getKidsData())
 }, [])
 
  return (
   <Grid templateColumns='repeat(4, 1fr)'  gap={"20px"} justifyContent="flex-end">
     {kids?.map((el,i)=>(
 <GridItem>

   
<AllProduct key={i} {...el}/>
 </GridItem>
     ))}
    </Grid>
  )
}

export default KidsShow