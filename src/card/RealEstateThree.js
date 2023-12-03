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
import SuccessCard from "./SuccessCard";
import backArrow from "../assets/svg/back-arrow.svg";

const RealEstateThree = (props) => {
  const [displayModal, setDisplayModal] = useState(true);
  const [documentFields, setDocumentFields] = useState([
    <Input
      key={0}
      border="0.5px solid #700BE9"
      borderRadius="10px"
      fontSize="11px"
      padding="3% 5% 7% 5%"
      type="file"
    />,
  ]);

  const addNewDocumentField = () => {
    const newDocumentFields = [
      ...documentFields,
      <Input
        key={documentFields.length}
        border="0.5px solid #700BE9"
        borderRadius="10px"
        fontSize="11px"
        padding="3% 5% 7% 5%"
        type="file"
      />,
    ];
    setDocumentFields(newDocumentFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayModal(false);
  };


  return (
    <div className="assets">
      {displayModal ? (
        <div>
          <ModalHeader marginTop="2%" fontSize="18px">
            <Flex  alignItems="center">
              <Flex alignItems="center" marginTop="2%">
                <Image
                  onClick={() => {
                    props.goBack();
                  }}
                  width="10%"
                  marginRight="2%"
                  marginLeft={{base:"-14%"}}
                  marginTop="0px"
                  src={backArrow}
                />
                <Text marginLeft="5%" fontWeight="500" fontSize={{base:"13px", md:"18px"}}>
                  Document Upload
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
                STEP 3 OF 3
              </Text>
            </Flex>
          </ModalHeader>
          <Box height="5%">
            <ProgressBar progress={100} progressH={40} />
          </Box>
          <Box height="500px"  padding={{base:"7% 5%", md:"2% 15%"}}>
            <Box maxHeight="400px" scroll overflowY="auto">
              {documentFields.map((field, index) => (
                <Box key={index}>
                  <Text fontSize="12px" textAlign="left" margin="2% 0%">
                    Document Type {index + 1}
                  </Text>
                  {field}
                </Box>
              ))}
              <Box
                marginBottom="3%"
                marginTop="10%"
                width="100%"
                textAlign="right"
              >
                <Flex>
                  <Button
                    color="white"
                    marginRight="3%"
                    fontSize="12px"
                    padding={{base:"3% 10%"}}
                    backgroundColor="#7800F0"
                    onClick={addNewDocumentField}
                    width="40%"
                    borderRadius="10px"
                  >
                    Add New Document
                  </Button>
                  <Spacer />
                  <Button
                    color="white"
                    marginLeft="3%"
                    fontSize="12px"
                    padding="3%"
                    backgroundColor="#00BF3D"
                    onClick={handleSubmit}
                    width="30%"
                    borderRadius="10px"
                  >
                    Create Asset
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </div>
      ) : (
        <div>
        <SuccessCard text={`Asset has been added to ${props.selectedOption} successfully`} />

        </div>
      )}
    </div>
  );
};

export default RealEstateThree;
