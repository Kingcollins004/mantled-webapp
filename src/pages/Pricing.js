import React from "react";
import Header from "../components/Header";
import { Flex, Box, Button, Image, Text, Spacer, Input } from "@chakra-ui/react";
import woman from "../assets/png/woman.png";
import tickCircle from "../assets/svg/tickCircle.svg";
import socialIcons from "../assets/png/SocialIcons.svg"
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
      <Flex margin="3% 5%" borderRadius="24px" backgroundColor="#001233">
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
          >
            <Flex>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Single repository for all your assets
              </Text>
            </Flex>
            <Flex>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Sync with all your finance and investment apps
              </Text>
            </Flex>
            <Flex>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Automated network calculator
              </Text>
            </Flex>
            <Flex>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Unlimited storage
              </Text>
            </Flex>
            <Flex>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Free basic legal advice
              </Text>
            </Flex>
          </Flex>
          <Button
            marginBottom="2%"
            bgGradient="linear(to-r, #7800F0, #00A088)"
            padding="5% 10%"
            color="white"
            borderRadius="4px"
          >
            Get Started
          </Button>
        </Box>
      </Flex>

      <Flex margin="0 4%">
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
          >
            <Flex margin="2% 0">
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
              Access to multiple templates to create your will
              </Text>
            </Flex>
            <Flex margin="2% 0">
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
              Unlimited number of beneficiaries
              </Text>
            </Flex>
            <Flex margin="2% 0">
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
              World Class Research Powered by Morningstar
              </Text>
            </Flex>
            <Flex margin="2% 0">
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
            padding="5% 10%"
            color="white"
            borderRadius="4px"
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
            justifyContent="space-around"
          >
            <Flex>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Single repository for all your assets
              </Text>
            </Flex>
            <Flex>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Sync with all your finance and investment apps
              </Text>
            </Flex>
            <Flex>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Automated network calculator
              </Text>
            </Flex>
            <Flex>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Unlimited storage
              </Text>
            </Flex>
            <Flex>
              <Image src={tickCircle} />
              <Text fontSize="18px" fontWeight="500">
                Free basic legal advice
              </Text>
            </Flex>
          </Flex>
          <Button
            marginBottom="2%"
            bgGradient="linear(to-r, #7800F0, #00A088)"
            padding="5% 10%"
            color="white"
            borderRadius="4px"
          >
            Get Started
          </Button>
        </Box>
      </Flex>

      <Box padding="3% 10%">
        <Text textAlign="right" fontSize="44px" fontWeight="bold">
          Newsletter
        </Text>
        <Flex
          alignItems="center"
          border="1px solid lightgray"
          borderRadius="20px"
        >
          <Input
            padding="2% 5%"
            focusBorderColor="none"
            focusBorder="none"
            placeholder="Enter Your Email Address"
            borderRadius="20px 0 0 20px"
            border="none"
          />
          <Button
            borderRadius="20px"
            backgroundColor="#7800F0"
            color="white"
            padding="2.4% 5%"
          >
            Subscribe Now!
          </Button>
        </Flex>
        <Text fontSize="20px" textAlign="center" marginTop="1%">
          Get Updates from us directly in your Inbox
        </Text>
        <Flex alignItems="center" marginTop="3%">
        <Box>
          <Image width="90%" src={logo} />
          <Text>Home</Text>
          <Text>Pricing</Text>
          <Text>Contact Us</Text>
          <Text>Login</Text>
          <Text>Get STarted</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>Get the App on</Text>
          <Flex marginTop="5%">
            <Image marginRight="2%" src={appleBtn} />
            <Image src={googleBtn} />
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Image src={socialIcons}/>
        </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Pricing;
