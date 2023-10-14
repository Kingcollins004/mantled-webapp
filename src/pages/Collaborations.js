import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Spacer,
  Input,
} from "@chakra-ui/react";
import "../App.css";
import Sidebar from "./Sidebar";
import avatar from "../assets/png/avatar.jpg";
import "../App.css";
import { useMediaQuery } from "@chakra-ui/react";
import IndividualAssets from "../components/IndividualAssets";
import Emoji from "../assets/svg/Emoji1.svg";

const Collaborations = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [displayModal, setDisplayModal] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [setFilteredAssets] = useState([]);
  const [assetComp, setAssetComp] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");


  const handleSwitchB = (option) => {
    setSelectedOption(option);
    setDisplayModal(false);
  };
  const handleSwitchA = (option) => {
    setSelectedOption(option);
    setDisplayModal(true);
  };

  const assets = [
    {
      name: "Olurotimi Ajao",
      lastModified: "Created 3rd Jan. 2022",
      image: require("../assets/svg/assetHouse.svg").default,
    },
    {
      name: "David Paseda",
      lastModified: "Created 3rd Jan. 2022",
      image: require("../assets/svg/assetFolder.svg").default,
    },
  ];
  const people = [
    {
      name: "Dotun Akande",
      lastModified: "13 Assets Linked",
      image: require("../assets/svg/Emoji1.svg").default,
      bg: "#DBF0DE",
      updates: "7 new updates",
    },
    {
      name: "Seun Bankole",
      lastModified: "2 Assets Link",
      image: require("../assets/svg/emoji2.svg").default,
      bg: "#DBF0DE",
    },
    {
      name: "Susan Michelosin",
      lastModified: "9 Assets Linked",
      image: require("../assets/svg/emoji3.svg").default,
      updates: "7 new updates",
    },
    {
      name: "Seun Bankole",
      lastModified: "2 Assets Link",
      image: require("../assets/svg/emoji4.svg").default,
    },
    {
      name: "Seun Bankole",
      lastModified: "2 Assets Link",
      image: require("../assets/svg/emoji5.svg").default,
      bg: "#DBF0DE",
    },
  ];

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredAssets = assets.filter((asset) =>
      asset.name.toLowerCase().includes(searchTerm)
    );
    setFilteredAssets(filteredAssets);
  };

  const handleComp = (people) => {
    if (people.name === "Dotun Akande") {
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
            <IndividualAssets name={"Dotun Akande"} Image={Emoji} />
          ) : (
            <div>
              <Box width="100%" textAlign="center">
                <Flex justifyContent="center">
                  <Box
                    padding="0.8% 2%"
                    borderRadius="10px"
                    backgroundColor={selectedOption ? "#E6E7EA" : "black"}
                    color={selectedOption ? "black" : "white"}
                    onClick={handleSwitchA}
                  >
                    <Text fontSize="12px">Pending Invites</Text>
                  </Box>
                  <Box
                    padding="0.8% 2%"
                    borderRadius="0px 10px 10px 0px"
                    backgroundColor={selectedOption ? "black" : "#E6E7EA"}
                    color={selectedOption ? "white" : "black"}
                    marginLeft="-5px"
                    onClick={handleSwitchB}
                  >
                    <Text fontSize="12px">Linked Assets</Text>
                  </Box>
                </Flex>
              </Box>

              {displayModal ? (
                <Box margin="2% 1%" width="100%">
                  <Flex justifyContent="center">
                    <Box
                      backgroundColor="white"
                      padding="2%"
                      borderRadius="23px"
                      width="50%"
                    >
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
                              <Flex margin="5% 0" key={index}>
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
                                <Button
                                  padding="2% 3%"
                                  fontSize="12px"
                                  backgroundColor="#DBF0DE"
                                  color="black"
                                >
                                  Resend Invite
                                </Button>
                              </Flex>
                            ))}
                        </Box>
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              ) : (
                <Box margin="2% 1%" width="100%">
                  <Flex justifyContent="center">
                    <Box
                      backgroundColor="white"
                      padding="2%"
                      borderRadius="23px"
                      width="50%"
                    >
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
                          {people
                            .filter((asset) => {
      if (searchTerm === "") {
        return true; // Return true to include all assets when searchTerm is empty
      } else if (asset.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true; // Include assets where the name contains the searchTerm
      }
      return false; // Exclude assets that don't match the searchTerm
    })
                            .map((people, index) => (
                              <Flex margin="5% 0" key={index}>
                                <Box
                                  backgroundColor="#FDF3EB"
                                  padding="0.5%"
                                  justifyContent="center"
                                  display="flex"
                                  borderRadius="17px"
                                  width="45px"
                                  height="45px"
                                >
                                  <Image src={people.image} />
                                </Box>
                                <Box marginLeft="3%" marginTop="1%">
                                  <Text
                                    fontSize="14px"
                                    color="#000000"
                                    fontWeight="medium"
                                    onClick={() => {
                                      handleComp(people);
                                    }}
                                  >
                                    {people.name}
                                  </Text>
                                  <Text
                                    fontSize="12px"
                                    color="#8B8B8B"
                                    fontWeight="normal"
                                  >
                                    {people.lastModified}
                                  </Text>
                                </Box>
                                <Spacer />
                                {people.updates ? (
                                  <Button
                                    padding="2% 3%"
                                    fontSize="12px"
                                    backgroundColor="#DBF0DE"
                                    color="#177937"
                                    height="35px"
                                  >
                                    {people.updates}
                                  </Button>
                                ) : (
                                  <div></div>
                                )}
                              </Flex>
                            ))}
                        </Box>
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              )}
            </div>
          )}
        </Box>
      </Flex>
    </div>
  );
};

export default Collaborations;
