import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import {  signupUser } from "../../redux/AuthReducer/action";
import {Link as RouterLink, useNavigate } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ firstName: "",
  lastName: "", 
  email: "",
  password: "",
  gender: "",});

  const dispatch = useDispatch()

  const handleFormChange = (e) => {
  
    const { name, value  } = e.target;
 
    setForm({
      ...form,
      [name]:value,
     });
  };
  const navigate = useNavigate()

  const handleSubmit = (Event) => {
    Event.preventDefault();
    console.log(form);
    dispatch(signupUser(form)).then((r)=> 
    {

      setForm({
        firstName: "",
      lastName: "", 
      email: "",
      password: "", 
      gender: "",
    })
    navigate('/login')
  } 
    )
    .catch((err) => console.log( err))
   
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    isRequired
                    type="text"
                    name="firstName"
                   value={form.firstName}
                    onChange={handleFormChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleFormChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                isRequired
                name="email"
                value={form.email}
                onChange={handleFormChange}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  isRequired
                  name="password"
                  value={form.password}
                  onChange={handleFormChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="" isRequired  
                onChange={handleFormChange}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                isRequired
                value={form.gender}
              >
                <Stack direction="row">
                  <Radio name="gender" value="male">Male</Radio>
                  <Radio  name="gender" value="female">Female</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>
                    
                  <RouterLink to='/login  '>
                  Login
                  </RouterLink>
                  </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
