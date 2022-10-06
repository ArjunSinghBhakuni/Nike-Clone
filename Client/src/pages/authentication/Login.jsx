import {
 Button,
 Checkbox,
 Flex,
 FormControl,
 FormLabel,
 Heading,
 Input,
 Link,
 Stack,
 Image,
 Text,
 useToast,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/AuthReducer/action';
import {Link as RouterLink,useNavigate} from "react-router-dom"
import { setToast } from '../../utilties/toastfun';
export default function Login() {
  const toast = useToast()
  const [email,setEmail] = useState("123@gmail.com")
  const [password,setPassword] = useState("123")
const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit =()=>{
const payload ={
  email,
  password
}
if(email && password){

  dispatch(loginUser(payload)).then((r)=> {

    setToast(toast, "Login Success", "success");
    navigate("/products")
  }
  )
}else{
  setToast(toast, "Please fill the Valid Details", "error");
}
  }
 return (
   <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex flex={1}>
       <Image
         alt={'Login Image'}
         objectFit={'cover'}
         src={
           'https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/24dd0e6b-6d18-4b8e-8abc-e510fe3dfbc9/nike-just-do-it.jpg'
         }
       />
     </Flex>
     <Flex p={8} flex={1} align={'center'} justify={'center'}>
       <Stack spacing={4} w={'full'} maxW={'md'}>
         <Heading fontSize={'2xl'}>Sign in to your account</Heading>
         <FormControl id="email">
           <FormLabel>Email address</FormLabel>
           <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         </FormControl>
         <FormControl id="password">
           <FormLabel>Password</FormLabel>
           <Input value={password} type="password"  onChange={(e)=>setPassword(e.target.value)} />
         </FormControl>
         <Stack spacing={6}>
          
           <Button bgColor={'black'} color={"white"}   
           onClick={handleSubmit}
           >
             Sign in
           </Button>
         </Stack>
         <Stack pt={6}>
             <Text align={'center'}>
 
               Not Have Account  <Link  color={'blue.400'}> 
               <RouterLink to='/signup'>

               Signup
               </RouterLink>
               </Link>
             </Text>
           </Stack>
       </Stack>
     </Flex>
     
   </Stack>
 );
}