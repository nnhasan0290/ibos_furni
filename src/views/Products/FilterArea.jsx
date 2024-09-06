import { Box, Divider, Text } from "@chakra-ui/react";

const FilterArea = () => {
  return (
    <Box
      borderRight={"1px solid #f1f1f1"}
      px={"20px"}
      fontSize={"22px"}
      fontWeight={600}
      lineHeight={"26.4px"}
      color={"#717171"}
    >
      <Text
        m={"10px"}
        p={"10px"}
        transition={"all 0.3s ease"}
        cursor={"pointer"}
        borderRadius="8px"
        width={"200px"}
        _hover={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        Rocking Chair
      </Text>
      <Divider />
      <Text
        m={"10px"}
        p={"10px"}
        transition={"all 0.3s ease"}
        cursor={"pointer"}
        width={"200px"}
        borderRadius="8px"
        _hover={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        Rocking Chair
      </Text>
      <Divider />
      <Text
        m={"10px"}
        p={"10px"}
        transition={"all 0.3s ease"}
        cursor={"pointer"}
        width={"200px"}
        borderRadius="8px"
        _hover={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        Rocking Chair
      </Text>
    </Box>
  );
};

export default FilterArea;
