import {
  Box,
  Button,
  Divider,
  Grid,
  ListItem,
  Text,
  Toast,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { ImageModal } from "../../components/description/ImageModal";
import { SelectSize } from "../../components/description/SelectSize";
import { NewButton } from "../../components/description/NewButton";

import { useEffect, useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  addCartData,
  getCartData,
  getProductsData,
} from "../../redux/AppReducer/action";
import axios from "axios";
import { setToast } from "../../utilties/toastfun";

export const Description = () => {
  const [mySize, setMySize] = useState(false);
  //   const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const navigate = useNavigate();
  const product = useSelector((state) => state.AppReducer.products);
  //   const [singleProduct, setSingleProduct] = useState({});

  //   const { id } = useParams();
  //   console.log("id",id)
  //   const location = useLocation();
  //  // console.log(location);
  //   useEffect(() => {
  //     if (product?.length === 0) {
  //       dispatch(getProductsData());;
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (id) {
  //       const temp = product?.find((el) => el._id == (id));
  //       console.log("temp",temp)
  //       temp && setSingleProduct(temp);
  //     }
  //   }, [product, id, location]);

  const { id } = useParams();

  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.AppReducer.notLoading);

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  const [singleProduct] = product?.filter((e) => e._id === id);

  const toast = useToast();

  const handleCart = (id) => {
    if (!isAuth) {
      setToast(toast, "Please login first", "error");
      navigate("/login");
      return;
    }
    if (mySize === false) {
      setToast(toast, "Please select a Size", "error");
    } else {
      setToast(toast, "Product Add to cart", "success");
      dispatch(addCartData(id)).then((res) => dispatch(getCartData()));
    }
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
      <Grid
        p={"10px"}
        gap={["40px", "40px", "4%", "4%", "4%"]}
        templateColumns={["100%", "100%", "55% 41%", "62% 34%", "62% 34%"]}
        w={["100%", "100%", "100%", "100%", "90%"]}
        m={[
          "40px auto 100px",
          "40px auto 100px",
          "40px auto 60px",
          "40px auto 60px",
          "40px auto 60px",
        ]}
      >
        <ImageModal img={singleProduct?.img} />

        <Box px={["20px", "40px"]}>
          <Text fontSize={"29px"}>{singleProduct?.title}</Text>
          <Text>{singleProduct?.description}</Text>
          <Text fontSize={"22px"} mt="20px">
            ₹ {singleProduct?.price}
          </Text>
          <Text color={"gray"}>incl. of taxes and duties</Text>
          <Text fontSize={"18px"} mt={"30px"} mb={"10px"}>
            Select Size
          </Text>
          <Box mb={"30px"}>
            <SelectSize size={singleProduct?.size} setMySize={setMySize} />
          </Box>

          <Button
            h={"62px"}
            border={`1px solidtransparent`}
            borderRadius={"50px"}
            w={"100%"}
            fontSize={"17px"}
            my={"10px"}
            _hover={{ bg: "#1e1e1e", borderColor: "white" }}
            bgColor={"black"}
            color={"white"}
            hoverBg={"#1e1e1e"}
            borderColor={"transparent"}
            onClick={() => handleCart(singleProduct?._id)}
          >
            Add to Bag
          </Button>
          <Button
            bgColor={"white"}
            color={"black"}
            hoverBorder={"black"}
            borderColor={"#cecdce"}
            h={"62px"}
            border={`1px solid black`}
            borderRadius={"50px"}
            w={"100%"}
            fontSize={"17px"}
            my={"10px"}
            _hover={{ bg: "#white", borderColor: "white" }}
            onClick={handleAddToFavourite}
          >
            Faviourite
          </Button>

          <Divider my={"30px"} />

          <Text fontSize={"18px"} mb={"10px"} textDecoration={"underline"}>
            Product Deatils
          </Text>
          <UnorderedList fontSize={"18px"}>
            <ListItem>Gender: {singleProduct?.gender}</ListItem>
            <ListItem>Category: {singleProduct?.category}</ListItem>
            <ListItem>Colour: {singleProduct?.color}</ListItem>
            <ListItem>Rating: {singleProduct?.rating}</ListItem>
          </UnorderedList>
        </Box>
      </Grid>
    </>
  );
};
