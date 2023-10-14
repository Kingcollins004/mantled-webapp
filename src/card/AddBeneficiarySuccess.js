import React from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import "../App.css";
import confetti from "../assets/svg/confetti-popper.svg";

const AddBeneficiarySuccess = (props) => {


  const handleSubmit = () => {
    window.location.reload();
  };
  return (
    <div>
        <div>
          <Box padding="4% 0px" width="100%" textAlign="center">
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Image marginTop="5%" width="170px" src={confetti} />
              <Box marginTop="5%">
                <Text textAlign="center">
                  {props.text}
                </Text>
              </Box>
              <Box
                marginBottom="5%"
                width="100%"
                marginTop="5%"
                alignItems="center"
              >
                <Button
                  onClick={handleSubmit}
                  padding="0px 10%"
                  color="white"
                  backgroundColor="#7800F0"
                  fontSize="12px"
                >
                  Proceed
                </Button>
              </Box>
            </Flex>
          </Box>
        </div>
    </div>
  )
}

export default AddBeneficiarySuccess