import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcReadingEbook,
} from "react-icons/fc";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Flex w="100%" h={56} bg="gray.400" align="center" justify="center">
        {icon}
      </Flex>
      <Box p={5}>
        <Heading size="md" mb={2}>
          {heading}
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={4}>
          {description}
        </Text>
        <Button
          variant="outline"
          colorScheme="blue"
          size="sm"
          w="100%"
          as="a"
          href={href}
        >
          Read more
        </Button>
      </Box>
    </Box>
  );
};

export default function Blog() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Know About Us
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Blog Post 1"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Blog Post 2"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Educational Blog"}
            icon={<Icon as={FcReadingEbook} w={10} h={10} />}
            description={"Learn new things through our educational blog posts."}
            href={"#"}
          />
          <Card
            heading={"Blog Post 2"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
          />
          <Card
            heading={"Educational Blog"}
            icon={<Icon as={FcReadingEbook} w={10} h={10} />}
            description={"Learn new things through our educational blog posts."}
            href={"#"}
          />
          <Card
            heading={"Educational Blog"}
            icon={<Icon as={FcReadingEbook} w={10} h={10} />}
            description={"Learn new things through our educational blog posts."}
            href={"#"}
          />

          {/* Add more cards here */}
        </Flex>
      </Container>
    </Box>
  );
}
