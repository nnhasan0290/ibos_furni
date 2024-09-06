import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Bg from "../assets/login/loginBackground.png";
import RoundF from "../assets/login/f_round.png";

const SignupRight = () => {
  return (
    <Flex
      bgImage={`url(${Bg})`}
      w={"50%"}
      color={"white"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      justify={"center"}
      align={"center"}
      direction={"column"}
      gap={17}
    >
      <Image src={RoundF} />
      <Heading fontWeight={700} fontSize={40} m={0}>
        Furni<span style={{ color: "#1E99F5" }}>Flex</span>{" "}
      </Heading>
      <Text
        color={"#C8C4C4"}
        fontSize={16}
        lineHeight={"19.2px"}
        textAlign={"center"}
        m={0}
      >
        Discover a seamless shopping experience with our curated <br />
        collection of products. From fashion to electronics, we bring quality.
      </Text>
    </Flex>
  );
};

export default SignupRight;
