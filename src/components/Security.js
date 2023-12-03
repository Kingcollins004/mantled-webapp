import React, { useState } from "react";
import { Flex, Box, Text, Image, Spacer } from "@chakra-ui/react";
import arrowRight from "../assets/svg/arrow-right.svg";
import passwordIcon from "../assets/svg/passwordIcon.svg";
import ChnagePassword from "./ChnagePassword";

const Security = () => {
    const [displayModal, setDisplayModal] = useState(false)
    
    const handlePassword = () =>{
        setDisplayModal(true)
    }
  return (
    <div>
      <Flex
        backgroundColor="white"
        margin="0 20%"
        marginTop="10%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        padding="5% 0 10% 0"
      >
      {displayModal ? (
        <ChnagePassword />
      ): (<Box width="90%" >
          <Text fontSize="32px" fontWeight="600">
            Settings and Privacy
          </Text>
          <Flex onClick={handlePassword} alignItems="center" width="100%" marginTop="20%">
            <Box marginRight="5%">
              <Image src={passwordIcon} />
            </Box>
            <Box flex="2"> 
              <Text fontSize="24px" fontWeight="600">Change Password</Text>
              <Text>Manage your passwords</Text>
            </Box>
            <Spacer />
            <Box justifyContent="flex-end">
              <Image src={arrowRight} />
            </Box>
          </Flex>
        </Box>)}
        
      </Flex>
    </div>
  );
};

export default Security;
