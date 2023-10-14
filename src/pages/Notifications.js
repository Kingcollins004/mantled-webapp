import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Spacer,
  Input,
} from "@chakra-ui/react";
import "../App.css";
import Sidebar from "./Sidebar";
import avatar from "../assets/png/avatar.jpg";
import "../App.css";
import moreIcon from "../assets/svg/moreIcon.svg";
import AssetMoreIconPop from "../card/AssetMoreIconPop";

const Notifications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [displayProperty, setDisplayProperty] = useState(false);

  const initialFocusRef = React.useRef();

  const assets = [
    {
      name: "You just got invited to collaborate!",
      lastModified: "Hey there you have been invited by Adebisi Aden…",
      image: require("../assets/svg/micIcon.svg").default,
    },
    {
      name: "Service Downtime",
      lastModified: "The services running right now…",
      image: require("../assets/svg/micIcon.svg").default,
    },
    {
      name: "You just got invited to collaborate!",
      lastModified: "Hey there you have been invited by Adebisi Aden…",
      image: require("../assets/svg/micIcon.svg").default,
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
                    <Text color="#121936" fontSize="14px" fontWeight="medium">
                      Recent Notifications
                    </Text>
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
                        <Flex margin="5% 0" key={index}>
                          <Box
                            backgroundColor="#F7F3FB"
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
                          <Popover
                            initialFocusRef={initialFocusRef}
                            placement="bottom"
                            closeOnBlur={true}
                          >
                            <PopoverTrigger>
                              <Image src={moreIcon} />
                            </PopoverTrigger>
                            <PopoverContent
                              color="white"
                              bg="white"
                              borderColor="gray.200"
                              width="200px"
                              marginTop="-25%"
                              marginLeft="-45%"
                            >
                              <AssetMoreIconPop onClose={setDisplayProperty} />
                            </PopoverContent>
                          </Popover>
                        </Flex>
                      ))}
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Notifications;
