import {
  Flex,
  VStack,
  Box,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Payment from "../../components/Payment/Payment";
import { setToast } from "../../utilties/toastfun";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/loading/Loading";
import axios from "axios";
import { useEffect } from "react";
import { getCartData } from "../../redux/AppReducer/action";

const Checkout = () => {
  const CartData = useSelector((state) => state.AppReducer.cart);
  const [totalPrice, setTotalPrice] = useState();
const dispatch = useDispatch()
  const [checkoutForm, setCheckoutForm] = useState({});

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();
  const [load, setLoad] = useState(false);
 

  const paymentHandler = () => {
    if(!checkoutForm.firstName  && !checkoutForm.lastName && !checkoutForm.email && !checkoutForm.password  &&  !checkoutForm.gender){
 setToast(toast, "Please fill the Valid Details", "error");
      return
    }

    const { firstname, lastName, mobile, email } = checkoutForm;
    console.log(checkoutForm)
    
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        //  setLoading(true);
        console.log("tyr")
        const result = await axios.post("create-order", {
          amount: totalPrice + "00",
        });
         
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("get-razorpay-key");
      //  console.log("razorpayKey", razorpayKey);
        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "Nike",
          description: 'Thanks for purchasing',
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post("pay-order", {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });

            setToast(toast, `${result.data.msg}  `, "success");
             
            setToast(toast, `  Payment ID - ${razorpayKey}`, "info");
            
            setLoad(true);
            setTimeout(() => {
              setLoad(false);
        
              navigate("/");
            }, 2000);
 
            //fetchOrders(); razorpayKey
          },
          prefill: {
            name: `${firstname} ${lastName}`,
            email: email,
            contact: mobile
          },
          notes: {
            address: "Masai",
          },
          theme: {
            color: "#80c0f0",
          },
        };

        //  setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        //  setLoading(false);
      }
    };
    document.body.appendChild(script);
  };
  useEffect(()=>{
    dispatch(getCartData())
    setTotalPrice(CartData.reduce((a,ac)=>a+ac.price,0))
   
  },[dispatch,setTotalPrice])
  
  useEffect(()=>{
 
    setTotalPrice(CartData.reduce((a,ac)=>a+ac.price,0))
   
  },[CartData])

  if (load) {
    return <Loading />;
  }

 

  return (
    <>
      <Box display="flex">
        <Box w={"70%"} marginLeft="30px">
          <CheckoutForm
            checkoutForm={checkoutForm}
            setCheckoutForm={setCheckoutForm}
          />
        </Box>

        <Box marginLeft={"100px"}>
          <OrderSummary key={CartData._id} CartData={CartData} />

          <PlaceOrderBtn onClick={paymentHandler} />
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
