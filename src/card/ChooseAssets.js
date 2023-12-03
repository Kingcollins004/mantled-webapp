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
  Spacer,
} from "@chakra-ui/react";
import RealEstate from "./RealEstate";
import { useDispatch } from 'react-redux';
import {setAssets} from "../Feature/assetSlice"

const ChooseAssets = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [displayModal, setDisplayModal] = useState(true);
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    dispatch(setAssets({ title: option })); // Corrected payload
  };
  

  const handleNavigation = () => {
    if (selectedOption === "Real Estate" || selectedOption === "Tangible Assets" || selectedOption === "Financial Assets" || selectedOption === "Personal Effects" || selectedOption === "Debts and Liabilities" || selectedOption === "Others") {
      setDisplayModal(false)
    }
  };
  return (
    <div>
      {displayModal ? (
        <div>
          <ModalHeader marginTop="2%" fontSize="18px">
            Choose Assets
          </ModalHeader>
          <Text padding="1% 0px 3% 0%" fontSize="14px" color="#535353">
            What type of assets do you want to add
          </Text>
          <Flex justifyContent="center" padding={{ base: "0 1%", md: "0 12%" }}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding={{ base: "4% 0" }}
              margin={{ base: "0px 1%", md: "0px 2%" }}
              boxShadow="0px 3px 15px #F5F0FF;"
              textAlign="center"
              width="148px"
              height="168px"
              backgroundColor={
                selectedOption === "Real Estate" ? "#7800F0" : "white"
              }
              onClick={() => handleOptionClick("Real Estate")}
              border="1px solid #F8F8F8"
              borderRadius="22px"
            >
              <Box
                justifyContent="center"
                display="flex"
                width="63px"
                height="63px"
                borderRadius="50%"
                backgroundColor={
                  selectedOption === "Real Estate" ? "white" : "#F5F0FF"
                }
              >
                <Image width="40%" src={buildingIcon} />
              </Box>
              <Spacer />
              <Text
                color={selectedOption === "Real Estate" ? "white" : "black"}
                fontSize="14px"
                marginTop="15%"
              >
                Real Estate
              </Text>
            </Flex>

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding={{ base: "4% 0" }}
              margin={{ base: "0px 1%", md: "0px 2%" }}
              boxShadow="0px 3px 15px #F5F0FF;"
              textAlign="center"
              width="148px"
              height="168px"
              backgroundColor={
                selectedOption === "Tangible Assets" ? "#7800F0" : "white"
              }
              onClick={() => handleOptionClick("Tangible Assets")}
              border="1px solid #F8F8F8"
              borderRadius="22px"
            >
              <Box
                justifyContent="center"
                display="flex"
                width="63px"
                height="63px"
                borderRadius="50%"
                backgroundColor={
                  selectedOption === "Tangible Assets" ? "white" : "#F5F0FF"
                }
              >
                <Image width="40%" src={tokenIcon} />
              </Box>
              <Text
                color={selectedOption === "Tangible Assets" ? "white" : "black"}
                fontSize="14px"
                marginTop="15%"
              >
                Tangible Assets
              </Text>
            </Flex>

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding={{ base: "4% 0" }}
              margin={{ base: "0px 1%", md: "0px 2%" }}
              boxShadow="0px 3px 15px #F5F0FF;"
              textAlign="center"
              width="148px"
              height="168px"
              backgroundColor={
                selectedOption === "Financial Assets" ? "#7800F0" : "white"
              }
              onClick={() => handleOptionClick("Financial Assets")}
              border="1px solid #F8F8F8"
              borderRadius="22px"
            >
              <Box
                justifyContent="center"
                display="flex"
                width="63px"
                height="63px"
                borderRadius="50%"
                backgroundColor={
                  selectedOption === "Financial Assets" ? "white" : "#F5F0FF"
                }
              >
                <Image width="40%" src={financeIcon} />
              </Box>
              <Text
                color={
                  selectedOption === "Financial Assets" ? "white" : "black"
                }
                fontSize="14px"
                marginTop="15%"
              >
                Financial Assets
              </Text>
            </Flex>
          </Flex>

          <Flex marginTop="2%" justifyContent="center" padding={{ base: "0 1% 15% 0", md: "0 12% 10%" }}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding={{ base: "4% 0" }}
              margin={{ base: "0px 1%", md: "0px 2%" }}
              boxShadow="0px 3px 15px #F5F0FF;"
              textAlign="center"
              width="148px"
              height="168px"
              backgroundColor={
                selectedOption === "Personal Effects" ? "#7800F0" : "white"
              }
              onClick={() => handleOptionClick("Personal Effects")}
              border="1px solid #F8F8F8"
              borderRadius="22px"
            >
              <Box
                justifyContent="center"
                display="flex"
                width="63px"
                height="63px"
                borderRadius="50%"
                backgroundColor={
                  selectedOption === "Personal Effects" ? "white" : "#F5F0FF"
                }
              >
                <Image width="40%" src={carIcon} />
              </Box>
              <Spacer />
              <Text
                color={selectedOption === "Personal Effects" ? "white" : "black"}
                fontSize="14px"
                marginTop="15%"
                padding={{base: "2%"}}
              >
                Personal Effect
              </Text>
            </Flex>

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding={{ base: "4% 0" }}
              margin={{ base: "0px 1%", md: "0px 2%" }}
              boxShadow="0px 3px 15px #F5F0FF;"
              textAlign="center"
              width="148px"
              height="168px"
              backgroundColor={selectedOption === "Debts and Liabilities" ? "#7800F0" : "white"}
              onClick={() => handleOptionClick("Debts and Liabilities")}
              border="1px solid #F8F8F8"
              borderRadius="22px"
            >
              <Box
                justifyContent="center"
                display="flex"
                width="63px"
                height="63px"
                borderRadius="50%"
                backgroundColor={
                  selectedOption === "Debts and Liabilities" ? "white" : "#F5F0FF"
                }
              >
                <Image width="40%" src={debtIcon} />
              </Box>
              <Spacer />
              <Text
                color={selectedOption === "Debts and Liabilities" ? "white" : "black"}
                fontSize="14px"
                marginTop="15%"
              >
                Debt and Liabilities
              </Text>
            </Flex>

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding={{ base: "4% 0" }}
              margin={{ base: "0px 1%", md: "0px 2%" }}
              boxShadow="0px 3px 15px #F5F0FF;"
              textAlign="center"
              width="148px"
              height="168px"
              backgroundColor={
                selectedOption === "Others" ? "#7800F0" : "white"
              }
              onClick={() => handleOptionClick("Others")}
              border="1px solid #F8F8F8"
              borderRadius="22px"
            >
              <Box
                justifyContent="center"
                display="flex"
                width="63px"
                height="63px"
                borderRadius="50%"
                backgroundColor={
                  selectedOption === "Others" ? "white" : "#F5F0FF"
                }
              >
                <Image width="40%" src={otherIcon} />
              </Box>
              <Spacer />
              <Text
                color={selectedOption === "Others" ? "white" : "black"}
                fontSize="14px"
                marginTop="15%"
              >
                Other
              </Text>
            </Flex>
          </Flex>
          <Box
            marginBottom="3%"
            width="100%"
            textAlign="right"
            display={selectedOption ? "block" : "none"}
          >
            <Button
              color="white"
              marginRight="3%"
              fontSize="14px"
              padding="1% 5%"
              backgroundColor="#7800F0"
              onClick={handleNavigation}
            >
              Next
            </Button>
          </Box>
        </div>
      ) : (
        <div>
          {selectedOption ? (
            <div>
              <RealEstate selectedOption={selectedOption} goBack={() => setDisplayModal(true)} />
            </div>
          ) : (
            <div>not real estate</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChooseAssets;
