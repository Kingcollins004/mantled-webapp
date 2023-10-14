import React, { useState } from "react";
import { Box, Flex, Text, Image, Spacer, Input } from "@chakra-ui/react";
import "../App.css";
import "../App.css";
import arrowIcon from "../assets/svg/arrowIcon.svg";
import IndividualRealEstate from "./IndividualRealEstate";

const IndividualAssets = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [assetComp, setAssetComp] = useState(false);

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
    setFilteredAssets(filteredAssets);
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
        <Box width="100%" padding="2% 2% ">
          {assetComp ? (
            <IndividualRealEstate name={props.name} image={props.image} />
          ) : (
            <div>
              <Box margin="2% 1%" width="100%">
                <Flex justifyContent="center">
                  <Box
                    backgroundColor="white"
                    padding="2%"
                    borderRadius="23px"
                    width="50%"
                  >
                    <Flex alignItems="center" marginBottom="3%" width="100%">
                      <Box>
                        <Text
                          color="#121936"
                          fontSize="14px"
                          fontWeight="medium"
                        >
                          {props.name}'s Asset
                        </Text>
                      </Box>
                      <Spacer />
                      <Box>
                        <Box
                          borderRadius="50%"
                          textAlign="center"
                          padding="1%"
                          backgroundColor="#DBF0DE"
                        >
                          <Image
                            marginTop="2%"
                            width="40px"
                            src={props.Image}
                          />
                        </Box>
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
            </div>
          )}
        </Box>
      </Flex>
    </div>
  );
};

export default IndividualAssets;
