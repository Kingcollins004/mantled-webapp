import React from "react";
import { Box, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import "../App.css";
import Sidebar from "./Sidebar";
import avatar from "../assets/png/avatar.jpg";
import lawIcon from "../assets/svg/lawIcon.svg";
import arrowIcon from "../assets/svg/arrowIcon.svg";
import shield from "../assets/svg/shieldIcon.svg";
import support from "../assets/svg/supportIcon.svg";
import People from "../assets/svg/phoneIcon.svg";
import { useState } from "react";
import Lawyer from "../components/Lawyer";
import UserBeneficiary from "../components/UserBeneficiary";
import Security from "../components/Security";

const Settings = () => {
  const [lawyer, setLawyer] = useState(false);
  const [beneficiary, setBeneficiary] = useState(false);
  const [security, setSecurity] = useState(false);

  const handleLawyer = () => {
    setLawyer(true);
    setBeneficiary(false);
    setSecurity(false);
  };

  const handleBeneficiary = () => {
    setBeneficiary(true);
    setLawyer(false);
    setSecurity(false);
  };

  const handleSecurity = () => {
    setSecurity(true);
    setLawyer(false);
    setBeneficiary(false);
  };

  const renderContent = () => {
    if (lawyer) {
      return <Lawyer />;
    } else if (beneficiary) {
      return <UserBeneficiary />;
    } else if (security) {
      return <Security />;
    } else {
      return (
        <Flex
          backgroundColor="white"
          margin="0 25%"
          marginTop="5%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          padding="5% 0"
          borderRadius="16px"
          height="70%"
        >
          <Text width="100%" padding="0 5%" fontSize="42px" textAlign="left">
            Settings
          </Text>
          <Flex flexDirection="column" width="100%" padding="5%">
            <Flex
              onClick={handleLawyer}
              width="100%"
              marginY="2%"
              alignItems="center"
              cursor="pointer"
            >
              <Image src={lawIcon} />
              <Box marginLeft="5%">
                <Text fontSize="20px" fontWeight="600">
                  My Lawyer
                </Text>
                <Text color="#7F7F84" fontSize="12px">
                  Manage lawyer details
                </Text>
              </Box>
              <Spacer />
              <Image src={arrowIcon} />
            </Flex>

            <Flex
              onClick={handleBeneficiary}
              width="100%"
              marginY="2%"
              alignItems="center"
              cursor="pointer"
            >
              <Image src={People} />
              <Box marginLeft="5%">
                <Text fontSize="20px" fontWeight="600">
                  Beneficiaries
                </Text>
                <Text color="#7F7F84" fontSize="12px">
                  Manage your saved beneficiaries
                </Text>
              </Box>
              <Spacer />
              <Image src={arrowIcon} />
            </Flex>

            <Flex
              onClick={handleSecurity}
              cursor="pointer"
              width="100%"
              marginY="2%"
              alignItems="center"
            >
              <Image src={shield} />
              <Box marginLeft="5%">
                <Text fontSize="20px" fontWeight="600">
                  Security & Privacy
                </Text>
                <Text color="#7F7F84" fontSize="12px">
                  Set your security preference
                </Text>
              </Box>
              <Spacer />
              <Image src={arrowIcon} />
            </Flex>

            <Flex
              width="100%"
              marginY="2%"
              cursor="pointer"
              alignItems="center"
            >
              <Image src={support} />
              <Box marginLeft="5%">
                <Text fontSize="20px" fontWeight="600">
                  Support & Help Desk
                </Text>
                <Text color="#7F7F84" fontSize="12px">
                  24/7 customer support
                </Text>
              </Box>
              <Spacer />
              <Image src={arrowIcon} />
            </Flex>
          </Flex>
        </Flex>
      );
    }
  };

  return (
    <div>
      <Flex
        width="100%"
        height="100vh"
        backgroundColor="#FCFCFC"
        padding="0px 2%"
      >
        <Sidebar />

        <Box width="100%" padding="2% 2% ">
          <Box width="100%">
            <Flex width="100%">
              <Image
                borderRadius="50%"
                height="60px"
                width="60px"
                src={avatar}
              />
              <Box width="100%" marginLeft="1%">
                <Text fontWeight="600" color="#535353" fontSize="22px">
                  Welcome Back, David Haruna
                </Text>
                <Text fontSize="14px">Monthly Premium User</Text>
              </Box>
            </Flex>
          </Box>
          {renderContent()}
        </Box>
      </Flex>
    </div>
  );
};

export default Settings;
