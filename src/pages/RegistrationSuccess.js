import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import "../App.css";
import confetti from "../assets/svg/confetti-popper.svg";
import btncircle from "../assets/svg/btn-circle.svg";

const RegistrationSuccess = () => {
  return (
    <div>
      <Box
        width="100%"
        textAlign="center"
        height="100vh"
        backgroundColor="#F6F8FA"
        padding={{base: "40% 5%"}}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Image marginTop="5%" width="188px" src={confetti} />
          <Box marginTop="5%">
            <Text fontSize="28px" fontWeight="700">
              Yay! Account Created
            </Text>
            <Text textAlign="center">
              Welcome! Now complete your profile to unlock all the benefits of
              your new digital safe account.
            </Text>
          </Box>
          <Box marginTop="5%" alignItems="center">
            <Flex
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Link to="/dashboard" className="btncircle">
                <Image width="100px" src={btncircle} />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default RegistrationSuccess;
