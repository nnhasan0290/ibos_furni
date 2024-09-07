import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import Footer from "../../views/Footer";
import Header from "../../views/Header";

import Chair from "../../assets/chair_1.png";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import CustomButton from "../../Components/CustomButton";
import { ContextConsumer } from "../../utils/Context";

const CheckOut = () => {
  const { state, dispatch } = ContextConsumer();
  const toast = useToast();

  const subtotal = state.reduce((sum, each) => (sum += Number(each.price)), 0);

  return (
    <>
      <Header />
      <Flex p={"40px"} justify={"space-around"} gap={5}>
        <Flex direction={"column"} width={"70%"}>
          <Heading size={"md"} pb={3}>
            An Overview of your order
          </Heading>
          {state.map((product) => (
            <>
              <Flex key={product.id} direction={"column"} bg={"#FAFAFA"} p={3}>
                <Flex
                  alignItems={"top"}
                  justify={"space-between"}
                  width={"100%"}
                >
                  <Flex alignItems={"center"} gap={2}>
                    <Flex
                      border={"1px solid #DEDEDE"}
                      fontSize={"20px"}
                      bg={"white"}
                      px={1}
                      align={"center"}
                      gap={0.5}
                      cursor={"pointer"}
                    >
                      <BiMinus /> 1 <BiPlus />
                    </Flex>
                    <Image bg="#EAEAEA" width={"88px"} src={Chair} />
                    <Text alignSelf={"start"} fontWeight={600}>
                      {product.title}
                    </Text>
                  </Flex>
                  <Box
                    cursor={"pointer"}
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: product });
                      toast({
                        title: "Product Removed...",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                      });
                    }}
                  >
                    <RxCross2 />
                  </Box>
                </Flex>
                <Text textAlign={"right"}>€{product.price} </Text>
              </Flex>
              <Divider />
            </>
          ))}
        </Flex>

        <Flex direction={"column"} width={"30%"}>
          <Heading size={"md"} pb={3}>
            Other Details
          </Heading>
          <Flex
            direction={"column"}
            bg={"#FAFAFA"}
            borderRadius={"5px"}
            p={3}
            mb={2}
            gap={3}
          >
            <Flex justify={"space-between"}>
              <Text>SubTotal</Text>
              <Text>€{subtotal}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text>Shipping</Text>
              <Text>Free</Text>
            </Flex>
            <Divider />
            <Flex justify={"space-between"} fontWeight={700}>
              <Text>Total</Text>
              <Text>€{subtotal}</Text>
            </Flex>
          </Flex>
          <CustomButton text={"Checkout"} />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default CheckOut;
