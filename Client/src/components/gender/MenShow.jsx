import React from 'react'
import {Box} from "@chakra-ui/react"
 
import {useEffect} from 'react'
import { getMenData } from '../../redux/AppReducer/action'
import {useDispatch, useSelector} from 'react-redux'
import {Grid,GridItem} from "@chakra-ui/react"
import Cards from '../Products/Cards'
import AllProduct from '../Products/AllProduct'
import { Loading } from '../loading/Loading'

const MenShow = () => {
const dispatch = useDispatch()
 const mens = useSelector((state)=>state.AppReducer.men)
 useEffect(() => {
   dispatch(getMenData())
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
     {mens?.map((el,i)=>(
 <GridItem>

   
<AllProduct key={i} {...el}/>
 </GridItem>
     ))}
    </Grid>
  )
}

export default MenShow