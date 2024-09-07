import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Footer from "../../views/Footer";
import Header from "../../views/Header";

import Chair from "../../assets/chair_1.png";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import CustomButton from "../../Components/CustomButton";

const CheckOut = () => {
  return (
    <>
      <Header />
      <Flex p={"40px"} justify={"space-around"} gap={5}>
        <Flex direction={"column"} width={"70%"}>
          <Heading size={"md"} pb={3}>
            An Overview of your order
          </Heading>
          <Flex direction={"column"} bg={"#FAFAFA"} p={3}>
            <Flex alignItems={"top"} justify={"space-between"} width={"100%"}>
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
                  Recliner Chair Steel
                </Text>
              </Flex>
              <RxCross2 />
            </Flex>
            <Text textAlign={"right"}>€299.00</Text>
          </Flex>
          <Divider />
          <Flex direction={"column"} bg={"#FAFAFA"} p={3}>
            <Flex alignItems={"top"} justify={"space-between"} width={"100%"}>
              <Flex alignItems={"center"} gap={2}>
                <Flex
                  border={"1px solid #DEDEDE"}
                  fontSize={"20px"}
                  bg={"white"}
                  px={1}
                  align={"center"}
                  gap={0.5}
                >
                  <BiMinus /> 1 <BiPlus />
                </Flex>
                <Image bg="#EAEAEA" width={"88px"} src={Chair} />
                <Text alignSelf={"start"} fontWeight={600}>
                  Recliner Chair Steel
                </Text>
              </Flex>
              <RxCross2 />
            </Flex>
            <Text textAlign={"right"}>€299.00</Text>
          </Flex>
          <Divider />
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
              <Text>1071.00</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text>SubTotal</Text>
              <Text>1071.00</Text>
            </Flex>
            <Divider />
            <Flex justify={"space-between"}>
              <Text>Total</Text>
              <Text>1071.00</Text>
            </Flex>
          </Flex>
          <CustomButton />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default CheckOut;
