import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link as LLink,
  Text,
  useToast,
} from "@chakra-ui/react";
import CheckBoxGroup from "../Components/CheckBoxGroup/CheckBoxGroup";
import InputGroup from "../Components/InputGroup/InputGroup";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";
import { useState } from "react";

const LoginLeft = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Event handler for input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === formData.email &&
      user.password === formData.password
    ) {
      toast({
        title: "Login Successfully..",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      navigate("/products");
    } else {
      toast({
        title: "Account not Found..",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
    }
  };

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
        p={4}
        py={8}
        borderRadius={"8px"}
        border={"1px solid #F5F5F5"}
      >
        <form onSubmit={handleSubmit}>
          <Flex direction={"column"} gap={3}>
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

            <InputGroup
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              name="email"
              required={true}
              onChange={handleInputChange}
            />
            <InputGroup
              label="Password"
              placeholder={"Enter your password"}
              type="password"
              name={"password"}
              required={"true"}
              onChange={handleInputChange}
            />
            <CheckBoxGroup />
            <CustomButton type="Submit" text="Sign In" />

            <Box position="relative" fontSize={"14px"} padding="2">
              <Divider />
              <AbsoluteCenter>or</AbsoluteCenter>
            </Box>
            <Flex gap={"16px"}>
              <Button
                size="md"
                height="48px"
                width="200px"
                border="2px"
                borderColor="green.500"
                leftIcon={<FcGoogle size={24} />}
                fontWeight={"14px"}
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
                fontWeight={"14px"}
              >
                Sign in with Apple
              </Button>
            </Flex>
            <Text fontSize={14}>
              Don't have an account?
              <LLink
                fontWeight={500}
                textDecoration={"none"}
                color={"#0F3DDE"}
                href="#"
                pl={2}
              >
                <Link to="signup">Sign Up</Link>
              </LLink>
            </Text>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginLeft;
