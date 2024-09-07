import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Logo from "../Components/Logo";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      bg={"black"}
      color={"#81859F"}
      fontSize={"18px"}
      fontWeight={600}
      p={"40px"}
    >
      <Flex justifyContent={"space-between"} alignItems={"start"} mb={"40px"}>
        <Logo />
        <Flex width={"70%"} justifyContent={"space-around"}>
          <Flex direction={"column"}>
            <Heading size={"sm"} color={"white"} pb={2}>
              About us
            </Heading>
            <Text>Master Plan</Text>
            <Text>Jobs</Text>
            <Text>Invest</Text>
            <Text>Pressroom</Text>
            <Text>Blog</Text>
            <Text>Contact</Text>
          </Flex>
          <Flex direction={"column"}>
            <Heading size={"sm"} color={"white"} pb={2}>
              About us
            </Heading>
            <Text>Master Plan</Text>
            <Text>Jobs</Text>
            <Text>Invest</Text>
            <Text>Pressroom</Text>
            <Text>Blog</Text>
            <Text>Contact</Text>
          </Flex>
          <Flex direction={"column"}>
            <Heading size={"sm"} color={"white"} pb={2}>
              About us
            </Heading>
            <Text>Master Plan</Text>
            <Text>Jobs</Text>
            <Text>Invest</Text>
            <Text>Pressroom</Text>
            <Text>Blog</Text>
            <Text>Contact</Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider />
      <Flex justifyContent={"space-between"} py={10}>
        <Flex gap={2} color={"white"}>
          <FaFacebook />
          <FaInstagramSquare />
          <FaXTwitter />
          <FaLinkedin />
        </Flex>
        <Flex>
          <Text>March22 Recap</Text>
          <Text>Privacy Policy</Text>
          <Text>General Terms</Text>
          <Text>Contact</Text>
        </Flex>
        <Text>United States(English)</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
