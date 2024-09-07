import { Flex } from "@chakra-ui/react";
import Header from "../../views/Header";
import FilterArea from "../../views/Products/FilterArea";
import ProductArea from "../../views/Products/ProductArea";
import Footer from "../../views/Footer";

const Products = () => {
  return (
    <>
      <Header />
      <Flex p={"40px"}>
        <FilterArea />
        <ProductArea />
      </Flex>
      <Footer />
    </>
  );
};

export default Products;
