import { Flex, VStack, Box ,Button, useDisclosure, useToast} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CheckoutForm } from "../../components/checkout/CheckoutForm";
import { PlaceOrderBtn } from "../../components/checkout/PlaceOrder";
import { OrderSummary } from "../../components/order/OrderSummary";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import Payment from "../../components/Payment/Payment";
import { setToast } from "../../utilties/toastfun";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/loading/Loading";


 
 

const Checkout = () => {
  const CartData = useSelector((state) => state.AppReducer.cart);
  console.log("CartData", CartData);
  const { isOpen, onOpen, onClose } = useDisclosure()
const navigate = useNavigate()
const toast = useToast()
const [load,setLoad]= useState(false)
  const handlePayment =()=>{

    
    setToast(toast, "Payment Done ", "success")
    setLoad(true)
    setTimeout(()=>{
      setLoad(false)
      
      navigate("/")
    },2000)
 
  }
    
if(load){
  return <Loading/>
}
  
  return (
    <>
      <Box display="flex">
        <Box w={"70%"}>
          <CheckoutForm />
        </Box>

        <Box marginLeft={"100px"}>
          <OrderSummary key={CartData._id} CartData={CartData} />
       
          <PlaceOrderBtn onClick={onOpen} />
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
       <Payment/>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handlePayment}   colorScheme='blue' mr={3}>
          Payment
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;


