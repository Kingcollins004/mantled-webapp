import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  Tab,
  Tabs,
  TabList,
} from "@chakra-ui/react";
import "../App.css";
import Sidebar from "./Sidebar";
import avatar from "../assets/png/avatar.jpg";
import "../App.css";
import { useDisclosure } from "@chakra-ui/react";
import ChooseAssets from "../card/ChooseAssets";
import arrowIcon from "../assets/svg/arrowIcon.svg";
import dummyImg from "../assets/png/dummyImg.png";
import Av1 from "../assets/png/avatar1.jpg";
import Av2 from "../assets/png/avatar2.jpg";
import Av3 from "../assets/png/avatar3.jpg";
import Arrow from "../assets/svg/arrowIcon.svg";
import RealEstateAssets from "../components/RealEstateAssets";
import { useMediaQuery } from "@chakra-ui/react";
import AddCollab from "../card/AddCollab";

const MyVault = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [displayModal, setDisplayModal] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUserAssets, setFilteredUserAssets] = useState([]);
  const [assetComp, setAssetComp] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleSwitchB = (option) => {
    setSelectedOption(option);
    setDisplayModal(false);
    return selectedOption
  };
  const handleSwitchA = (option) => {
    setSelectedOption(option);
    setDisplayModal(true);
    return selectedOption
  };

  const assets = [
    {
      name: "Real Estate",
      lastModified: "Last Modified, 9 days ago",
      image: require("../assets/svg/assetHouse.svg").default,
    },
    {
      name: "Tangible Assets",
      lastModified: "Last Modified, 9 days ago",
      image: require("../assets/svg/assetFolder.svg").default,
    },
    {
      name: "Financial Assets",
      lastModified: "Last Modified, 9 days ago",
      image: require("../assets/svg/assetCard.svg").default,
    },
    {
      name: "Personal Effect",
      lastModified: "Last Modified, 9 days ago",
      image: require("../assets/svg/assetCar.svg").default,
    },
    {
      name: "Debt and Liabilities",
      lastModified: "Last Modified, 9 days ago",
      image: require("../assets/svg/assetChart.svg").default,
    },
    {
      name: "Others",
      lastModified: "Last Modified, 9 days ago",
      image: require("../assets/svg/assetOthers.svg").default,
    },
  ];

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredAssets = assets.filter((asset) =>
      asset.name.toLowerCase().includes(searchTerm)
    );
    setFilteredUserAssets(filteredAssets);
    return filteredUserAssets
  };

  const handleComp = (asset) => {
    if (asset.name === "Real Estate") {
      setAssetComp(true);
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
        <Box display={{ base: "none", md: "flex" }}>
          <Sidebar />
        </Box>

        <Box width="100%" padding="2% 2% ">
          {isMobile ? (
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
          ) : (
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
          )}

          {assetComp ? (
            <RealEstateAssets />
          ) : (
            <div>
              <Box
                width="100%"
                marginTop={{ base: "8%", md: "2%" }}
                textAlign="center"
              >
                <Flex justifyContent="center">
                  <Tabs variant="solid-rounded">
                    <TabList>
                      <Tab
                        borderRadius="5px"
                        fontSize="14px"
                        onClick={handleSwitchA}
                      >
                        MY ASSETS
                      </Tab>
                      <Tab
                        borderRadius="5px"
                        fontSize="14px"
                        onClick={handleSwitchB}
                      >
                        COLLABORATORS
                      </Tab>
                    </TabList>
                  </Tabs>
                </Flex>
              </Box>

              {displayModal ? (
                <Box margin={{ base: "4% 1%", md: "2% 1%" }} width="100%">
                  <Flex justifyContent="center">
                    <Box
                      backgroundColor="white"
                      padding="2%"
                      borderRadius="23px"
                      width={{ base: "95%", md: "50%" }}
                    >
                      <Flex alignItems="center" marginBottom="3%" width="100%">
                        <Box>
                          <Text
                            color="#121936"
                            fontSize="14px"
                            fontWeight="medium"
                          >
                            MY ASSETS
                          </Text>
                        </Box>
                        <Spacer />
                        <Box>
                          <Button
                            backgroundColor="#7800F0"
                            color="white"
                            borderRadius="7px"
                            fontSize="12px"
                            height={{ base: "35px", md: "40px" }}
                            onClick={onOpen}
                          >
                            Add Assets
                          </Button>
                          <Modal
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                          >
                            <ModalOverlay />
                            <ModalContent
                              borderRadius="30px"
                              width={{ base: "95%", md: "45%" }}
                              maxW="unset"
                              textAlign="center"
                            >
                              <ModalBody>
                                <ChooseAssets />
                              </ModalBody>
                            </ModalContent>
                          </Modal>
                        </Box>
                      </Flex>
                      <Box>
                        <Input
                          fontSize="12px"
                          color="#121936"
                          backgroundColor="#E6E7EA"
                          placeholder="Search Assets"
                          type="search"
                          marginBottom="3%"
                          onChange={handleSearch}
                        />

                        <Box width="100%">
                          {assets
                            .filter((asset) => {
                              if (searchTerm === "") {
                                return true; // Return true to include all assets when searchTerm is empty
                              } else if (
                                asset.name
                                  .toLowerCase()
                                  .includes(searchTerm.toLowerCase())
                              ) {
                                return true; // Include assets where the name contains the searchTerm
                              }
                              return false; // Exclude assets that don't match the searchTerm
                            })
                            .map((asset, index) => (
                              <Flex marginBottom="5%" key={index}>
                                <Box
                                  backgroundColor="#FDF3EB"
                                  padding="2%"
                                  justifyContent="center"
                                  display="flex"
                                  borderRadius="17px"
                                  width="45px"
                                  height="45px"
                                >
                                  <Image src={asset.image} />
                                </Box>
                                <Box marginLeft="3%" marginTop="1%">
                                  <Text
                                    fontSize="14px"
                                    color="#000000"
                                    fontWeight="medium"
                                    onClick={() => {
                                      handleComp(asset);
                                    }}
                                  >
                                    {asset.name}
                                  </Text>
                                  <Text
                                    fontSize="12px"
                                    color="#8B8B8B"
                                    fontWeight="normal"
                                  >
                                    {asset.lastModified}
                                  </Text>
                                </Box>
                                <Spacer />
                                <Image src={arrowIcon} />
                              </Flex>
                            ))}
                        </Box>
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              ) : (
                <Flex width="100%" justifyContent="center">
                  <Box
                    backgroundColor="white"
                    padding="3%"
                    borderRadius="23px"
                    width={{ base: "97%", md: "50%" }}
                    marginTop="3%"
                  >
                    <Flex paddingTop="2%" marginBottom="5%" width="100%">
                      <Text fontWeight="medium" fontSize="16px" color="#121936">
                        Collaborators
                      </Text>
                      <Spacer />
                      <Button
                        height={{ base: "35px", md: "40px" }}
                        borderRadius="7px"
                        color="#7800F0"
                        fontWeight="semibold"
                        fontSize="14px"
                        onClick={onOpen}
                      >
                        Add Collaborators
                      </Button>
                      <Modal
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                      >
                        <ModalOverlay />
                        <ModalContent
                          borderRadius="30px"
                          width={{ base: "97%", md: "45%" }}
                          maxW="unset"
                          textAlign="center"
                        >
                          <ModalBody>
                            <AddCollab />
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                    </Flex>
                    <Box>
                      <Text marginBottom="3%" fontSize="12px" color="#8B8B8B">
                        PENDING COLLABORATORS
                      </Text>
                      <Flex marginBottom="2%">
                        <Image src={dummyImg} />
                        <Box paddingTop="1%">
                          <Text
                            color="#000000"
                            fontSize="12px"
                            fontWeight="semibold"
                          >
                            Olurotimi Ajao
                          </Text>
                          <Text fontSize="12px" color="#8B8B8B">
                            Created 3rd Jan,2022
                          </Text>
                        </Box>
                        <Spacer />
                        <Button
                          backgroundColor="#DBF0DE"
                          height="29px"
                          color="#177937"
                          fontSize="12px"
                        >
                          Resend Invite
                        </Button>
                      </Flex>
                      <Flex marginBottom="2%">
                        <Image src={dummyImg} />
                        <Box paddingTop="1%">
                          <Text
                            color="#000000"
                            fontSize="12px"
                            fontWeight="semibold"
                          >
                            Cynthia Morgan
                          </Text>
                          <Text fontSize="12px" color="#8B8B8B">
                            Created 3rd Jan,2022
                          </Text>
                        </Box>
                        <Spacer />
                        <Button
                          backgroundColor="#DBF0DE"
                          color="#177937"
                          height="29px"
                          fontSize="12px"
                        >
                          Resend Invite
                        </Button>
                      </Flex>
                    </Box>
                    <Box>
                      <Text marginBottom="3%" fontSize="12px" color="#8B8B8B">
                        ADDED COLLABORATORS
                      </Text>
                      <Flex marginLeft="1%" marginBottom="2%">
                        <Image width={{ base: "14%", md: "8%" }} src={Av1} />
                        <Box marginLeft="1%" paddingTop="1%">
                          <Text
                            color="#000000"
                            fontSize="12px"
                            fontWeight="semibold"
                          >
                            Tomiloluwa Ayayi
                          </Text>
                          <Text fontSize="12px" color="#8B8B8B">
                            Created 3rd Jan,2022
                          </Text>
                        </Box>
                        <Spacer />
                        <Image src={Arrow} />
                      </Flex>
                      <Flex marginLeft="1%" marginBottom="2%">
                        <Image width={{ base: "14%", md: "8%" }} src={Av2} />
                        <Box marginLeft="1%" paddingTop="1%">
                          <Text
                            color="#000000"
                            fontSize="12px"
                            fontWeight="semibold"
                          >
                            Destiny Etiko
                          </Text>
                          <Text fontSize="12px" color="#8B8B8B">
                            Created 3rd Jan,2022
                          </Text>
                        </Box>
                        <Spacer />
                        <Image src={Arrow} />
                      </Flex>
                      <Flex marginLeft="1%" marginBottom="2%">
                        <Image width={{ base: "14%", md: "8%" }} src={Av3} />
                        <Box marginLeft="1%">
                          <Text
                            color="#000000"
                            fontSize="12px"
                            fontWeight="semibold"
                          >
                            Philips Oluwatoyin
                          </Text>
                          <Text fontSize="12px" color="#8B8B8B">
                            Created 3rd Jan,2022
                          </Text>
                        </Box>
                        <Spacer />
                        <Image src={Arrow} />
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              )}
            </div>
          )}
        </Box>
      </Flex>
    </div>
  );
};

export default MyVault;
