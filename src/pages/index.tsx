import { Avatar, Box, Flex, Text, Link, Button, Icon } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { StarBox } from "../components/utils/starBox";
import { Footer } from "../components/utils/Footer";

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

         <StarBox />

          <Footer />
        </Box>
      </Box>
    </Flex>
  )
}
