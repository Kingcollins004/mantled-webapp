import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Button,
  InputGroup,
  Spacer,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "../assets/svg/logo.svg";
import line from "../assets/svg/Nline.svg";
import backArrow from "../assets/svg/back-arrow.svg";
import "../App.css";

const RegistrationPageTwo = () => {
  return (
    <div>
      <Box height="100vh" backgroundColor="#F6F8FA">
        <Box backgroundColor="white" padding="0% 8%">
          <Flex flexDirection={{base: "column", md: "row"}}>
            <Box flex="1" padding="1.5% 0%">
              <Flex>
                <Box marginTop="5%" marginRight={{base: "3%", md: "15%"}}>
                  <Link to="/">
                    <Image width="20px" src={backArrow} />
                  </Link>
                </Box>
                <Image marginTop="1%" src={logo} />
              </Flex>
            </Box>
            <Spacer />
            <Box marginTop="2.2%" flex="1">
              <Flex>
                <Text
                  fontSize="14px"
                  color="#979DAC"
                  borderRadius="50px"
                  padding="1% 4%"
                  border="2px solid #979DAC"
                >
                  1
                </Text>
                <Spacer />
                <Image src={line} />
                <Spacer />
                <Text
                  fontSize="14px"
                  fontWeight="700"
                  color="#700BE9"
                  borderRadius="50px"
                  padding="1% 4%"
                  border="2px solid #700BE9"
                >
                  2
                </Text>
                <Spacer />
                <Image src={line} />
                <Spacer />
                <Text
                  fontSize="14px"
                  color="#979DAC"
                  borderRadius="50px"
                  padding="1% 4%"
                  border="2px solid #979DAC"
                >
                  3
                </Text>
              </Flex>
            </Box>
            <Spacer />
            <Box flex="1" padding={{base: "6.5% 0", md: "2.5% 0"}}>
              <Text textAlign={{base: "center", md: "right"}} color="#979DAC" fontSize="13px">
                COMPLETE YOUR INFO
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box
          textAlign="center"
          margin={{base: "5% 3%", md: "3% 32%"}}
          padding={{base: "10% 5%", md: "3% 5%"}}
          borderRadius="20px"
          backgroundColor="white"
        >
          <Text
            marginLeft="-5px"
            color="#979DAC"
            textAlign="center"
            fontSize="16px"
            fontWeight="700"
            marginBottom="8%"
          >
            Step 2 of 3
          </Text>

          <Box marginTop="5%">
            <Text
              textAlign="left"
              marginBottom="10px"
              fontSize="14px"
              fontWeight="600"
            >
              Next of Kin
            </Text>
            <InputGroup>
              <Input
                borderRadius="10px"
                padding="7%"
                type="text"
                placeholder="Fullname"
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
                Next of Kin Email
              </Text>
              <InputGroup>
                <Input
                  borderRadius="10px"
                  padding="14%"
                  type="email"
                  placeholder="Email"
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
                Next of Kin Phone Number
              </Text>
                <InputGroup>
                  <InputLeftElement display={{base: "none", md:"flex"}} pointerEvents="none">
                    <Text color="#979DAC" fontSize="14px" margin={{base:"8px 0px 0px 15px", md:"15px 0px 0px 25px"}}>+234</Text>
                  </InputLeftElement>
                  <Input
                    borderRadius="10px"
                    padding="14%"
                    type="tel"
                    placeholder="Phone number"
                    paddingLeft={{base: "10px", md: "60px"}}
                  />
                </InputGroup>
            </Box>
          </Flex>

          <Button
            background="linear-gradient(90deg, #7800F0 0%, #00A088 100%)"
            marginTop="10%"
            color="#fff"
            variant="outline"
            width="100%"
            padding="7%"
            borderRadius="10px"
            fontSize="15px"
            marginBottom="8%"
          >
            <Link to="/profile-registration-three">Proceed To Next</Link>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default RegistrationPageTwo;
