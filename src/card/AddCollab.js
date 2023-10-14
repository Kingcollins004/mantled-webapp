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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [assign, setAssign] = useState("");
  const [displayModal, setDisplayModal] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, assign);
    if (!fullName && !email && !assign) {
      alert("Please fill all required fields");
    } else {
      setDisplayModal(false);
    }
  };

  const handleAddressOneChange = (e) => {
    setFullName(e.target.value);
  };
  const handleAddressTwoChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCountryChange = (e) => {
    setAssign(e.target.value);
  };

  return (
    <div>
      {displayModal ? (
        <div>
          <ModalHeader marginTop="2%" fontSize="18px">
            <Flex>
              <Flex
                padding={{base:"0px 3%", md: "0 12%"}}
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
          <Box height="500px" padding={{base: "2% 5%", md:"2% 15%"}}>
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
                value={fullName}
                onChange={handleAddressOneChange}
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
                value={email}
                onChange={handleAddressTwoChange}
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
                value={assign}
                onChange={handleCountryChange}
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
          <AddCollabTwo goBack={() => setDisplayModal(true)} />
        </div>
      )}
    </div>
  );
};

export default AddCollab;
