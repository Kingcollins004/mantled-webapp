import { useState } from "react";
import { Box, Flex, Text, Image, Spacer, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import dot from "../assets/svg/dot.svg";

function SubscriptionDisplay() {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleProceed = () => {
    navigate("/profile-registration-three-2", { state: { selectedOption } });
  };

  return (
    <Box padding="2.8% 5%" width={{base: "100%", md: "50%"}}>
      <Flex flexDirection="column">
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="10px"
          border={selectedOption === "MONTHLY" ? "2px solid blue" : "gray.200"}
          cursor="pointer"
          onClick={() => handleOptionClick("MONTHLY")}
          _hover={{ borderColor: "blue.500" }}
          backgroundColor="white"
        >
          <Flex>
            <Image height="20px" width="20px" src={dot} />
            <Spacer />
            <Text fontSize="21px" fontWeight="600" color="#121936">
              N30,000
            </Text>
          </Flex>
          <Box padding="2%">
            <Text fontSize="14px" fontWeight="600" color="#121936">
              MONTHLY
            </Text>
            <Text fontSize="13px" color="#707070">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
        </Box>

        <Box
          p={4}
          borderWidth="1px"
          borderRadius="10px"
          border={selectedOption === "QUATERLY" ? "2px solid blue" : "gray.200"}
          cursor="pointer"
          onClick={() => handleOptionClick("QUATERLY")}
          _hover={{ borderColor: "blue.500" }}
          mt={4}
          backgroundColor="white"
        >
          <Flex>
            <Image src={dot} />
            <Spacer />
            <Text fontSize="21px" fontWeight="600" color="#121936">
              N100,000
            </Text>
          </Flex>
          <Box padding="2%">
            <Text fontSize="14px" fontWeight="600" color="#121936">
              QUATERLY
            </Text>
            <Text fontSize="13px" color="#707070">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
        </Box>

        <Box
          p={4}
          borderWidth="1px"
          borderRadius="10px"
          border={selectedOption === " ANNUALY" ? "2px solid blue" : "gray.200"}
          cursor="pointer"
          onClick={() => handleOptionClick(" ANNUALY")}
          _hover={{ borderColor: "blue.500" }}
          mt={4}
          backgroundColor="white"
        >
          <Flex>
            <Image src={dot} />
            <Spacer />
            <Text fontSize="21px" fontWeight="600" color="#121936">
              N250,000
            </Text>
          </Flex>
          <Box padding="2%">
            <Text fontSize="14px" fontWeight="600" color="#121936">
              ANNUALY
            </Text>
            <Text fontSize="13px" color="#707070">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
        </Box>

        <Button
          background="linear-gradient(90deg, #7800F0 0%, #00A088 100%)"
          marginTop="4%"
          color="#fff"
          variant="outline"
          width="100%"
          padding="5%"
          borderRadius="10px"
          onClick={handleProceed}
        >
          Choose this plan
        </Button>
      </Flex>
    </Box>
  );
}

export default SubscriptionDisplay;
