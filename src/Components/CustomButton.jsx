import { Flex } from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";

const CustomButton = () => {
  return (
    // Button from facebook.com
    <Flex
      gap={2}
      justify={"center"}
      as="button"
      p={3}
      width={"100%"}
      lineHeight="1.2"
      cursor={"pointer"}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      px="8px"
      borderRadius="5px"
      fontSize="14px"
      fontWeight="semibold"
      bg="black"
      borderColor="#ccd0d5"
      color="#fff"
      _hover={{ bg: "#262626" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#f1f1f1",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
    >
      <BiShoppingBag />
      Add to Cart
    </Flex>
  );
};

export default CustomButton;
