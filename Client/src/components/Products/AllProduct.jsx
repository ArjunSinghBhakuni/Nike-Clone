import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  chakra,
  Flex,
  Image,
  Spinner,
  Badge,
  Stack,
  Icon,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { BiRupee } from "react-icons/bi";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./product.css";
import { addCartData, getCartData } from "../../redux/AppReducer/action";
import { FiShoppingCart } from "react-icons/fi";
import { setToast } from "../../utilties/toastfun";
const ToolTip = styled.i`
  font-size: 12px;
  cursor: pointer;
  color: #828282;
`;
const CartPlusIcon = styled.i`
  margin-right: 5px;
`;
const AddToCartBtn = styled.button`
  border-radius: 15px;
  background-color: #fff;
  color: #ff6f61;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  padding: 6px 16px;
  outline: 0;
  border: 1px solid #ff6f61;
  min-width: 80px;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;

const CartDec = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 7px 4px 9px;
  color: #ff6f61;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border: 1px solid #ff6f61;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;
const CartInc = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 9px 4px 7px;
  color: #ff6f61;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1px solid #ff6f61;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;
const CardCount = styled.div`
  width: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding-top: 4px;
  text-align: center;
`;
// const sample = {
//   _id: "",
//   prodHighlights:""
//   longDesc:
//   imageUrl:
//   productName:,
//   shortDesc:,
//   ratings:,
//   numberOfRatings: ,
//   strikedPrice: ,
//   price: ,
//   discount:,
//   brand: ,
// };

const AllProduct = ({
  title,
  description,
  category,
  price,
  size,
  color,
  rating,
  img,
  _id,
}) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.AppReducer.notLoading);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const toast = useToast();
  const navigate = useNavigate()
  const handleCart = (id) => {
    if(!isAuth){
      setToast(toast, "Please login first", "error");
      navigate("/login")
return
    }
    setToast(toast, "Product Added to cart", "success");

    dispatch(addCartData(id)).then((res) => dispatch(getCartData()));
  };

 
  return (
    <Box
      border={"1px solid #eee"}
      transition={".3s"}
      rounded={4}
      // height="340px"
      bg={"white"}
      _hover={{
        transition: ".6s",
        boxShadow: "0 0 9px 0 rgb(0 0 0 / 30%)",
      }}
      position={"relative"}
      p={"10px"}
    >
      <Box
        width="100%"
        h="90%"
        margin="auto"
        bg={"white"}
        rounded={4}
        position={"relative"}
        className="productsImg"
       
      >
        <Link to={`/products/${_id}`} style={{ textDecoration: "none" }}>
          <Image    src={img[0]} />
        </Link>
      </Box>
      <Box
        p="10px 0px"
        // border={"1px solid blue"}
        fontSize="20px"
        fontWeight={"400"}
        lineHeight="20px"
        color={"#212121"}
        // textOverflow={"ellipsis"}
        textOverflow={"..."}
        overflow="hidden"
        mt="10px"
      >
        {title}
      </Box>
      <Text
        fontSize="12px"
        fontWeight={"400"}
        lineHeight="17px"
        color={"#757575"}
      >
        {description}
      </Text>

      <Flex
        mt={"5px"}
        left="0"
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
      >
        <Box
          paddingLeft={"5px"}
          flexDirection={"row"}
          justifyContent="flex-start"
          alignItems={"center"}
          borderRadius={"2px"}
          bg={"#1aab2a"}
          color={"white"}
          fontWeight={"bold"}
          fontSize="12px"
          pr={"5px"}
        >
          {rating}{" "}
          <StarIcon marginTop={"-3px"} color={"white"} fontSize="10px" />
        </Box>
        <Text marginLeft={3} fontSize="12px">
          {rating}
        </Text>
      </Flex>
      <Flex
        mt={"5px"}
        paddingLeft={"2px"}
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
        borderRadius={"2px"}
        fontSize="14px"
        mb={"30px"}
        // border={"1px solid red"}
      >
        <Text
          fontSize="12px"
          fontWeight={"400"}
          lineHeight="17px"
          color={"#757575"}
        >
          MRP{" "}
          <Text as={"span"} textDecoration={"line-through"}>
            {" "}
            {price}
          </Text>
        </Text>
        <Text
          pl={"10px"}
          color="#5ac265"
          fontSize="12px"
          fontWeight={600}
          lineHeight="16px"
        >
          40% off
        </Text>
      </Flex>
      <Box>
        <Flex
          position={"absolute"}
          bottom={1}
          left={0}
          right={0}
          marginLeft="10px"
          marginRight="10px"
          height={"40px"}
          // paddingBottom={"5px"}
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          borderRadius={"2px"}
          fontWeight={"bold"}
          fontSize="14px"
        >
          <Flex justifyContent="flex-start" alignItems={"center"}>
            <BiRupee fontSize={"16px"} />

            <Text fontSize={"16px"}> {price}</Text>
          </Flex>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a display={"flex"}>
              <Icon
                onClick={() => handleCart(_id)}
                as={FiShoppingCart}
                h={7}
                w={7}
                alignSelf={"center"}
              />
            </chakra.a>
          </Tooltip>
          {/* <Stack>
            {countValue == 0 ? (
              <AddToCartBtn
                key={product._id}
                onClick={() => handleAddToCart(product)}
              >
                {addCartItem.loading && addCartItem._id === product._id ? (
                  <Spinner speed="0.65s" size="xs" />
                ) : (
                  <Flex>
                    <CartPlusIcon className="fa-solid fa-cart-plus"></CartPlusIcon>
                    ADD
                  </Flex>
                )}
              </AddToCartBtn>
            ) : (
              <Flex>
                <CartDec
                  onClick={() =>
                    handleUpdate(product?._id, Number(countValue) - 1)
                  }
                >
                  <i className="fa-solid fa-minus"></i>
                </CartDec>
                <Tooltip
                  hasArrow
                  label={`Max Qty 5`}
                  bg="#666"
                  opacity={"0.5"}
                  color="white"
                  placement="top"
                  fontWeight={400}
                  fontSize="12px"
                >
                  {updateCartItem.loading &&
                  updateCartItem._id == product._id ? (
                    <CardCount>
                      <Spinner speed="0.65s" size="xs" />
                    </CardCount>
                  ) : (
                    <CardCount>{countValue}</CardCount>
                  )}
                </Tooltip>

                <CartInc
                  disabled={countValue >= 5}
                  onClick={() => {
                    handleUpdate(product?._id, Number(countValue) + 1);
                  }}
                >
                  <i className="fa-solid fa-plus"></i>
                </CartInc>
              </Flex>
            )}
          </Stack> */}
        </Flex>
      </Box>
    </Box>
  );
};

export default AllProduct;
