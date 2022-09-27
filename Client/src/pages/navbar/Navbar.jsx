import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import { BsBag } from "react-icons/bs";
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
    const navigate =  useNavigate()
// const isAuth = useSelector((state)=>state.AuthReducer.isAuth)
// console.log(isAuth)

 
  return (
    <Box    boxShadow = {"rgba(149, 157, 165, 0.2) 0px 8px 24px"}>
      <Flex border={"1px solid red"}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}  >
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          
           >
            
          <Image onClick={()=>navigate("/")} h="50px" w="70px" src='https://mohit-nikeclone.netlify.app/assets/Nike-logo.868b342b.png'/>
           
          </Text>

          <Flex display={{ base: 'none', md: 'flex',lg:"flex" }}   ml={{ base: 'none', md: '20%',lg:"30%" }}  >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          
          <Button
            display={{ base: 'inline-flex', md: 'inline-flex' }}
            fontSize={'m'}
            fontWeight={500}
            color={'white'}
            bg= "black"
            href={'#'}
            _hover={{
              bg: 'black',

            }}
            onClick={()=>{
              navigate("/signup")
            }}
            >
            Sign Up 
          </Button>
          <Button
            display={{ base: 'inline-flex', md: 'inline-flex' }}
            fontSize={'m'}
            fontWeight={500}
            color={'white'}
            bg= "black"
            href={'#'}
            _hover={{
              bg: 'black',

            }}
            onClick={()=>{
              navigate("/login")
            }}
            >
          Login 
          </Button>
          <Box fontSize={"35px"}  onClick={()=>{
            navigate("/cart")
          }}>
          <BsBag />
            </Box>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  const navigate =  useNavigate()

  const handleClick = (href)=>{
navigate(`/products${href}`)
  }

  return (
    <Stack direction={'row'} m="auto"   >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link onClick={()=>handleClick(navItem.route)}
                p={2}
               
                fontSize={'lg'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}

              </Link>
            </PopoverTrigger>
 
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel } ) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href } ) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

 

const NAV_ITEMS  = [
  {
    label: 'Products',
    route: '',
  },
  {
    label: 'Men',
    route: '/men',
  },
  {
    label: 'Women',
    route: '/women',
  },
  {
    label: 'Kids',
    route: '/kids',
  },
];