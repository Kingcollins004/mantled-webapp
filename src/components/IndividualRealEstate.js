import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import moreIcon from "../assets/svg/moreIcon.svg";
import AssetMoreIconPop from "../card/AssetMoreIconPop";
import AssetProperty from "./AssetProperty";
import Emoji from "../assets/svg/Emoji1.svg";
import Emoji2 from "../assets/svg/emoji2.svg";
import Emoji3 from "../assets/svg/emoji3.svg";
import Emoji4 from "../assets/svg/emoji4.svg";
import Emoji5 from "../assets/svg/emoji5.svg";

const IndividualRealEstate = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  // const [selectedOption, setSelectedOption] = useState("");
  const [displayProperty, setDisplayProperty] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [assetComp, setAssetComp] = useState(false);

  const initialFocusRef = React.useRef();

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredAssets = property.filter((property) =>
      property.name.toLowerCase().includes(searchTerm)
    );
    setFilteredAssets(filteredAssets);
  };

  const handleComp = (property) => {
    if (property.id === "1") {
      setAssetComp(true);
      setDisplayProperty(true);
    }
  };

  const property = [
    {
      id: "1",
      name: "Liberty Estate, Laderin, Abeokuta, Ogun State",
      added: "Added 5th July, 2023",
      image: require("../assets/svg/buildingIcon.svg").default,
    },
    {
      id: "2",
      name: "Challenges Mansion, Ibadan, Oyo State",
      added: "Added 5th July, 2023",
      image: require("../assets/svg/buildingIcon.svg").default,
    },
    {
      id: "3",
      name: "Phat Homes, Lekki Phase 2, Lagos State",
      added: "Added 5th July, 2023",
      image: require("../assets/svg/buildingIcon.svg").default,
    },
  ];

  const numberOfProperty = property.length;

  return (
    <div>
      {displayProperty ? (
        <AssetProperty />
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
                    <Text color="#121936" fontSize="14px" fontWeight="medium">
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
                      <Image marginTop="2%" width="40px" src={Emoji} />
                    </Box>
                  </Box>
                </Flex>
                <Flex width="50%" marginBottom="6%">
                  <Box
                    borderRadius="50%"
                    textAlign="center"
                    padding="1%"
                    backgroundColor="#DBF0DE"
                  >
                    <Image marginTop="2%" width="40px" src={Emoji} />
                  </Box>
                  <Spacer />
                  <Box
                    borderRadius="50%"
                    textAlign="center"
                    padding="1%"
                    backgroundColor="#DBF0DE"
                    onClick={onOpen}
                  >
                    <Image marginTop="2%" width="40px" src={Emoji2} />
                  </Box>
                  <Modal
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent marginTop="10%">
                      <ModalBody padding="10% 0">
                        <Flex
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            marginBottom="8%"
                            width="25%"
                            borderRadius="50%"
                            padding="1.5%"
                            backgroundColor="#FEDAAB"
                          >
                            <Image width="100px" src={Emoji2} />
                          </Box>
                          <Box textAlign="center">
                            <Text fontWeight="semibold">Gideon Ademuyiwa</Text>
                            <Text color="#848484" fontSize="13px">
                              Added 10 July, 2023
                            </Text>
                            <Text
                              padding="1% 4%"
                              color="#700BE9"
                              fontWeight="semibold"
                              borderRadius="25px"
                              margin="10% 5%"
                              backgroundColor="#F5F0FF"
                            >
                              Brother
                            </Text>
                          </Box>
                          <Box marginTop="5%" textAlign="center">
                            <Text>suzzypasty@realbinxyz.africa</Text>
                            <Text>08033211658</Text>
                          </Box>
                        </Flex>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                  <Spacer />
                  <Box
                    borderRadius="50%"
                    textAlign="center"
                    padding="1%"
                    backgroundColor="#DBF0DE"
                  >
                    <Image marginTop="2%" width="40px" src={Emoji3} />
                  </Box>
                  <Spacer />
                  <Box
                    borderRadius="50%"
                    textAlign="center"
                    padding="1%"
                    backgroundColor="#DBF0DE"
                  >
                    <Image marginTop="2%" width="40px" src={Emoji4} />
                  </Box>
                  <Spacer />
                  <Box
                    borderRadius="50%"
                    textAlign="center"
                    padding="1%"
                    backgroundColor="#DBF0DE"
                  >
                    <Image marginTop="2%" width="40px" src={Emoji5} />
                  </Box>
                </Flex>
                <Box>
                  <Input
                    fontSize="12px"
                    color="black"
                    backgroundColor="#E6E7EA"
                    placeholder="Search Assets"
                    type="search"
                    marginBottom="3%"
                    onChange={handleSearch}
                  />

                  <Box marginTop="5%" width="100%">
                    {property
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
                      .map((property, index) => (
                        <Flex marginBottom="5%" key={index}>
                          <Box
                            backgroundColor="#E6E7EA"
                            padding="2%"
                            justifyContent="center"
                            display="flex"
                            borderRadius="17px"
                            width="45px"
                            height="45px"
                          >
                            <Image src={property.image} />
                          </Box>
                          <Box marginLeft="3%" marginTop="1%">
                            <Text
                              fontSize="14px"
                              color="#000000"
                              fontWeight="medium"
                              onClick={() => {
                                handleComp(property);
                              }}
                            >
                              {property.name}
                            </Text>
                            <Text
                              fontSize="12px"
                              color="#8B8B8B"
                              fontWeight="normal"
                            >
                              {property.added}
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
                  <Box width="100%" textAlign="center">
                    <Text fontSize="12px" color="gray.400">
                      {numberOfProperty} assets found
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </div>
      )}
    </div>
  );
};

export default IndividualRealEstate;
