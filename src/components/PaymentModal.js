import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import checked from "../assets/svg/checked.svg";
import lock from "../assets/svg/lock.svg";

const PaymentModal = () => {
  const location = useLocation();

  const selectedOption = location.state.selectedOption;

  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/registration-success", { state: { selectedOption } });
  };

  return (
    <Box padding={{base: "2.8% 2%", md: "2.8% 5%"}} width={{base: "100%", md: "50%"}}>
      <Flex
        borderRadius="15px 15px 0px 0px"
        padding="4%"
        backgroundColor="#FCFCFC"
        
      >
        <Text fontSize="15px" fontWeight="600" marginTop="10px" flex="1">
          YOUR PLAN
        </Text>
        <Flex>
          <Text
            fontSize="15px"
            fontWeight="600"
            marginTop="0px"
            textAlign="right"
            flex="1"
            mt={2}
          >
            {selectedOption}
          </Text>
          <Image
            margin="10px 0px 0px 10px"
            width="20px"
            height="20px"
            src={checked}
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Box textAlign="center" padding="3% 5% 10% 5%" backgroundColor="white">
          <Box marginTop="5%">
            <Text
              textAlign="left"
              marginBottom="10px"
              fontSize="14px"
              fontWeight="600"
            >
              Card Number
            </Text>
            <InputGroup>
              <Input
                borderRadius="10px"
                padding="7% 4%"
                type="number"
                placeholder="XXXX - XXXX - XXXX - XXXX"
                color="#979DAC"
              />
            </InputGroup>
          </Box>

          <Flex marginTop="8%">
            <Box width="50%" marginRight="2%">
              <Text
                textAlign="left"
                marginBottom="10px"
                fontSize="12px"
                fontWeight="600"
              >
                Expiration Date
              </Text>
              <InputGroup>
                <Input
                  borderRadius="10px"
                  padding="14% 8%"
                  type="number"
                  placeholder="MM/YYYY"
                />
              </InputGroup>
            </Box>

            <Box width="50%" marginLeft="2%">
              <Text
                textAlign="left"
                marginBottom="10px"
                fontSize="12px"
                fontWeight="600"
              >
                Security Code
              </Text>
              <InputGroup>
                <Input
                  borderRadius="10px"
                  padding="14% 8%"
                  type="tel"
                  placeholder="CVV"
                />
              </InputGroup>
            </Box>
          </Flex>
          <Button
            background="linear-gradient(90deg, #7800F0 0%, #00A088 100%)"
            marginTop="8%"
            color="#fff"
            variant="outline"
            width="100%"
            padding="7%"
            borderRadius="10px"
            onClick={handleProceed}
          >
            Pay and Get Started
          </Button>
          <Flex marginTop="5%" justifyContent="center">
            <Image src={lock} />
            <Text
              marginLeft="5px"
              fontSize="14px"
              fontWeight="600"
              color="#979DAC"
            >
              Secured by Mantled Pay
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default PaymentModal;
