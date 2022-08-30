import React from 'react'
import {HStack} from "@chakra-ui/react"
import Slide from '../../components/gender/Slide'
import MenShow from '../../components/gender/MenShow'
const Men = () => {
  return (
   <HStack space={10}>
    <Slide/>
    <MenShow/>
     
     </HStack>
  )
}

export default Men