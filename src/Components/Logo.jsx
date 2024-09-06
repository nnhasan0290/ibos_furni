import { Flex, Heading, Image } from "@chakra-ui/react";
import F from "../assets/login/f_round.png";

const Logo = () => {
  return (
    <Flex alignItems={"center"} gap={2}>
      <Image src={F} h={"38px"} />
      <Heading m={0} fontSize={"20px"} fontWeight={700} lineHeight={"48px"}>
        Furni<span style={{ color: "#4977EE" }}>Flex</span>{" "}
      </Heading>
    </Flex>
  );
};

export default Logo;
