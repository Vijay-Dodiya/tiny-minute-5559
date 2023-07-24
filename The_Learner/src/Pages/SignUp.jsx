import React, { useState, useReducer } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Navigate } from "react-router-dom";

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SIGNUP_START":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        signUpSuccess: true,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

const SignUp = () => {
  const [login, setLogin] = useState(false);
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isLoading: false,
    isError: false,
    signUpSuccess: false,
  };

  const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleSignUp = async () => {
    dispatch({ type: "SIGNUP_START" });

    try {
      // Send a POST request to your signup endpoint with the user data
      const response = await axios.post("https://reqres.in/api/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        // Handle successful signup
        console.log("Signup successful");
        // Redirect to the login page
        dispatch({ type: "SIGNUP_SUCCESS" });
      } else {
        // Handle signup error
        console.error("Signup failed");
        dispatch({ type: "SIGNUP_ERROR" });
      }
    } catch (error) {
      console.error("Signup failed", error);
      dispatch({ type: "SIGNUP_ERROR" });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value: value,
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={formData.showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_FIELD",
                        field: "showPassword",
                        value: !formData.showPassword,
                      })
                    }
                  >
                    {formData.showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                isLoading={formData.isLoading}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSignUp}
              >
                Sign up
              </Button>
              {formData.isError && (
                <Text color="red.500">Signup failed. Please try again.</Text>
              )}
              {formData.signUpSuccess && (
                <Text color="green.500">
                  Signup successful! You can now log in.
                </Text>
              )}
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} onClick={() => setLogin(true)}>
                  {login === false ? "Login" : <Navigate to={"/login"} />}
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
