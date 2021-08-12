import { Avatar, Box, Flex, Icon, Input, Link as ChakraLink } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import { BsSlashSquare } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { BiBell } from 'react-icons/bi'
import Link from 'next/link'

export function Header() {
    return(
        <Flex
            as="header"
            w="100%"
            h="63px"
            bg="#2D323B"
            pos="absolute"
            top="0"
        >
         
            <Link href="/">
                <Icon 
                    as={FaGithub}
                    fontSize="33" 
                    ml="30px"
                    mt="10px"
                    opacity="0.8"
                    _hover={{
                        filter: "brightness(0.8)"
                    }}
                    cursor="pointer"
                />
            </Link>

            <Input 
                bg="#22262E"
                w="300px"
                h="29px"
                ml="3"
                mt="13px"
                placeholder="Search or jump to..."
                _placeholder={{
                    color: "#B5B7B9"
                }}
            />

            <Icon 
                as={BsSlashSquare}
                pos="relative"
                top="18px"
                right="25px"
                color="gray.500"
                fontSize="18"
            />

            <Box as="nav" mt="15px">
                <ChakraLink 
                    mr="3" 
                    fontWeight="bold" 
                    color="#C8D3E0" 
                    _hover={{filter: "brightness(0.8)"}}
                    fontSize="15"
                >
                    Pull request
                </ChakraLink>
                <ChakraLink 
                    mr="3" 
                    fontWeight="bold" 
                    color="#C8D3E0" 
                    _hover={{filter: "brightness(0.8)"}}
                    fontSize="15"
                >
                    Issues
                </ChakraLink>
                <ChakraLink 
                    mr="3" 
                    fontWeight="bold" 
                    color="#C8D3E0" 
                    _hover={{filter: "brightness(0.8)"}}
                    fontSize="15"
                >
                    Marketplace
                </ChakraLink>
                <ChakraLink 
                    mr="3" 
                    fontWeight="bold" 
                    color="#C8D3E0" 
                    _hover={{filter: "brightness(0.8)"}}
                    fontSize="15"
                >
                    Explore
                </ChakraLink>
            </Box>

            <Box
                pos="absolute"
                right="10px"
            >
                <Avatar name="Lucas Ezidro" size="sm" src="https://avatars.githubusercontent.com/u/80000943?v=4" mt="15px" />
                <Icon as={IoMdArrowDropdown} pos="relative" right="70px" top="15px" color="gray.300" cursor="pointer" />
                <Icon as={AddIcon} pos="relative" right="100px" top="15px" fontSize="12" color="gray.300" cursor="pointer" />
                <Icon as={BiBell} pos="relative" right="145px" top="15px" fontSize="22" color="gray.300" cursor="pointer" />

            </Box>

        </Flex>
    )
  
}