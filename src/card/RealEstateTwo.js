import React, { useState } from "react";
import buildingIcon from "../assets/svg/buildingIcon.svg";
import carIcon from "../assets/svg/carIcon.svg";
import debtIcon from "../assets/svg/debtIcon.svg";
import financeIcon from "../assets/svg/financeIcon.svg";
import tokenIcon from "../assets/svg/tokenIcon.svg";
import otherIcon from "../assets/svg/otherIcon.svg";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  ModalHeader,
  Input,
  Spacer,
} from "@chakra-ui/react";
import ProgressBar from "../utilities/ProgressBar";
import RealEstateThree from "./RealEstateThree";
import backArrow from "../assets/svg/back-arrow.svg";

const RealEstateTwo = (props) => {
  const [addressOne, setaddressOne] = useState("");
  const [addressTwo, setaddressTwo] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [displayModal, setDisplayModal] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addressOne, addressTwo, country, state, lga);
    if (!addressOne && !country && !state && !lga) {
      alert("Please fill all required fields");
    } else {
      setDisplayModal(false);
    }
  };

  const handleAddressOneChange = (e) => {
    setaddressOne(e.target.value);
  };
  const handleAddressTwoChange = (e) => {
    setaddressTwo(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handleLgaChange = (e) => {
    setLga(e.target.value);
  };

  return (
    <div>
      {displayModal ? (
        <div>
          <ModalHeader marginTop="2%" fontSize="18px">
            <Flex alignItems="center">
              <Flex alignItems="center" marginTop="2%">
                <Image
                  onClick={() => {
                    props.goBack();
                  }}
                  width="10%"
                  marginRight="2%"
                  marginLeft={{base:"-14%"}}
                  src={backArrow}
                />
                <Text marginLeft="5%" fontWeight="500" fontSize={{base:"13px", md:"18px"}}>
                  Add Asset Info
                </Text>
              </Flex>
              <Spacer />
              <Box marginLeft={{base:"-14%"}} backgroundColor="#F5F0FF" borderRadius="50%" padding="2%">
              {props.selectedOption === "Real Estate" ? (
                  <Image src={buildingIcon} />
                ) : props.selectedOption === "Tangible Assets" ? (
                  <Image src={tokenIcon} />
                ) : props.selectedOption === "Financial Assets" ? (
                  <Image src={financeIcon} />
                ) : props.selectedOption === "Personal Effects" ? (
                  <Image src={carIcon} />
                ) : props.selectedOption === "Debts and Liabilities" ? (
                  <Image src={debtIcon} />
                ) : props.selectedOption === "Others" ? (
                  <Image src={otherIcon} />
                ) : null}
              </Box>
              <Spacer />
              <Text
                fontWeight="500"
                marginTop="2%"
                fontSize="12px"
                color="#191919"
              >
                STEP 2 OF 3
              </Text>
            </Flex>
          </ModalHeader>
          <Box height="5%">
            <ProgressBar progress={66.66} progressH={40} />
          </Box>
          <Box height="fit-content" padding={{base:"7% 5%", md:"2% 15%"}}>
            <Box marginBottom={{base:"5%"}}>
              <Text fontSize="12px" textAlign="left" margin="2% 0%">
                Address Line 1
              </Text>
              <Input
                border="0.5px solid #700BE9"
                borderRadius="10px"
                fontSize="11px"
                padding="5%"
                placeholder="Enter here..."
                type="text"
                value={addressOne}
                onChange={handleAddressOneChange}
              />
            </Box>
            <Box marginBottom={{base:"5%"}}>
              <Text fontSize="12px" textAlign="left" margin="2% 0%">
                Address Line 2
              </Text>
              <Input
                border="0.5px solid #700BE9"
                borderRadius="10px"
                fontSize="11px"
                padding="5%"
                type="text"
                placeholder="Enter here..."
                value={addressTwo}
                onChange={handleAddressTwoChange}
              />
            </Box>
            <Box marginBottom={{base:"5%"}}>
              <Text fontSize="12px" textAlign="left" margin="2% 0%">
                Country
              </Text>
              <Input
                border="0.5px solid #700BE9"
                borderRadius="10px"
                fontSize="11px"
                type="text"
                padding="5%"
                placeholder="Enter here..."
                value={country}
                onChange={handleCountryChange}
              />
            </Box>
            <Flex marginBottom={{base:"10%"}}>
              <Box marginRight="1%" width="50%">
                <Text fontSize="12px" textAlign="left" margin="2% 0%">
                  State
                </Text>
                <Input
                  border="0.5px solid #700BE9"
                  borderRadius="10px"
                  fontSize="11px"
                  padding="10%"
                  type="text"
                  placeholder="Enter here..."
                  value={state}
                  onChange={handleStateChange}
                />
              </Box>
              <Spacer />
              <Box marginLeft="1%" width="50%">
                <Text fontSize="12px" textAlign="left" margin="2% 0%">
                  LGA
                </Text>
                <Input
                  border="0.5px solid #700BE9"
                  borderRadius="10px"
                  fontSize="11px"
                  padding="10%"
                  type="text"
                  placeholder="Enter here..."
                  value={lga}
                  onChange={handleLgaChange}
                />
              </Box>
            </Flex>
            <Box
              marginBottom="3%"
              marginTop="3%"
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
          </Box>
        </div>
      ) : (
        <div>
          <RealEstateThree selectedOption={props.selectedOption} goBack={() => setDisplayModal(true)} />
        </div>
      )}
    </div>
  );
};

export default RealEstateTwo;
