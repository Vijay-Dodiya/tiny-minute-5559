import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SideNavbar from "./../Navbar/SideNavbar";

const SimpleGrid = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg="tomato">
        <SideNavbar />
      </GridItem>
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={4} bg="tomato" />
    </Grid>
  );
};

export default SimpleGrid;
