import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { SiGooglemaps } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineWifi } from 'react-icons/ai'

export function Footer() {
    return(
        <Flex 
            as="footer"
            pos="absolute" 
            top="300px"
            flexDir="row"
          >
            
            <Icon as={SiGooglemaps} ml="100px" color="gray.500" fontSize="20" />
            <Text ml="2" fontSize="13" fontWeight="bold" color="gray.500">
              ProTip! 
            </Text>
            <Text
              ml="1"
              fontSize="13"
              color="gray.500"
              
            >
              The feed shows you events from people you 
              <Link color="blue.400" ml="3px" mr="3px">follow</Link> 
              and repositories you <Link color="blue.400">watch</Link> or 
              <Link color="blue.400" ml="2px">star</Link>.
            </Text>

          <Box
            pos="absolute"
            top="30px"
            right="568px"
            display="flex"
            flexDir="row"
          >
            <Icon as={AiOutlineWifi} fontSize="20" color="gray.500" />

            <Text
              fontSize="13"
              ml="2"
              color="gray.500"
            >
              Subscribe to your news feed
            </Text>
          </Box>
            

            <Box 
              display="flex" 
              flexDir="row"
              pos="relative"
              top="70px"
              right="568px"
            >
              <Icon 
                as={FaGithub} 
                fontSize="25" 
                color="gray.500"
                _hover={{
                  color: "gray.400"
                }} 
                cursor="pointer"
              />


            </Box>
              <Text
                pos="absolute"
                fontSize="13"
                color="gray.500"
                top="75px"
                left="140px"
              >
                &copy; 2021 GitHub, inc.
              </Text>

            <Box
              display="flex"
              flexDir="column"
              pos="relative"
              top="75px"
              right="350px"
              >
              <Link mr="4" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>Blog</Link>
              <Link mr="2" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>About</Link>
              <Link mr="3" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>Shop</Link>
              <Link ml="0.5px" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>Contact <br/> GitHub</Link>
              <Link fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>Pricing</Link>


            </Box>

            <Box
              display="flex"
              flexDir="column"
              pos="relative"
              top="75px"
              right="250px"
              >
              <Link mr="8" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>API</Link>
              <Link mr="2" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>Training</Link>
              <Link mr="16px" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>Status</Link>
              <Link mr="2" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>Security</Link>
            </Box>

            <Box
              display="flex"
              flexDir="column"
              pos="relative"
              top="75px"
              right="190px"
              >
              <Link mr="8" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>Terms</Link>
              <Link mr="2" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>Privacy</Link>
              <Link mr="16px" fontSize="13" color="gray.500" _hover={{color: "blue.500", textDecoration: "underline"}}>Docs</Link>
            </Box>
          </Flex>
    )
}