import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  FormHelperText,
  RadioGroup,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import ModelForm from "../Components/ModelForm";
import { AppContext } from "./../Context/AppContextProvider";

const Form1 = ({ formData, setFormData }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            name="firstName"
            placeholder="First name"
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            name="lastName"
            placeholder="Last name"
            onChange={handleInputChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          onChange={handleInputChange}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="number" fontWeight={"normal"} mt="2%">
          Phone Number
        </FormLabel>
        <Input
          id="number"
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleInputChange}
        />
      </FormControl>
    </>
  );
};

const Form2 = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInputChange}
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInputChange}
        />
      </FormControl>
    </>
  );
};

const Form3 = ({ formData, setFormData, onSubmit }) => {
  const handleInputChange = (e) => {
    if (e.target.name === "emp_status") {
      setFormData({ ...formData, emp_status: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Bank Details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{ color: "gray.50" }}
          >
            Account Name
          </FormLabel>
          <Input
            type="text"
            placeholder="Account Name"
            rounded="md"
            name="account_name"
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{ color: "gray.50" }}
          >
            Account Type
          </FormLabel>
          <Select
            name="account_type"
            onChange={handleInputChange}
            placeholder="Select option"
            rounded="md"
          >
            <option>Savings</option>
            <option>Checking</option>
            <option>Business</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{ color: "gray.50" }}
          >
            Deposit Amount
          </FormLabel>
          <Input
            type="number"
            name="deposite_amount"
            onChange={handleInputChange}
            placeholder="Deposit Amount"
            rounded="md"
          />
        </FormControl>

        <FormControl>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{ color: "gray.50" }}
          >
            Gender
          </FormLabel>
          <Input
            type="text"
            name="gender"
            onChange={handleInputChange}
            placeholder="Gender"
            rounded="md"
          />
        </FormControl>

        <FormControl>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{ color: "gray.50" }}
          >
            Bank Email
          </FormLabel>
          <Input
            type="email"
            name="bankemail"
            placeholder="Bank@example.com"
            rounded="md"
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="employee_status"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Employment Status
          </FormLabel>
          <Select
            id="employee_status"
            name="employee_status"
            autoComplete="employee_status"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={handleInputChange}
          >
            <option>Employed</option>
            <option>UnEmployed</option>
            <option>Self-Employed</option>
          </Select>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function NewAdmission() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const { isAuth } = useContext(AppContext);

  const handleNext = () => {
    setStep(step + 1);
    if (step === 2) {
      setProgress(100);
    } else {
      setProgress(progress + 33.33);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
    setProgress(progress - 33.33);
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalSubmit = () => {
    // Perform API POST request with formData
    axios
      .post("https://api.example.com/endpoint", formData)
      .then((response) => {
        // Request was successful
        setShowModal(false);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        // Request encountered an error
        console.error("Error creating account:", error);
        setShowModal(false);
        toast({
          title: "Error",
          description: "An error occurred while creating your account.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  if (!isAuth) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <>
      <h1>Newadmissions</h1>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 && <Form1 formData={formData} setFormData={setFormData} />}
        {step === 2 && <Form2 formData={formData} setFormData={setFormData} />}
        {step === 3 && (
          <Form3
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
          />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={handlePrevious}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={handleNext}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 && (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}
          </Flex>
        </ButtonGroup>
      </Box>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submitted Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Display submitted form data */}

            <ModelForm formData={formData} />
          </ModalBody>
          <Button
            colorScheme="teal"
            variant="solid"
            mx={4}
            mb={4}
            onClick={handleModalSubmit}
          >
            Confirm
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
}
