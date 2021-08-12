import { LockIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon, Input, Text, Link } from "@chakra-ui/react";
import { RiBookMarkLine } from 'react-icons/ri'
import { Repo } from "./utils/repo";

export function Sidebar() {
    return (
        <Flex
            as="section"
            h="100vh"
            w="330px"
            bg="#22262E"
            borderRight="1px solid #4A5568"

        >
            <Text mt="120px" ml="30px" fontWeight="bold" fontSize="15px" color="gray.300">Repositories</Text>

            <Button
                pos="absolute"
                top="115px"
                left="200px"
                h="30px"
                w="80px"
                bg="#038C33"
                _hover={{
                    bg: "#08d14e"
                }}
                color="gray.200"
                fontWeight="500"
            >
                <Icon as={RiBookMarkLine} mr="2" />
                New
            </Button>

            <Input 
                pos="absolute"
                type="text"
                top="170px"
                left="15px"
                w="270px"
                h="32px"
                placeholder="Find a repository..."
                _placeholder={{ fontSize: "15" }}
            />

            <Repo 
                icon={RiBookMarkLine}
                name="Lucasezidro/letMeAsk"
                href="https://github.com/Lucasezidro/letMeAsk"
                iconColor="gray.400"
            />
            <Repo 
                icon={LockIcon}
                name="Lucasezidro/Curso-yellow"
                href="https://github.com/Lucasezidro/Curso-yellow"
                mt="30px"
                iconColor="yellow.500"
            />
            <Repo 
                icon={RiBookMarkLine}
                name="Lucasezidro/Lucasezidro"
                href="https://github.com/Lucasezidro/Lucasezidro"
                mt="60px"
                iconColor="gray.400"
            />
            <Repo 
                icon={RiBookMarkLine}
                name="Lucasezidro/dt-money"
                href="https://github.com/Lucasezidro/dt-money"
                mt="89px"
                iconColor="gray.400"    
            />
            <Repo 
                icon={RiBookMarkLine}
                name="Lucasezidro/dashgo"
                href="https://github.com/Lucasezidro/dashgo"
                mt="117px"
                iconColor="gray.400"    
            />
            <Repo 
                icon={RiBookMarkLine}
                name="Lucasezidro/jobsCalc"
                href="https://github.com/Lucasezidro/jobsCalc"
                mt="148px"
                iconColor="gray.400"    
            />

            <Link 
                pos="relative" 
                top="415px" 
                right="104px" 
                fontSize="14"
                fontWeight="500"
                color="gray.400"
                _hover={{ color: "blue.400", textDecoration: "underline" }}
                _after={{
                    content: "''",
                    position: "absolute",
                    top: "45px",
                    left: "0px",
                    width: "250px",
                    height: "1px",
                    bg: "gray.600",

                }}
            >
                Show more
            </Link>

            <Text
                pos="absolute"
                top="480px"
                left="20px"
                color="gray.300"
            >
                Recent activity
            </Text>

            <Text
                pos="absolute"
                top="510px"
                left="20px"
                color="gray.500"
                fontSize="13px"
                fontWeight="500"
            >
                When you take actions across GitHub, we'll <br/>
                provide links to that activity here
            </Text>
        </Flex>
    )
}