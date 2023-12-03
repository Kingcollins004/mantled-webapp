import React, { useState, useEffect } from "react";
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
  SkeletonCircle,
  SkeletonText,
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
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
const assetOverviewUrl =
  "https://sentinel-production.up.railway.app/api/v1/assets/overview";

const AssetModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  const finalRef = React.useRef(null);
  const [assets, setAssets] = useState([]);
  // const location = useLocation();
  // const token = location?.state?.token;

  const userData = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(assetOverviewUrl, {
          headers: {
            Authorization: `Bearer ${userData.token}`,
            "Content-Type": "application/json",
          },
        });
        const fetchedAssets = response.data.data.assets;
        setAssets(fetchedAssets);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (userData.token) {
      fetchData();
    } else {
      // navigate("/login")
    }
  }, [userData.token]);

  if (isLoading) {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    );
  }

  // useEffect(() => {
  //   if (!token) {
  //    navigate("/login")
  //   } else {
  //     fetchData();
  //   }
  // }, [token]);

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
            <Box maxHeight={{ md: "400px" }} scroll overflowY="auto">
              {assets.map((asset, index) => (
                <Box key={index} marginBottom="5%" width="100%">
                  <Flex alignItems="center">
                    <Box
                      backgroundColor="#FDF3EB"
                      padding="2%"
                      justifyContent="center"
                      display="flex"
                      borderRadius={{ base: "8px", md: "17px" }}
                      width={{ base: "45px", md: "50px" }}
                      height={{ base: "45px", md: "50px" }}
                    >
                      {/* Assuming asset.image is a property in your asset object containing the image URL */}
                      <Image width="80%" src={asset.image} />
                    </Box>
                    <Box marginLeft="3%" marginTop="1%">
                      <Text fontSize="14px" color="#000000" fontWeight="medium">
                        {asset.type}
                      </Text>
                      {asset.type === "Debts" ? (
                        <Text
                          fontSize="12px"
                          color="#8B8B8B"
                          fontWeight="normal"
                          width="fit-content"
                        >
                          Details of all your real estate assets,<br></br> lands, houses,
                          terraces, apartments etc
                        </Text>
                      ) : null}

                      {asset.type === "FinancialAssets" ? (
                        <Text
                          fontSize="12px"
                          color="#8B8B8B"
                          fontWeight="normal"
                        >
                         Cash, shares, cryptocurrency, pension schemes.
                        </Text>
                      ) : null}
                    </Box>
                    <Spacer />
                    <Box
                      display={{ base: "none", md: "flex" }}
                      paddingTop="4%"
                      width="30%"
                    >
                      {/* Assuming asset.progress is a property in your asset object containing the progress value */}
                      <ProgressBar progress={asset.percentage} />
                    </Box>
                    <Text
                      paddingTop="2.7%"
                      marginLeft="1%"
                      color="black"
                      fontSize="12px"
                      display={{ base: "none", md: "flex" }}
                    >
                      {asset.percentage}%
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
              ))}
            </Box>
          </Box>
          <Box width={{ base: "100%", md: "50%" }}>
            <CollabModal />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AssetModal;
