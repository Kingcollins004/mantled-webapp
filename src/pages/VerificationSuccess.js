import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

import "../App.css";
import confetti from "../assets/svg/confetti-popper.svg";
import btncircle from "../assets/svg/btn-circle.svg";
import line from "../assets/svg/success-progress-line.svg";
import arrow from "../assets/svg/back-arrow.svg";

const VerificationSuccess = () => {
  return (
    <div>
      <Box
        width="100%"
        textAlign="center"
        height="100vh"
        backgroundColor="#F6F8FA"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Image marginTop={{base: "35%", md: "5%"}} width="188px" src={confetti} />
          <Box marginTop="5%">
            <Text fontSize={{base: "20px", md: "28px"}} fontWeight="700">
              Yay! Account Created
            </Text>
            <Text margin={{base: "2%", md: "0%"}} fontSize={{base: "12px", md: "14px"}} textAlign="center">
              Welcome! Now complete your profile to unlock all the benefits of
              your new digital safe account.
            </Text>
          </Box>
          <Box marginTop={{base: "15%", md: "5%"}} alignItems="center">
            <Flex
              justifyContent="center"
              alignItems="center"
              textAlign="center"

            >
              <Link to="/profile-registration" className="btncircle">
                <Image width="100px" src={btncircle} />
              </Link>
            </Flex>

            <Image marginTop={{base:"25%", md: "15%"}} src={line} />
            <Link to="/profile-registration">
              <Flex justifyContent="center" alignItems="center" marginTop="20%">
                <Text>Complete Profile</Text>
                <Image
                  marginLeft="10px"
                  width="15px"
                  transform="scaleX(-1)"
                  src={arrow}
                />
              </Flex>
            </Link>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default VerificationSuccess;
