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
   <Grid templateColumns='repeat(3, 1fr)'>
     {kids?.map((el,i)=>(
 <GridItem>

   
<AllProduct key={i} {...el}/>
 </GridItem>
     ))}
    </Grid>
  )
}

export default KidsShow