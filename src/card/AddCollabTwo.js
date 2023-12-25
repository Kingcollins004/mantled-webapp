import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  ModalHeader,
  Spacer,
} from "@chakra-ui/react";
import backArrow from "../assets/svg/back-arrow.svg";
import building from "../assets/svg/buildingIcon.svg";
import SuccessCard from "./SuccessCard";
import ErrorHandler from "../redux/axios/Utils/ErrorHandler";
import toast from "react-hot-toast";
import { AddCollaboratorApi } from "../redux/axios/apis/asset";

const AddCollabTwo = ({ goBack, userData }) => {
  const [allProperties, setAllProperties] = useState(false);
  const [property, setProperty] = useState([]);
  const [displayModal, setDisplayModal] = useState(true);
  const [belowList, setBelowList] = useState(true);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (allProperties) {
      // If 'Allow access to all properties' is selected, include all assets in selectedAssets
      setSelectedAssets([
        "Liberty Estate, Laderin, Abeokuta, Ogun State",
        "Challenges Mansion, Ibadan, Oyo State",
        "Phat Homes, Lekki Phase 2, Lagos State",
      ]);
    } else {
      // If specific assets are selected, include them in selectedAssets
      setSelectedAssets(
        property.filter((asset) => asset.isChecked).map((asset) => asset.name)
      );
    }
  }, [allProperties, property]);

  const setList = () => {
    if (allProperties === true) {
      setBelowList(true);
    } else {
      setBelowList(false);
    }
  };

  const handleCheckboxChange = (event) => {
    setAllProperties(event.target.checked);
    console.log(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const formBody = {
        email: userData.collabName,
        fullName: userData.collabEmail,
        propertyType: userData.assignProp,
        canViewAll: allProperties,
        assets: selectedAssets,
      };
      setLoading(true);
      const response = await AddCollaboratorApi(formBody);

      if (response.data) {
        setLoading(false);
        setDisplayModal(false);
      }
    } catch (error) {
      setLoading(false);
      const err = ErrorHandler(error);
      toast.error(err.message);
    }
  };

  return (
    <div>
      {displayModal ? (
        <div>
          <ModalHeader marginTop="2%" fontSize="18px">
            <Flex
              padding={{ base: "0 0", md: "0 12%" }}
              width="100%"
              alignItems="center"
              marginTop="2%"
            >
              <Image
                onClick={() => {
                  goBack();
                }}
                width="4%"
                marginRight={{ base: "2%", md: "3%" }}
                marginTop="0px"
                src={backArrow}
              />
              <Text fontWeight="500" fontSize={{ base: "13px", md: "18px" }}>
                Kindly set the permission parameters
              </Text>
            </Flex>
          </ModalHeader>

          <Box height="fit-content" padding={{ base: "2% 2%", md: "2% 15%" }}>
            <Flex
              marginTop="8%"
              padding="1% 3%"
              border="0.5px solid #848484"
              borderRadius="10px"
            >
              <Text fontSize="14px" textAlign="left" margin="2% 0%">
                Allow access to all properties
              </Text>
              <Spacer />
              <input
                type="checkbox"
                checked={allProperties}
                onChange={handleCheckboxChange}
                onClick={setList}
                value=" Allow access to all properties"
              />
            </Flex>

            {belowList ? (
              <div>
                <Box borderTop="0.5px solid #F7F7F7" marginTop="10%">
                  <Text
                    color="#848484"
                    fontSize="12px"
                    textAlign="left"
                    margin="3% 0%"
                  >
                    SELECT ASSETS AVAILABLE TO COLLABORATORS
                  </Text>

                  <Flex
                    marginTop="5%"
                    padding="1% 2%"
                    border="0.5px solid #848484"
                    borderRadius="10px"
                  >
                    <Image marginRight="2%" src={building} />
                    <Text fontSize="14px" textAlign="left" margin="2% 0%">
                      Liberty Estate, Laderin, Abeokuta, Ogun State
                    </Text>
                    <Spacer />
                    <input
                      type="checkbox"
                      // checked={allProperties}
                      checked={selectedAssets.includes(
                        "Liberty Estate, Laderin, Abeokuta, Ogun State"
                      )}
                      onChange={(e) =>
                        setSelectedAssets([...selectedAssets, e.target.value])
                      }
                      value="Liberty Estate, Laderin, Abeokuta, Ogun State"
                    />
                  </Flex>
                  <Flex
                    marginTop="5%"
                    padding="1% 2%"
                    border="0.5px solid #848484"
                    borderRadius="10px"
                  >
                    <Image marginRight="2%" src={building} />
                    <Text fontSize="14px" textAlign="left" margin="2% 0%">
                      Challenges Mansion, Ibadan, Oyo State
                    </Text>
                    <Spacer />
                    <input
                      type="checkbox"
                      // checked={allProperties}

                      checked={selectedAssets.includes(
                        "Challenges Mansion, Ibadan, Oyo State"
                      )}
                      onChange={(e) =>
                        setSelectedAssets([...selectedAssets, e.target.value])
                      }
                      value="Challenges Mansion, Ibadan, Oyo State"
                    />
                  </Flex>
                  <Flex
                    marginTop="5%"
                    padding="1% 2%"
                    border="0.5px solid #848484"
                    borderRadius="10px"
                  >
                    <Image marginRight="2%" src={building} />
                    <Text fontSize="14px" textAlign="left" margin="2% 0%">
                      Phat Homes, Lekki Phase 2, Lagos State
                    </Text>
                    <Spacer />
                    <input
                      type="checkbox"
                      checked={selectedAssets.includes(
                        "Phat Homes, Lekki Phase 2, Lagos State"
                      )}
                      onChange={(e) =>
                        setSelectedAssets([...selectedAssets, e.target.value])
                      }
                      value="Phat Homes, Lekki Phase 2, Lagos State"
                    />
                  </Flex>
                </Box>
                <Box
                  marginBottom="3%"
                  marginTop="6%"
                  width="100%"
                  textAlign="right"
                >
                  <Button
                    color="white"
                    marginRight="3%"
                    fontSize="14px"
                    padding="5%"
                    backgroundColor="#7800F0"
                    onClick={handleSubmit}
                    width="100%"
                    borderRadius="10px"
                  >
                    Proceed
                  </Button>
                </Box>
              </div>
            ) : (
              <Box
                marginBottom="3%"
                marginTop="6%"
                width="100%"
                textAlign="right"
                // display={selectedOption ? "block" : "none"}
              >
                <Button
                  color="white"
                  marginRight="3%"
                  fontSize="14px"
                  padding="5%"
                  backgroundColor="#7800F0"
                  onClick={handleSubmit}
                  width="100%"
                  borderRadius="10px"
                  isLoading={loading}
                >
                  Proceed
                </Button>
              </Box>
            )}
          </Box>
        </div>
      ) : (
        <div>
          <SuccessCard text="An invite link has been sent to the email address to join in as a collaborator to your asset" />
        </div>
      )}
    </div>
  );
};

export default AddCollabTwo;
