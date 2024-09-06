import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import CheckBoxGroup from "../Components/CheckBoxGroup/CheckBoxGroup";
import InputGroup from "../Components/InputGroup/InputGroup";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SignUpLeft = () => {
  return (
    <Flex
      w={"50%"}
      direction={"column"}
      align={"center"}
      justify={"center"}
      textAlign={"center"}
    >
      <Box
        bg={"#FAFAFA"}
        p={12}
        borderRadius={"8px"}
        border={"1px solid #F5F5F5"}
      >
        <Flex direction={"column"} gap={12}>
          <Heading m={0} fontSize={24} lineHeight={"28.8px"} fontWeight={600}>
            Welcome to
          </Heading>
          <Box>
            <Heading
              m={0}
              fontSize={"40px"}
              fontWeight={700}
              lineHeight={"48px"}
            >
              Furni<span style={{ color: "#4977EE" }}>Flex</span>{" "}
            </Heading>
            <Text color={"#707070"}>
              Signup for purchase your desire products
            </Text>
          </Box>
          <SimpleGrid columns={2} spacing={12}>
            <InputGroup />
            <InputGroup />
          </SimpleGrid>

          <InputGroup />
          <InputGroup />
          <CheckBoxGroup />
          <Button
            h={56}
            bg={"#000000"}
            color={"white"}
            fontWeight={600}
            fontSize={17}
            lineHeight={17}
            border={"none"}
            borderRadius={"6px"}
          >
            {" "}
            Signup
          </Button>

          <Box position="relative" padding="10">
            <Divider border={"2px solid #F1F0F0"} />
            <AbsoluteCenter bg="white" px="4">
              or
            </AbsoluteCenter>
          </Box>
          <Flex gap={"16px"}>
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="green.500"
              leftIcon={<FcGoogle size={24} />}
            >
              Sign in with Google
            </Button>
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="green.500"
              leftIcon={<FaApple size={24} />}
            >
              Sign in with Apple
            </Button>
          </Flex>
          <Text fontSize={14}>
            Have an account?
            <Link
              fontWeight={500}
              textDecoration={"none"}
              color={"#0F3DDE"}
              href="#"
              pl={5}
            >
              Sign In
            </Link>
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SignUpLeft;
