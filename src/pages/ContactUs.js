import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "../assets/svg/logo.svg";
import emailIcon from "../assets/svg/envelope-icon.svg";
import userIcon from "../assets/svg/user-icon.svg";
import pageIdc from "../assets/svg/page-idc.svg";
import phoneImg from "../assets/svg/phone-background.svg";
import "../App.css";
import { Toaster} from "react-hot-toast";

const ContactUs = () => {
  return (
    <div>
      <Box width="100%">
        <Flex direction={{ base: "column", md: "row" }}>
          <Toaster position="top-center" reverseOrder={false} />;
          <Box
            width={{ base: "100%", md: "50%" }}
            padding={{ base: "40px 20px 20px 20px", md: "40px 80px 20px 80px" }}
          >
            <Image src={logo} />

            <Box marginTop="4%">
              <Text fontSize="30px" fontWeight="700">
                Hello there,
              </Text>
              <Text fontSize="16px">
                We are available 24/7 to receive your message.
              </Text>
            </Box>

            <form>
              <Box marginTop="5%">
                <Text
                  htmlFor="username"
                  marginBottom="10px"
                  fontSize="14px"
                  fontWeight="600"
                >
                  Your Name:
                </Text>
                <InputGroup alignItems="center">
                  <InputLeftElement pointerEvents="none">
                    <Image
                      marginTop={{ base: "15px", md: "35px" }}
                      width="45%"
                      src={userIcon}
                    />
                  </InputLeftElement>
                  <Input
                    padding={{ base: "7%", md: "5%" }}
                    paddingLeft="35px"
                    type="text"
                    placeholder="Emeka Ayobami Yakubu"
                    id="username"
                    autoComplete="off"
                    required
                  />
                </InputGroup>
              </Box>

              <Flex marginTop="5%">
                <Box width="100%" marginRight="2%">
                  <Text marginBottom="10px" fontSize="12px" fontWeight="600">
                    Email Address
                  </Text>
                  <InputGroup alignItems="center">
                    <InputLeftElement
                      alignItems="center"
                      justifyContent="center"
                      pointerEvents="none"
                    >
                      <Image
                        marginTop={{ base: "13px", md: "20px" }}
                        src={emailIcon}
                      />
                    </InputLeftElement>
                    <Input
                      padding={{ base: "14%", md: "5%" }}
                      type="email"
                      placeholder="Email Address"
                      paddingLeft="35px"
                      id="email"
                      required
                    />
                  </InputGroup>
                </Box>
              </Flex>

              <Box marginTop="3%">
                <Text marginTop="15px" fontSize="12px" fontWeight="600">
                  Type your message here:
                </Text>
                <InputGroup marginTop="2%" size="md">
                  <Input
                    padding={{ base: "7%", md: "3%" }}
                    height="200px"
                    paddingLeft={{ base: "10px", md: "35px" }}
                    type="text"
                    id="text"
                    required
                  />
                </InputGroup>
              </Box>

              <Button
                background="linear-gradient(90deg, #7800F0 0%, #00A088 100%)"
                marginTop="4%"
                color="#fff"
                variant="outline"
                width="100%"
                padding={{ base: "7%", md: "5%" }}
                _hover={{
                  bg: "90deg, #7800F0 0%, #00A088 100%",
                  color: "white",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
          <Box
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundImage={phoneImg}
            width={{ base: "100%", md: "50%" }}
            height="100vh"
            display={{ base: "none", md: "block" }}
          >
            <Box textAlign="center" marginTop="75%" color="white" width="100%">
              <Text fontSize="28px">Keep Track Of All Your</Text>
              <Text lineHeight="15px" fontSize="28px">
                Valuable Assets in One Place
              </Text>
              <Box marginTop="2%">
                <Text fontSize="16px">
                  Keep your assets safe and access safer,{" "}
                </Text>
                <Text fontSize="16px">with premium solutions</Text>
              </Box>
              <Box justifyContent="center" display="flex" marginTop="5%">
                <Image src={pageIdc} />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default ContactUs;
