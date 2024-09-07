import { Flex, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import CustomButton from "../../Components/CustomButton";
import Products from "../../assets/products.json";

const ProductArea = () => {
  return (
    <Wrap px={3} spacing={"30px"} justify={"center"}>
      {Products.map((each, i) => (
        <WrapItem
          key={i}
          flexDirection={"column"}
          width={"277px"}
          p={3}
          border={"1px solid #f1f1f1"}
          borderRadius={"6px"}
          gap={3}
          transition={"all 0.3 ease"}
          alignItems={"center"}
          _hover={{
            boxShadow: "xl",
          }}
        >
          <Flex
            bg={"#F2F2F2"}
            width={"245px"}
            align={"center"}
            justify={"center"}
          >
            <Image src={import.meta.env.BASE_URL + each.image} />
          </Flex>
          <Flex alignItems={"start"} flexDirection={"column"} gap={3}>
            <Heading color={"#343434"} fontSize={"18px"}>
              {each.title}
            </Heading>
            <Flex fontSize={"18px"}>
              <Text>€299.00</Text>
              <Text>€299.00</Text>
              <Text>30% OFF</Text>
            </Flex>
            <Text
              fontSize={"14px"}
              fontWeight={400}
              color={"#838383"}
              overflow={"hidden"}
            >
              It has a backrest that can be tilted back, and often a footrest
              extended
            </Text>
            <CustomButton />
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ProductArea;
