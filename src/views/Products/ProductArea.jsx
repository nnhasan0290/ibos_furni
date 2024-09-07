import {
  Flex,
  Heading,
  Image,
  Text,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import CustomButton from "../../Components/CustomButton";
import Products from "../../assets/products.json";
import Chair from "../../assets/chair_1.png";
import { ContextConsumer } from "../../utils/Context";

const ProductArea = () => {
  const { state, dispatch } = ContextConsumer();
  const toast = useToast();
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
            <Image src={Chair} />
          </Flex>
          <Flex alignItems={"start"} flexDirection={"column"} gap={3}>
            <Heading color={"#343434"} fontSize={"18px"}>
              {each.title}
            </Heading>
            <Flex fontSize={"18px"} gap={2}>
              <Text fontWeight={700}>€{each.price}</Text>
              <Text
                fontWeight={500}
                color={"#838383"}
                textDecoration={"line-through"}
              >
                €{each.oldPrice}
              </Text>
              <Text fontWeight={700} color={"#B92E2E"}>
                {each.off} OFF
              </Text>
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
            <CustomButton
              logo={true}
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: each });
                toast({
                  title: "Added to Cart Successfully..!",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
            />
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ProductArea;
