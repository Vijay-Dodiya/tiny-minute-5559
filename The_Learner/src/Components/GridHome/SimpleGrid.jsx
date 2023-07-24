import React from "react";
import { Grid, GridItem, Box, Image } from "@chakra-ui/react";
import SideNavbar from "../GridHomeitem/SideNavbar";
// import Cardfor1 from "./../GridHomeitem/Cardfor1";
import SimpleThreeColumns from "./../GridHomeitem/Something";
import SplitScreen from "../GridHomeitem/Cardfor1";

const SimpleGrid = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      mt="20px"
    >
      <GridItem rowSpan={2} colSpan={1} bg="grey" borderRadius="20px">
        <SideNavbar />
      </GridItem>
      <GridItem colSpan={4} bg="papayawhip">
        <SplitScreen />
      </GridItem>

      <GridItem colSpan={4} borderRadius="20px">
        <SimpleThreeColumns />
      </GridItem>
    </Grid>
  );
};

export default SimpleGrid;
