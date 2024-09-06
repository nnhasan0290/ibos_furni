import { Flex } from "@chakra-ui/react";
import SignupRight from "../../views/SignupRight";
import SignUpLeft from "../../views/SignupLeft";

const SignUp = () => {
  return (
    <Flex bg={"#"} justify={"space-around"} p={0} m={0} h={"100vh"}>
      <SignUpLeft />
      <SignupRight />
    </Flex>
  );
};

export default SignUp;
