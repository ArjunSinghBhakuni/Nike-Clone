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
} from '@chakra-ui/react';

export default function Login() {
 return (
   <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex flex={1}>
       <Image
         alt={'Login Image'}
         objectFit={'cover'}
         src={
           'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
         }
       />
     </Flex>
     <Flex p={8} flex={1} align={'center'} justify={'center'}>
       <Stack spacing={4} w={'full'} maxW={'md'}>
         <Heading fontSize={'2xl'}>Sign in to your account</Heading>
         <FormControl id="email">
           <FormLabel>Email address</FormLabel>
           <Input type="email" />
         </FormControl>
         <FormControl id="password">
           <FormLabel>Password</FormLabel>
           <Input type="password" />
         </FormControl>
         <Stack spacing={6}>
           <Stack
             direction={{ base: 'column', sm: 'row' }}
             align={'start'}
             justify={'space-between'}>
             <Checkbox>Remember me</Checkbox>
             <Link color={'blue.500'}>Forgot password?</Link>
           </Stack>
           <Button colorScheme={'blue'} variant={'solid'}>
             Sign in
           </Button>
         </Stack>
         <Stack pt={6}>
             <Text align={'center'}>
               Not Have Account <Link color={'blue.400'}>Signup</Link>
             </Text>
           </Stack>
       </Stack>
     </Flex>
     
   </Stack>
 );
}