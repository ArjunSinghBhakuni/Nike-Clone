import React from 'react'
import {Box} from "@chakra-ui/react"
 
import {useEffect} from 'react'
import { getMenData } from '../../redux/AppReducer/action'
import {useDispatch, useSelector} from 'react-redux'
import {Grid,GridItem} from "@chakra-ui/react"
import Cards from '../Products/Cards'
import AllProduct from '../Products/AllProduct'

const MenShow = () => {
const dispatch = useDispatch()
 const mens = useSelector((state)=>state.AppReducer.men)
 useEffect(() => {
   dispatch(getMenData())
 }, [])
 
  return (
   <Grid templateColumns='repeat(3, 1fr)'>
     {mens?.map((el,i)=>(
 <GridItem>

   
<AllProduct key={i} {...el}/>
 </GridItem>
     ))}
    </Grid>
  )
}

export default MenShow