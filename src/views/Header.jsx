import { Avatar, Button, Flex, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import Logo from "../Components/Logo";
import { BiShoppingBag } from "react-icons/bi";
import { ContextConsumer } from "../utils/Context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { state } = ContextConsumer();

  const navigate = useNavigate();

  return (
    <Flex
      borderBottom={"1px solid #F1F1F1"}
      justifyContent={"space-around"}
      align={"center"}
      padding={"40px"}
    >
      <Logo />

      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="gray" variant="ghost">
          Home
        </Button>
        <Button
          onClick={() => navigate("/products")}
          colorScheme="gray"
          variant="ghost"
          isActive
        >
          Products
        </Button>
        <Button colorScheme="gray" variant="ghost">
          Categories
        </Button>
        <Button colorScheme="gray" variant="ghost">
          Custom
        </Button>
        <Button colorScheme="gray" variant="ghost">
          Blog
        </Button>
      </Stack>

      <Wrap align={"center"}>
        <WrapItem
          position={"relative"}
          cursor={"pointer"}
          onClick={() => navigate("/checkout")}
        >
          <BiShoppingBag size={33} />
          {state.length ? (
            <span
              style={{
                position: "absolute",
                bottom: "-2.5px",
                color: "#fff",
                background: "black",
                borderRadius: "50%",
                height: "15px",
                width: "15px",
                fontSize: "11px",
                textAlign: "center",
                fontWeight: "600",
                right: 0,
              }}
            >
              {state.length}
            </span>
          ) : (
            ""
          )}
        </WrapItem>
        <WrapItem>
          <Avatar size={"sm"} src="https://bit.ly/broken-link" />
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

export default Header;
