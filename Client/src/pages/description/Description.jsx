import { Box, Divider, Grid, ListItem, Text, UnorderedList, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
 
import { ImageModal } from "../../components/description/ImageModal";
import { SelectSize } from "../../components/description/SelectSize";
import { NewButton } from "../../components/description/NewButton";
 
import { useEffect, useState } from "react";
 
import { useNavigate, useParams } from "react-router-dom";
import { addCartData, getCartData } from "../../redux/AppReducer/action";
import axios from "axios";


export const Description = () => {
    const {id} = useParams()
    console.log("id",id)
   const dispatch = useDispatch()
   const isLoaded = useSelector((state)=>state.AppReducer.notLoading)
   let singleProduct;
   const getSingleProduct =()=>{
    axios({
      method:"GET",
      url:`/products/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
      },
    })
       
       .then((r) => console.log("r.da",r.data) )
       .catch((e) => console.log(e));
   }
   useEffect(()=>{
  getSingleProduct()
   },[])
  
  const handleCart =(id)=>{
  
    dispatch(addCartData(id)).then((res)=>dispatch(getCartData()))
   }
  
console.log("single",singleProduct)
 
   
    


     
    const handleAddToFavourite = () => {
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
                p={'10px'}
                gap={['40px', '40px', "4%", "4%", "4%"]}
                templateColumns={["100%", "100%", "55% 41%", "62% 34%", "62% 34%"]}
                w={["100%", "100%", "100%", "100%", "90%"]}
                m={["40px auto 100px", "40px auto 100px", "40px auto 60px", "40px auto 60px", "40px auto 60px"]}
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
                        <SelectSize size={singleProduct?.size} />
                    </Box>

                    <NewButton
                       onClick={() => handleCart(id)}
                        name={"Add to Bag"}
                        bgColor={"black"}
                        color={"white"}
                        hoverBg={'#1e1e1e'}
                        borderColor={'transparent'}
                    />
                    <NewButton
                        click={handleAddToFavourite}
                        name={"Favourite"}
                        bgColor={"white"}
                        color={"black"}
                        hoverBorder={"black"}
                        borderColor={'#cecdce'}
                    />

                    <Divider my={'30px'} />

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


