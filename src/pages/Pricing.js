import React from "react";
import Header from "../components/Header";
import {
  Flex,
  Box,
  Button,
  Image,
  Text,
  Spacer,
  Input,
} from "@chakra-ui/react";
import woman from "../assets/png/woman.png";
import tickCircle from "../assets/svg/tickCircle.svg";
import socialIcons from "../assets/png/SocialIcons.svg";
import appleBtn from "../assets/svg/appleBtn.svg";
import googleBtn from "../assets/svg/googleplayBtn.svg";
import logo from "../assets/svg/logo.svg";

const Pricing = () => {
  return (
    <div>
      <Header />
      <Text textAlign="center" marginTop="4%" fontSize="48px" fontWeight="600">
        Our Pricing Plan
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        margin="3% 5%"
        borderRadius="24px"
        backgroundColor="#001233"
      >
        <Box margin="2% 1%" flex="1" padding="2% 8%" color="white">
          <Text fontSize="20px">Save More</Text>
          <Text fontSize="24px" marginTop="2%" fontWeight="semibold">
            With our Monthly Plans.
          </Text>
          <Text marginTop="2%" fontSize="18px" marginRight="30%">
            Choose a plan and get onboard in minutes. Then get 10% discount for
            your next payment.
          </Text>
          <Image src={woman} />
        </Box>
        <Box
          flex="1"
          borderRadius="20px"
          padding="2%"
          textAlign="center"
          backgroundColor="white"
          margin="4% 5%"
        >
          <Text fontSize="24px" fontWeight="500">
            Monthly Plan
          </Text>
          <Text fontSize="16px" fontWeight="500">
            N6,000 / User
          </Text>
          <Flex
            height="70%"
            flexDirection="column"
            justifyContent="space-around"
            textAlign={{ base: "left", md: "center" }}
          >
            <Flex marginY={{ base: "3%", md: "1%" }}>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Single repository for all your assets
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }}>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Sync with all your finance and investment apps
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }}>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Automated network calculator
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }}>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Unlimited storage
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }}>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Free basic legal advice
              </Text>
            </Flex>
          </Flex>
          <Button
            marginBottom="2%"
            bgGradient="linear(to-r, #7800F0, #00A088)"
            padding={{ base: "10% 15%", md: "5% 10%" }}
            color="white"
            borderRadius="4px"
            marginY={{ base: "3%", md: "1%" }}
          >
            Get Started
          </Button>
        </Box>
      </Flex>

      <Flex margin="0 4%" flexDirection={{ base: "column", md: "row" }}>
        <Box
          flex="1"
          borderRadius="20px"
          padding="2%"
          textAlign="center"
          bgGradient="linear(#7800F0, #7800F0)"
          margin="4% 1%"
          height="max-content"
          color="white"
        >
          <Text fontSize="24px" fontWeight="500">
            Quarterly Plan
          </Text>
          <Text marginTop="1%" fontSize="16px" fontWeight="500">
            N12,000 / User
          </Text>
          <Flex
            height="70%"
            flexDirection="column"
            justifyContent="space-around"
            margin="4% 0"
            textAlign={{ base: "left", md: "center" }}
          >
            <Flex marginY={{ base: "3%", md: "1%" }} margin="2% 0">
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Access to multiple templates to create your will
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }} margin="2% 0">
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Unlimited number of beneficiaries
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }} margin="2% 0">
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                World Class Research Powered by Morningstar
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }} margin="2% 0">
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Buy Sell Hold Ratings
              </Text>
            </Flex>
            <Flex margin="2% 0">
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Trove Investor Education Portal
              </Text>
            </Flex>
          </Flex>
          <Button
            marginBottom="2%"
            bgGradient="linear(#7800F0, #7800F0)"
            padding={{ base: "10% 15%", md: "5% 10%" }}
            color="white"
            borderRadius="4px"
            border={{ base: "1px solid white" }}
          >
            Get Started
          </Button>
        </Box>

        <Box
          flex="1"
          borderRadius="20px"
          padding="2%"
          textAlign="center"
          backgroundColor="#EEEEEE"
          margin="4% 1%"
        >
          <Text fontSize="24px" fontWeight="500">
            Yearly Plan
          </Text>
          <Text fontSize="16px" fontWeight="500">
            N24,000 / User
          </Text>
          <Flex
            height="70%"
            flexDirection="column"
            textAlign={{ base: "left", md: "center" }}
            justifyContent="space-around"
          >
            <Flex marginY={{ base: "3%", md: "1%" }}>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Single repository for all your assets
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }}>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Sync with all your finance and investment apps
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }}>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Automated network calculator
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }}>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Unlimited storage
              </Text>
            </Flex>
            <Flex marginY={{ base: "3%", md: "1%" }}>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Free basic legal advice
              </Text>
            </Flex>
          </Flex>
          <Button
            marginBottom="2%"
            bgGradient="linear(to-r, #7800F0, #00A088)"
            padding={{ base: "10% 15%", md: "5% 10%" }}
            color="white"
            borderRadius="4px"
          >
            Get Started
          </Button>
        </Box>
      </Flex>

      <Box
        padding={{ base: "2% 4%", md: "3% 10%" }}
        marginY={{ base: "15%", md: "5%" }}
      >
        <Text
          textAlign="right"
          fontSize={{ base: "20px", md: "44px" }}
          fontWeight="bold"
        >
          Newsletter
        </Text>
        <Flex
          alignItems="center"
          border="1px solid lightgray"
          borderRadius={{ base: "0", md: "20px" }}
        >
          <Input
            padding="2% 5%"
            focusBorderColor="none"
            focusBorder="none"
            placeholder="Enter Your Email Address"
            borderRadius={{ base: "0", md: "20px 0 0 20px" }}
            border="none"
            fontSize={{ base: "14px", md: "16px" }}
          />
          <Button
            borderRadius={{ base: "0", md: "20px" }}
            backgroundColor="#7800F0"
            color="white"
            padding={{ base: "4% 8%", md: "2.4% 5%" }}
            fontSize={{ base: "14px" }}
          >
            Subscribe Now!
          </Button>
        </Flex>
        <Text
          fontSize={{ base: "14px", md: "20px" }}
          textAlign="center"
          marginTop="1%"
        >
          Get Updates from us directly in your Inbox
        </Text>
        <Flex
          alignItems={{ base: "left", md: "center" }}
          flexDirection={{ base: "column", md: "row" }}
          marginTop="3%"
        >
          <Box>
            <Image width={{ base: "40%", md: "90%" }} src={logo} />
            <Text>Home</Text>
            <Text>Pricing</Text>
            <Text>Contact Us</Text>
            <Text>Login</Text>
            <Text>Get Started</Text>
          </Box>
          <Spacer />
          <Box
            marginY={{ base: "5%", md: "2%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontSize={{ base: "20px", md: "28px" }} fontWeight="semibold">
              Get the App on
            </Text>
            <Flex
              justifyContent={{ base: "center", md: "left" }}
              marginTop="5%"
            >
              <Image marginRight="2%" src={appleBtn} />
              <Image src={googleBtn} />
            </Flex>
          </Box>
          <Spacer />
          <Flex justifyContent={{ base: "center", md: "left" }}>
            <Image src={socialIcons} />
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default Pricing;
