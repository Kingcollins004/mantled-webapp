import React from "react";
import { Box, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import "../App.css";
import Sidebar from "./Sidebar";
import avatar from "../assets/png/avatar.jpg";
import arrowIcon from "../assets/svg/arrowIcon.svg";
import AssetModal from "../components/AssetModal";
import { useMediaQuery } from "@chakra-ui/react";

const Dashboard = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <Flex width="100%" height="100vh" backgroundColor="#FCFCFC">
        {isMobile ? (
          <Box width="100%" padding="2% 2% ">
            <Box width="100%">
              <Flex width="100%" justifyContent="center" alignItems="center">
                <Sidebar />
                <Box width="100%">
                  <Text
                    fontWeight="600"
                    color="#535353"
                    fontSize={{ base: "16px", md: "22px" }}
                  >
                    Welcome Back, David Haruna
                  </Text>
                  <Text fontSize="14px">Monthly Premium User</Text>
                </Box>
              </Flex>
            </Box>
            <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
              <Box
                width="225px"
                height="115px"
                padding="20px"
                borderRadius="20px"
                backgroundColor="#ffffff"
                flex="1"
                margin="3% 1%"
              >
                <Flex borderBottom="1px solid lightgrey" paddingBottom="5%">
                  <Text fontSize="12px" fontWeight="500" flex="1">
                    Total Assets Added
                  </Text>
                  <Image src={arrowIcon} />
                </Flex>
                <Flex>
                  <Text fontSize="34px" color="#121936">
                    18
                  </Text>
                  <Spacer />
                  <Text
                    fontSize="14px"
                    color="#979DAC"
                    marginTop="6%"
                    marginLeft="15px"
                  >
                    In the last
                    <br />
                    30 days
                  </Text>
                </Flex>
              </Box>
              <Box
                width="225px"
                height="115px"
                padding="20px"
                borderRadius="20px"
                backgroundColor="#ffffff"
                flex="1"
                margin="3% 1%"
              >
                <Flex borderBottom="1px solid lightgrey" paddingBottom="5%">
                  <Text fontSize="12px" fontWeight="500" flex="1">
                    Total Collaboration
                  </Text>
                  <Image src={arrowIcon} />
                </Flex>
                <Flex>
                  <Text fontSize="34px" color="#121936">
                    98
                  </Text>
                  <Spacer />
                  <Text
                    fontSize="14px"
                    color="#979DAC"
                    marginTop="6%"
                    marginLeft="15px"
                  >
                    In the last
                    <br />
                    30 days
                  </Text>
                </Flex>
              </Box>
              <Box
                width="225px"
                height="115px"
                padding="20px"
                borderRadius="20px"
                backgroundColor="#ffffff"
                flex="1"
                margin="3% 1%"
              >
                <Flex borderBottom="1px solid lightgrey" paddingBottom="5%">
                  <Text fontSize="12px" fontWeight="500" flex="1">
                    Acceepted Invites
                  </Text>
                  <Image src={arrowIcon} />
                </Flex>
                <Flex>
                  <Text fontSize="34px" color="#121936">
                    25
                  </Text>
                  <Spacer />
                  <Text
                    fontSize="14px"
                    color="#979DAC"
                    marginTop="6%"
                    marginLeft="15px"
                  >
                    In the last
                    <br />
                    30 days
                  </Text>
                </Flex>
              </Box>
              <Box
                width="225px"
                height="115px"
                padding="20px"
                borderRadius="20px"
                backgroundColor="#ffffff"
                flex="1"
                margin="3% 1%"
              >
                <Flex borderBottom="1px solid lightgrey" paddingBottom="5%">
                  <Text fontSize="12px" fontWeight="500" flex="1">
                    Pending Invites
                  </Text>
                  <Image src={arrowIcon} />
                </Flex>
                <Flex>
                  <Text fontSize="34px" color="#121936">
                    11
                  </Text>
                  <Spacer />
                  <Text
                    fontSize="14px"
                    color="#979DAC"
                    marginTop="6%"
                    marginLeft="15px"
                  >
                    In the last
                    <br />
                    30 days
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <AssetModal />
          </Box>
        ) : (
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
                    height={{ base: "40px", md: "60px" }}
                    width={{ base: "40px", md: "60px" }}
                    src={avatar}
                  />
                  <Box width="100%" marginLeft="1%">
                    <Text
                      fontWeight="600"
                      color="#535353"
                      fontSize={{ base: "16px", md: "22px" }}
                    >
                      Welcome Back, David Haruna
                    </Text>
                    <Text fontSize="14px">Monthly Premium User</Text>
                  </Box>
                </Flex>
              </Box>
              <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
                <Box
                  width="225px"
                  height="135px"
                  padding="32px"
                  borderRadius="20px"
                  backgroundColor="#ffffff"
                  flex="1"
                  margin="3% 1%"
                >
                  <Flex borderBottom="1px solid lightgrey" paddingBottom="5%">
                    <Text fontSize="12px" fontWeight="500" flex="1">
                      Total Assets Added
                    </Text>
                    <Image src={arrowIcon} />
                  </Flex>
                  <Flex>
                    <Text fontSize="44px" color="#121936">
                      18
                    </Text>
                    <Text
                      fontSize="14px"
                      color="#979DAC"
                      marginTop="6%"
                      marginLeft="15px"
                    >
                      In the last
                      <br />
                      30 days
                    </Text>
                  </Flex>
                </Box>
                <Box
                  width="225px"
                  height="135px"
                  padding="32px"
                  borderRadius="20px"
                  backgroundColor="#ffffff"
                  flex="1"
                  margin="3% 1%"
                >
                  <Flex borderBottom="1px solid lightgrey" paddingBottom="5%">
                    <Text fontSize="12px" fontWeight="500" flex="1">
                      Total Collaboration
                    </Text>
                    <Image src={arrowIcon} />
                  </Flex>
                  <Flex>
                    <Text fontSize="44px" color="#121936">
                      98
                    </Text>
                    <Text
                      fontSize="14px"
                      color="#979DAC"
                      marginTop="6%"
                      marginLeft="15px"
                    >
                      In the last
                      <br />
                      30 days
                    </Text>
                  </Flex>
                </Box>
                <Box
                  width="225px"
                  height="135px"
                  padding="32px"
                  borderRadius="20px"
                  backgroundColor="#ffffff"
                  flex="1"
                  margin="3% 1%"
                >
                  <Flex borderBottom="1px solid lightgrey" paddingBottom="5%">
                    <Text fontSize="12px" fontWeight="500" flex="1">
                      Acceepted Invites
                    </Text>
                    <Image src={arrowIcon} />
                  </Flex>
                  <Flex>
                    <Text fontSize="44px" color="#121936">
                      25
                    </Text>
                    <Text
                      fontSize="14px"
                      color="#979DAC"
                      marginTop="6%"
                      marginLeft="15px"
                    >
                      In the last
                      <br />
                      30 days
                    </Text>
                  </Flex>
                </Box>
                <Box
                  width="225px"
                  height="135px"
                  padding="32px"
                  borderRadius="20px"
                  backgroundColor="#ffffff"
                  flex="1"
                  margin="3% 1%"
                >
                  <Flex borderBottom="1px solid lightgrey" paddingBottom="5%">
                    <Text fontSize="12px" fontWeight="500" flex="1">
                      Pending Invites
                    </Text>
                    <Image src={arrowIcon} />
                  </Flex>
                  <Flex>
                    <Text fontSize="44px" color="#121936">
                      11
                    </Text>
                    <Text
                      fontSize="14px"
                      color="#979DAC"
                      marginTop="6%"
                      marginLeft="15px"
                    >
                      In the last
                      <br />
                      30 days
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <AssetModal />
            </Box>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default Dashboard;
