import { Button } from "@chakra-ui/react";


export const BtnCheckout = ( {onClick}) => {
    return (
        <>
             <Button
           onClick={onClick}
                h={"60px"}
               
                border={`1px solid black`}
                borderRadius={"50px"}
                w={"100%"}
                fontSize={"17px"}
                mb={'20px'}
               
            >
              Payment
            </Button>
        </>
    );
};