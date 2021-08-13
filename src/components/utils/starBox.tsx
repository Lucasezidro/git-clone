import { Box, Button, Icon, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsStar } from 'react-icons/bs'


export function StarBox() {
    const [star, setStar] = useState(1)

    function handleLike() {
      setStar(star + 1)
    }
    return(
        <Box
            pos="relative"
            top="60px"
            right="305px"
            w="590px"
            borderRadius="10"
            h="120px"
            bg="#1E2229"
            border="1px solid #718096"
            _after={{
            content: "''",
            position: "absolute",
            top: "155px",
            right: "1px",
            width: "660px",
            height: "1px",
            bg: "gray.600",
            }}
      >
        <Link
          pos="relative"
          right="180px"
          top="10px"
          fontSize="20"
          color="gray.300"
          _hover={{
            color: "blue.400"
          }}
        >
          Lucasezidro/yellow
        </Link>

        <Text
          pos="relative"
          top="10px"
          right="200px"
          color="gray.500"
        >
          My personal page
        </Text>

        <Button
          pos="relative"
          bottom="40px"
          left="200px"
          onClick={handleLike}
        >
          <Icon as={BsStar} mr="2" />
          Star
        </Button>

        <Box
          display="flex"
          pos="relative"
          bottom="5px"
          left="30px"
        > 
          <Icon as={BsStar} fontSize="14" color="gray.400" />
          <Text pos="relative" left="2" bottom="2px" fontSize="14" color="gray.400">{star}</Text>
          <Text 
            pos="relative" 
            left="8" 
            bottom="2px" 
            fontSize="14" 
            color="gray.400"
          >
            Upgrade Aug 10
          </Text>
        </Box>
      </Box>
    )
}