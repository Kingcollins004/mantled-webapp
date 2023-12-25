import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  ModalHeader,
  Input,
  Select,
} from "@chakra-ui/react";
import backArrow from "../assets/svg/back-arrow.svg";
import AddCollabTwo from "./AddCollabTwo";

const AddCollab = (props) => {
  const [userData, setUserData] = useState({
    collabName: "",
    collabEmail: "",
    assignProp: "",
  });

  const [displayModal, setDisplayModal] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.collabName || !userData.collabEmail || !userData.assignProp) {
      alert("Please fill all required fields");
    } else {
      setDisplayModal(false);
    }
  };

  const handleInputChange = (field, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  return (
    <div>
      {displayModal ? (
        <div>
          <ModalHeader height="fit-content" marginTop="2%" fontSize="18px">
            <Flex>
              <Flex
                padding={{ base: "0px 3%", md: "0 12%" }}
                width="100%"
                alignItems="center"
                marginTop="2%"
              >
                <Image
                  onClick={() => {
                    props.goBack();
                  }}
                  width="4%"
                  marginRight="3%"
                  marginTop="0px"
                  src={backArrow}
                />
                <Text fontWeight="500" fontSize="18px">
                  Add collaborators to asset
                </Text>
              </Flex>
            </Flex>
          </ModalHeader>
          <Box height="500px" padding={{ base: "2% 5%", md: "2% 15%" }}>
            <Box>
              <Text fontSize="14px" textAlign="left" margin="2% 0%">
                Fullname
              </Text>
              <Input
                border="0.5px solid #700BE9"
                borderRadius="10px"
                fontSize="14px"
                padding="4%"
                placeholder="Enter here..."
                type="text"
                value={userData.collabName}
                onChange={(e) =>
                  handleInputChange("collabName", e.target.value)
                }
              />
            </Box>
            <Box>
              <Text fontSize="14px" textAlign="left" margin="2% 0%">
                Email
              </Text>
              <Input
                border="0.5px solid #700BE9"
                borderRadius="10px"
                fontSize="14px"
                padding="4%"
                type="email"
                placeholder="Enter here..."
                value={userData.collabEmail}
                onChange={(e) =>
                  handleInputChange("collabEmail", e.target.value)
                }
              />
            </Box>
            <Box>
              <Text fontSize="14px" textAlign="left" margin="2% 0%">
                Assign To
              </Text>
              <Select
                border="0.5px solid #700BE9"
                borderRadius="10px"
                fontSize="14px"
                placeholder="---Select asset to assign---"
                value={userData.assignProp}
                onChange={(e) =>
                  handleInputChange("assignProp", e.target.value)
                }
              >
                <option>Real Estate</option>
                <option>Tangible Asset</option>
                <option>Personal Effect</option>
                <option>Debt and Liabilities</option>
                <option>Financial Asset</option>
                <option>Others</option>
              </Select>
            </Box>
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
              >
                Proceed
              </Button>
            </Box>
          </Box>
        </div>
      ) : (
        <div>
          {/* Pass userData as props to the ChildComponent */}
          <AddCollabTwo
            goBack={() => setDisplayModal(true)}
            userData={userData}
          />
        </div>
      )}
    </div>
  );
};

export default AddCollab;
