import React from "react";
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
} from "@chakra-ui/react";
import assetHome from "../assets/svg/assetHouse.svg";
import assetFolder from "../assets/svg/assetFolder.svg";
import assetCard from "../assets/svg/assetCard.svg";
import assetCar from "../assets/svg/assetCar.svg";
import assetChart from "../assets/svg/assetChart.svg";
import assetOthers from "../assets/svg/assetOthers.svg";
import ProgressBar from "../utilities/ProgressBar";
import CollabModal from "./CollabModal";
import "../App.css";
import { useDisclosure } from "@chakra-ui/react";
import ChooseAssets from "../card/ChooseAssets";

const AssetModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <div className="assets">
      <Box margin="0px 1%" width="100%">
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box
            backgroundColor="white"
            padding={{ base: "7% 5%", md: "2%" }}
            borderRadius="23px"
            width={{ base: "100%", md: "50%" }}
          >
            <Flex alignItems="center" marginBottom="5%" width="100%">
              <Box>
                <Text color="#121936" fontSize="14px" fontWeight="medium">
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
                  height="40px"
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
                    width={{base:"95%", md:"45%"}}
                    maxW="unset"
                    textAlign="center"
                  >
                    <ModalBody>
                      <ChooseAssets />
                    </ModalBody>
                  </ModalContent>
                </Modal>

                {/* <ChooseAssets isOpen={isOpen} onClose={onClose} /> */}
              </Box>
            </Flex>
            <Box maxHeight={{ md: "400px" }} scroll overflowY="auto">
              <Box marginBottom="5%" width="100%">
                <Flex>
                  <Box
                    backgroundColor="#FDF3EB"
                    padding={{ base: "1%", md: "2%" }}
                    justifyContent="center"
                    display="flex"
                    borderRadius={{ base: "8px", md: "17px" }}
                    width={{ base: "45px", md: "50px" }}
                    height={{ base: "45px", md: "50px" }}
                  >
                    <Image width={{ base: "60%", md: "80%" }} src={assetHome} />
                  </Box>
                  {/* <Spacer /> */}
                  <Box marginLeft="3%" marginTop="1%">
                    <Text fontSize="14px" color="#000000" fontWeight="medium">
                      Real Estate
                    </Text>
                    <Text fontSize="12px" color="#8B8B8B" fontWeight="normal">
                      Last Modified, 9 days ago
                    </Text>
                  </Box>
                  <Spacer />
                  <Box
                    display={{ base: "none", md: "flex" }}
                    paddingTop="4%"
                    width="30%"
                  >
                    <ProgressBar progress={16} />
                  </Box>
                  {/* <Spacer /> */}
                  <Text
                    paddingTop="2.7%"
                    marginLeft="1%"
                    color="black"
                    fontSize="12px"
                    display={{ base: "none", md: "flex" }}
                  >
                    16%
                  </Text>
                  <Spacer />
                  <Button
                    width="71px"
                    fontSize="11px"
                    border="0.5px solid #7070704A"
                    backgroundColor="#FAFAFA"
                  >
                    Assets
                  </Button>
                </Flex>
              </Box>
              <Box marginBottom="5%" width="100%">
                <Flex>
                  <Box
                    backgroundColor="#FDF3EB"
                    padding="2%"
                    justifyContent="center"
                    display="flex"
                    borderRadius={{ base: "8px", md: "17px" }}
                    width={{ base: "45px", md: "50px" }}
                    height={{ base: "45px", md: "50px" }}
                  >
                    <Image width="80%" src={assetFolder} />
                  </Box>
                  {/* <Spacer /> */}
                  <Box marginLeft="3%" marginTop="1%">
                    <Text fontSize="14px" color="#000000" fontWeight="medium">
                      Tangible Assets
                    </Text>
                    <Text fontSize="12px" color="#8B8B8B" fontWeight="normal">
                      Last Modified, 9 days ago
                    </Text>
                  </Box>
                  <Spacer />
                  <Box
                    display={{ base: "none", md: "flex" }}
                    paddingTop="4%"
                    width="30%"
                  >
                    <ProgressBar progress={44} />
                  </Box>
                  {/* <Spacer /> */}
                  <Text
                    paddingTop="2.7%"
                    marginLeft="1%"
                    color="black"
                    fontSize="12px"
                    display={{ base: "none", md: "flex" }}
                  >
                    44%
                  </Text>
                  <Spacer />
                  <Button
                    width="71px"
                    fontSize="11px"
                    border="0.5px solid #7070704A"
                    backgroundColor="#FAFAFA"
                  >
                    Assets
                  </Button>
                </Flex>
              </Box>
              <Box marginBottom="5%" width="100%">
                <Flex>
                  <Box
                    backgroundColor="#FDF3EB"
                    padding="2%"
                    justifyContent="center"
                    display="flex"
                    borderRadius={{ base: "8px", md: "17px" }}
                    width={{ base: "45px", md: "50px" }}
                    height={{ base: "45px", md: "50px" }}
                  >
                    <Image width="80%" src={assetCard} />
                  </Box>
                  {/* <Spacer /> */}
                  <Box marginLeft="3%" marginTop="1%">
                    <Text fontSize="14px" color="#000000" fontWeight="medium">
                      Financial Assets
                    </Text>
                    <Text fontSize="12px" color="#8B8B8B" fontWeight="normal">
                      Last Modified, 9 days ago
                    </Text>
                  </Box>
                  <Spacer />
                  <Box
                    display={{ base: "none", md: "flex" }}
                    paddingTop="4%"
                    width="30%"
                  >
                    <ProgressBar progress={5} />
                  </Box>
                  {/* <Spacer /> */}
                  <Text
                    paddingTop="2.7%"
                    marginLeft="1%"
                    color="black"
                    fontSize="12px"
                    display={{ base: "none", md: "flex" }}
                  >
                    5%
                  </Text>
                  <Spacer />
                  <Button
                    width="71px"
                    fontSize="11px"
                    border="0.5px solid #7070704A"
                    backgroundColor="#FAFAFA"
                  >
                    Assets
                  </Button>
                </Flex>
              </Box>
              <Box marginBottom="5%" width="100%">
                <Flex>
                  <Box
                    backgroundColor="#FDF3EB"
                    padding="2%"
                    justifyContent="center"
                    display="flex"
                    borderRadius={{ base: "8px", md: "17px" }}
                    width={{ base: "45px", md: "50px" }}
                    height={{ base: "45px", md: "50px" }}
                  >
                    <Image width="80%" src={assetCar} />
                  </Box>
                  {/* <Spacer /> */}
                  <Box marginLeft="3%" marginTop="1%">
                    <Text fontSize="14px" color="#000000" fontWeight="medium">
                      Personal Effects
                    </Text>
                    <Text fontSize="12px" color="#8B8B8B" fontWeight="normal">
                      Last Modified, 9 days ago
                    </Text>
                  </Box>
                  <Spacer />
                  <Box
                    display={{ base: "none", md: "flex" }}
                    paddingTop="4%"
                    width="30%"
                  >
                    <ProgressBar progress={32} />
                  </Box>
                  {/* <Spacer /> */}
                  <Text
                    paddingTop="2.7%"
                    marginLeft="1%"
                    color="black"
                    fontSize="12px"
                    display={{ base: "none", md: "flex" }}
                  >
                    32%
                  </Text>
                  <Spacer />
                  <Button
                    width="71px"
                    fontSize="11px"
                    border="0.5px solid #7070704A"
                    backgroundColor="#FAFAFA"
                  >
                    Assets
                  </Button>
                </Flex>
              </Box>
              <Box marginBottom="5%" width="100%">
                <Flex>
                  <Box
                    backgroundColor="#FDF3EB"
                    padding="2%"
                    justifyContent="center"
                    display="flex"
                    borderRadius={{ base: "8px", md: "17px" }}
                    width={{ base: "45px", md: "50px" }}
                    height={{ base: "45px", md: "50px" }}
                  >
                    <Image width="80%" src={assetChart} />
                  </Box>
                  {/* <Spacer /> */}
                  <Box marginLeft="3%" marginTop="1%">
                    <Text fontSize="14px" color="#000000" fontWeight="medium">
                      Debt and Liabilities
                    </Text>
                    <Text fontSize="12px" color="#8B8B8B" fontWeight="normal">
                      Last Modified, 9 days ago
                    </Text>
                  </Box>
                  <Spacer />
                  <Box
                    display={{ base: "none", md: "flex" }}
                    paddingTop="4%"
                    width="30%"
                  >
                    <ProgressBar progress={56} />
                  </Box>
                  {/* <Spacer /> */}
                  <Text
                    paddingTop="2.7%"
                    marginLeft="1%"
                    color="black"
                    fontSize="12px"
                    display={{ base: "none", md: "flex" }}
                  >
                    56%
                  </Text>
                  <Spacer />
                  <Button
                    width="71px"
                    fontSize="11px"
                    border="0.5px solid #7070704A"
                    backgroundColor="#FAFAFA"
                  >
                    Assets
                  </Button>
                </Flex>
              </Box>
              <Box marginBottom="5%" width="100%">
                <Flex>
                  <Box
                    backgroundColor="#FDF3EB"
                    padding="2%"
                    justifyContent="center"
                    display="flex"
                    borderRadius={{ base: "8px", md: "17px" }}
                    width={{ base: "45px", md: "50px" }}
                    height={{ base: "45px", md: "50px" }}
                  >
                    <Image width="80%" src={assetOthers} />
                  </Box>
                  {/* <Spacer /> */}
                  <Box marginLeft="3%" marginTop="1%">
                    <Text fontSize="14px" color="#000000" fontWeight="medium">
                      Others
                    </Text>
                    <Text fontSize="12px" color="#8B8B8B" fontWeight="normal">
                      Last Modified, 9 days ago
                    </Text>
                  </Box>
                  <Spacer />
                  <Box
                    display={{ base: "none", md: "flex" }}
                    paddingTop="4%"
                    width="30%"
                  >
                    <ProgressBar progress={9} />
                  </Box>
                  {/* <Spacer /> */}
                  <Text
                    paddingTop="2.7%"
                    marginLeft="1%"
                    color="black"
                    fontSize="12px"
                    display={{ base: "none", md: "flex" }}
                  >
                    9%
                  </Text>
                  <Spacer />
                  <Button
                    width="71px"
                    fontSize="11px"
                    border="0.5px solid #7070704A"
                    backgroundColor="#FAFAFA"
                  >
                    Assets
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
          >
            <CollabModal />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AssetModal;
