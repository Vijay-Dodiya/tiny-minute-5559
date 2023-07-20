import React from "react";
// import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Flex, Box, Link, Input, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box width="100vw" bg="teal.500" p="3">
        <Flex as="nav" alignItems="center" justifyContent="space-around">
          <Link href="/">
            <img
              src="https://cdn.mos.cms.futurecdn.net/m5ADpuAdKTpadnUWmsCrHJ.jpg"
              alt="image logo"
              width="100px"
            />
          </Link>
          <Input placeholder="Search" size="xl" width="250px" />
          <Flex
            as="ul"
            listStyleType="none"
            p="0"
            m="0"
            bg={"green.500"}
            variant="soft-rounded"
            padding={5}
            justifyContent="space-between"
          >
            <Box as="li" ml="4">
              {/* <Link href="#">Courses</Link> */}
              <NavLink
                to="/courses"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                Courses
              </NavLink>
            </Box>
            <Box as="li" ml="4">
              {/* <Link href="#">Blog</Link> */}
              <NavLink
                to="/blog"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                Blog
              </NavLink>
            </Box>
            <Box as="li" ml="4">
              {/* <Link href="#">Contact</Link> */}
              <NavLink
                to="/contact"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                Contact
              </NavLink>
            </Box>
          </Flex>
          <Button colorScheme="red" ml="4">
            <NavLink
              to="/newAdmission"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              NewAdmission
            </NavLink>
          </Button>

          {/* Login / Signup Buttons */}
          <Flex ml="4">
            <Button colorScheme="teal" mr="2">
              <NavLink
                to="/login"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                SignIn
              </NavLink>
            </Button>
            <Button colorScheme="teal" variant="outline">
              <NavLink
                to="/signup"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                SignUp
              </NavLink>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
