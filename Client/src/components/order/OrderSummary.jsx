import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
 


export const OrderSummary  = ( { CartData }) => {
 let totalPrice = CartData.reduce((a,ac)=>a+ac.price,0)
//  console.log(totalPrice)
 let Quantity = CartData.reduce((a,ac)=>a+ac.count,0)
//  console.log(Quantity) 
 
 let discount = Math.floor(totalPrice*20/100)
 let gst = Math.floor(((totalPrice-discount)*18)/100)
 let total = totalPrice - discount + gst
 return (
        <>

            <Box   w="250px"  my={'20px'} fontSize={'18px'}>
            <Text fontSize={'20px'} fontWeight={600}>Summary</Text>
                <Flex justifyContent={'space-between'}>
                    <Text>Subtotal</Text>
                    <Text>₹{ totalPrice}.00</Text>
                </Flex>

                <Flex mt={'5px'} justifyContent={'space-between'}>
                    <Text>Quantity</Text>
                    <Text>{Quantity}</Text>
                </Flex>

                {/* <Flex mt={'5px'} justifyContent={'space-between'}>
                    <Text >Estimated Delivery</Text>
                    <Text
                        title={'Free delivery applies to orders of ₹14,000 or more'}
                        cursor={'pointer'}
                    >
                      shipping  ₹{numberWithCommas(shipping)}.00
                    </Text>
                </Flex> */}
                 <Flex mt={'5px'} justifyContent={'space-between'}>
                    <Text>Discount (20% off)</Text>
                    <Text>-₹ {discount}.00</Text>
                </Flex>
         
                <Flex mt={'5px'} justifyContent={'space-between'}>

                    <Text >Taxes</Text>
                    <Text
                        title={'Free delivery applies to orders of ₹14,000 or more'}
                        cursor={'pointer'}
                    >
                     ₹ {gst}.00  {/* ₹{numberWithCommas(shipping)}.00 */}
                    </Text>
                </Flex>
               

            <Divider />

            <Flex fontSize={'18px'} justifyContent={'space-between'} my={'20px'}>
                <Text>Total</Text>
                <Text fontWeight={500} >₹  {total}.00</Text>
            </Flex>

 
            <Divider mb={'20px'} />
            </Box>
        </>
    );
};