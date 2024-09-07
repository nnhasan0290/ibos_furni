import { Flex } from "@chakra-ui/react";
import SignupRight from "../../views/SignupRight";
import LoginLeft from "../../views/LoginLeft";

const SignUp = () => {
  return (
    <Flex bg={"#"} justify={"space-around"} p={0} m={0} h={"100vh"}>
      <LoginLeft />
      <SignupRight />
    </Flex>
  );
};

export default SignUp;
