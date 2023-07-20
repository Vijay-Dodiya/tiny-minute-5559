import React from "react";
import { Flex, Box, Link, Text } from "@chakra-ui/react";

const SideNavbar = () => {
  return (
    <Box width="100%" height="100vh" color="white" py="4" px="20">
      <Flex
        direction="column"
        gap="30px"
        alignContent="space-evenly"
        // alignItems="space-between"
        justifyContent="center"
      >
        <Link href="#">
          <Text fontSize="xl" fontWeight="bold" mb="4">
            Dashboard
          </Text>
        </Link>
        <Link href="#">
          <Text fontSize="xl" mb="2">
            Link 1
          </Text>
        </Link>
        <Link href="#">
          <Text fontSize="xl" mb="2">
            Link 2
          </Text>
        </Link>
        <Link href="#">
          <Text fontSize="xl" mb="2">
            Link 3
          </Text>
        </Link>
        {/* Add more links here if needed */}
      </Flex>
    </Box>
  );
};

export default SideNavbar;
