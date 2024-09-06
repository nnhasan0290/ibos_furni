import { Flex } from "@chakra-ui/react";
import Header from "../../views/Header";
import FilterArea from "../../views/Products/FilterArea";
import ProductArea from "../../views/Products/ProductArea";

const Products = () => {
  return (
    <>
      <Header />
      <Flex p={"40px"}>
        <FilterArea />
        <ProductArea />
      </Flex>
    </>
  );
};

export default Products;
