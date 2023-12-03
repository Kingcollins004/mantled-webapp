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
import RealEstateTwo from "./RealEstateTwo";
import backArrow from "../assets/svg/back-arrow.svg";

const RealEstate = (props) => {
  const [assetName, setAssetName] = useState("");
  const [displayModal, setDisplayModal] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(assetName);
    if (!assetName) {
      alert("Please enter an asset name");
    } else {
      setDisplayModal(false);
    }
  };

  const handleClick = (e) => {
    setAssetName(e.target.value);
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
                  marginLeft={{ base: "-14%" }}
                  marginTop="0px"
                  src={backArrow}
                />
                <Text marginLeft="5%" fontWeight="500" fontSize={{ base: "13px", md: "18px" }}>
                  Add Asset Info
                </Text>
              </Flex>
              <Spacer />
              <Box
                marginLeft={{ base: "-14%" }}
                backgroundColor="#F5F0FF"
                borderRadius="50%"
                padding="2%"
              >
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
                STEP 1 OF 3
              </Text>
            </Flex>
          </ModalHeader>
          <Box height="5%">
            <ProgressBar progress={33.3} progressH={40} />
          </Box>
          <Box height="400px" padding={{ base: "7% 5%", md: "2% 15%" }}>
            <Text fontSize="12px" textAlign="left" margin="2% 0%">
              Enter Asset Name
            </Text>
            <Input
              border="0.5px solid #700BE9"
              borderRadius="10px"
              fontSize="11px"
              padding="5%"
              placeholder="Enter here..."
              value={assetName}
              onChange={handleClick}
            />
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
          <RealEstateTwo selectedOption={props.selectedOption} goBack={() => setDisplayModal(true)} />
        </div>
      )}
    </div>
  );
};

export default RealEstate;
