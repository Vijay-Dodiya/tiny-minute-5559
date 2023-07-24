import React from "react";
import { Flex, Box, Text, Icon, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BsGraphUp, BsPerson, BsPeople, BsCalendar } from "react-icons/bs"; // Chakra Icons

const SideNavbar = () => {
  return (
    <Box width="100%" height="100vh" color="white" py="4" px="25">
      <Flex
        direction="column"
        gap="20px"
        justifyContent="center"
        alignItems="center" // Align items to the center
      >
        <NavLink to="/teacher">
          <Flex align="center" gap="2">
            <Icon as={BsPerson} boxSize="24px" /> {/* Chakra Icon */}
            <Text fontSize="xl">Teacher</Text>
          </Flex>
          <Box>
            <Image
              src="https://st.depositphotos.com/1967477/4473/v/450/depositphotos_44739717-stock-illustration-female-teacher.jpg"
              alt="Dan Abramov"
            />
          </Box>
        </NavLink>

        <NavLink to="/students">
          <Flex align="center" gap="2">
            <Icon as={BsPeople} boxSize="24px" /> {/* Chakra Icon */}
            <Text fontSize="xl">Students</Text>
          </Flex>
          <Box>
            <Image
              src="https://img.freepik.com/free-vector/group-students-school_52683-43231.jpg?w=2000"
              alt="Dan Abramov"
            />
          </Box>
        </NavLink>
        <NavLink to="/events">
          <Flex align="center" gap="2">
            <Icon as={BsCalendar} boxSize="24px" /> {/* Chakra Icon */}
            <Text fontSize="xl">Events</Text>
          </Flex>
        </NavLink>
        <Box>
          <Image
            src="https://img.freepik.com/premium-vector/global-education-student-exchange-cartoon-background-composition-with-group-graduated-students-earth-globe-airplane-vector-illustration_1284-76760.jpg?w=2000"
            alt="Dan Abramov"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default SideNavbar;
