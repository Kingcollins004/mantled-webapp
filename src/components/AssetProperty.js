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
  Popover,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ChooseAssets from "../card/ChooseAssets";
import moreIcon from "../assets/svg/moreIcon.svg";
import DocumentPage from "./DocumentPage";

const AssetProperty = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [displayDocument, setDisplayDocument] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [setFilteredAssets] = useState([]);
  const [setAssetComp] = useState(false);

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
      setDisplayDocument(true);
    }
  };

  const property = [
    {
      id: "1",
      name: "Legal Ownership Papers",
      added: "Added 5th July, 2023",
      image: require("../assets/svg/buildingIcon.svg").default,
    },
    {
      id: "2",
      name: "C of O Document",
      added: "Added 5th July, 2023",
      image: require("../assets/svg/buildingIcon.svg").default,
    },
    {
      id: "3",
      name: "Insurance Papers",
      added: "Added 5th July, 2023",
      image: require("../assets/svg/buildingIcon.svg").default,
    },
    {
      id: "4",
      name: "Security Documentation",
      added: "Added 5th July, 2023",
      image: require("../assets/svg/buildingIcon.svg").default,
    },
    {
      id: "5",
      name: "Pipeline Bills",
      added: "Added 5th July, 2023",
      image: require("../assets/svg/buildingIcon.svg").default,
    },
  ];

  const numberOfProperty = property.length;
  return (
    <div>
      {displayDocument ? (
        <DocumentPage />
      ) : (
        <div>
          <Box margin="2% 1%" width="100%">
            <Flex justifyContent="center">
              <Box
                backgroundColor="white"
                padding="2%"
                borderRadius="23px"
                width={{base:"95%", md:"50%"}}
              >
                <Flex alignItems="center" marginBottom="3%" width="100%">
                  <Box>
                    <Text color="#121936" fontSize="14px" fontWeight="medium">
                      Uploaded Documents - Liberty Estate, Laderin, Abeokuta…
                    </Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      backgroundColor="#7800F0"
                      color="white"
                      borderRadius="7px"
                      fontSize="12px"
                      height="40px"
                      onClick={onOpen}
                    >
                      Add Documents
                    </Button>
                    <Modal
                      finalFocusRef={finalRef}
                      isOpen={isOpen}
                      onClose={onClose}
                    >
                      <ModalOverlay />
                      <ModalContent
                        borderRadius="30px"
                        width={{base:"95%", md:"45%"}}
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
                    color="black"
                    backgroundColor="#E6E7EA"
                    placeholder="Search uploaded documents"
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
                              <PopoverBody>
                                <Text fontSize="14px" color="black">
                                  View Document
                                </Text>
                                <Text fontSize="14px" color="red">
                                  Delete Document
                                </Text>
                              </PopoverBody>
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

export default AssetProperty;
