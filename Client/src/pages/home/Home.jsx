import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
 
import { ClothSection } from "../../components/home/ClothSection.jsx";
import { ShoeSection } from "../../components/home/ShoeSection.jsx";
import Slideshow from "../../components/homecomponents/Slideshow.jsx";
import { getClothData, getShoeData } from "../../redux/home/actions.js";
 
 


export const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { clothData, shoeData } = useSelector((state) => state.homeReducer);



    const handleSection = (gender) => {
   ;
       
    
        navigate(`/${gender}`)
    };


    useEffect(() => {
        dispatch(getClothData());
        dispatch(getShoeData());
    }, []);


    return   (
     
        <>
          
                <Slideshow/>
           
        </>
    );
};

