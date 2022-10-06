import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import {
  countCartData,
  deleteCartData,
  getCartData,
} from "../../redux/AppReducer/action";
import { setToast } from "../../utilties/toastfun";

const CartShow = ({ title, img, price, _id, count }) => {
  const dispatch = useDispatch();
  const handleChange = (id, type) => {
    if (count === 1 && type === "dec") {
      // console.log("count is", count);
      dispatch(deleteCartData(id)).then((res) => dispatch(getCartData()));
    } else {
      dispatch(countCartData(id, type)).then((res) => dispatch(getCartData()));
    }
  };
const toast = useToast()
  const handleRemoveItem = (id) => {
    setToast(toast, "Removed Succesfully", "info");
    dispatch(deleteCartData(id)).then((res) => dispatch(getCartData()))
  };

  const handleAddToFavourite = () => {
    setToast(toast, "Availble Soon", "warning");
    // if (!token) {
    //     setToast(toast, 'Please login first', 'error');
    //     navigate('/auth');
    // } else {
    //     dispatch(addToFavouriteRequest(data, token, toast));
    // }
  };

  return (
   
    <>
      <Box
               my={"15px"}
        minH={"150px"}
        display={"flex"}
        gap={["5px", "5px", "20px", "20px", "20px"]}
      >
        <Box display={"flex"} gap={["5px", "5px", "20px", "20px", "20px"]}>
          <Box
                       w={["80px", "80px", "150px", "150px", "150px"]}
            h={["80px", "80px", "150px", "150px", "150px"]}
          >
            <Image h={"85%"} src={img[0]} />
          </Box>

          <Box
            w={"100%"}
            display={"grid"}
            gap={"2%"}
            
            gridTemplateColumns={[
              "67% 30%",
              "67% 30%",
              "80% 18%",
              "80% 18%",
              "80% 18%",
            ]}
          > 
            <Box minH={"150px"}>
              <Text fontWeight={500}>{title}</Text>
              {/* <Text color={'gray'}>{description}</Text> */}

              <Flex alignItems={"center"} gap={"10px"} my={"8px"}>
                <Text>Quantity:</Text>

                <Button onClick={() => handleChange(_id, "dec")}>-</Button>
                <Text fontWeight={600}>{count}</Text>

                <Button onClick={() => handleChange(_id, "inc")}>+</Button>
              </Flex>

              <Box display={"flex"} gap={"10px"} textDecoration={"underline"}>
                <Text cursor={"pointer"} title={"Favourites"} onClick={handleAddToFavourite}>
                 Favourite
                </Text>

                <Text cursor={"pointer"} title={"Remove"} onClick={() => handleRemoveItem(_id)}>
                Remove
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box minH={"150px"} marginLeft="420px">
          <Text fontSize={"18px"} >
            ₹{price}
          </Text>
        </Box>
      </Box>

      <Divider />
    </>
  );
};

export default CartShow;
