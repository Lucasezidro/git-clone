import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <Flex>
      <Sidebar />

      <Box>
        <Text mt="120px" ml="50px" fontSize="17" color="gray.400">All activity</Text>

        <Box
          pos="absolute"
          display="flex"
          align="center"
          justify="center"
        >
          <Avatar 
            name="Lucas Ezidro" 
            src="https://avatars.githubusercontent.com/u/80000943?v=4"
            mt="4"
            ml="40px"
            size="md"

          />

          <Text 
            color="gray.200" 
            fontWeight="bold"
            ml="15px"
            mt="25px"
            >
              Lucasezidro starred Lucasezidro/yellow
          </Text>

          <Box
            pos="relative"
            top="60px"
            right="305px"
            w="500px"
            borderRadius="10"
            h="120px"
            bg="#1E2229"
            border="1px solid #718096"
          >

          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
