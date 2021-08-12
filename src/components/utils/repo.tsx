import { Box, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

interface RepoProps {
    icon: ElementType;
    name: string;
    href?: string | undefined;
    mt?: string;
    iconColor?: string
}

export function Repo({ icon, name, href, mt, iconColor }: RepoProps) {
    return(
        <Flex
            pos="absolute"
            top="230px"
            left="15px"
            mt={mt}
        >
            <Icon as={icon} mr="10px" fontSize="20" color={iconColor} />

            <Box
                color="blue.400"
                fontWeight="600"
                _hover={{
                    textDecoration: "underline"
                }}
            >
                <Link href={{ href }}>{name}</Link>
            </Box>
        </Flex>
    )
}