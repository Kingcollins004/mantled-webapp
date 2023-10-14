import React from "react";
import Header from "../components/Header";
import { Box, Button, Image, Text, Flex, Input, Spacer } from "@chakra-ui/react";
import displayImg from "../assets/svg/hompepageImg.svg";
import rectangle from "../assets/svg/Rectangle.svg";
import swift from "../assets/svg/swift.svg";
import security from "../assets/svg/Security.svg";
import like from "../assets/svg/blueLike.svg";
import phoneGroup from "../assets/svg/groupPhone.svg";
import appleBtn from "../assets/svg/appleBtn.svg";
import googleBtn from "../assets/svg/googleplayBtn.svg";
import imgLeft from "../assets/png/imgOne.png";
import imgb from "../assets/png/imgTwo.png";
import imgR from "../assets/png/imgThree.png";
import manImg from "../assets/png/manImg.png";
import logo from "../assets/svg/logo.svg";
import socialIcons from "../assets/png/SocialIcons.svg"

const HomePage = () => {
  return (
    <Box>
      <Box
        bgGradient="linear(#FFFFFF, rgb(255 255 255 0))"
        backgroundImage={rectangle}
        marginX="2%"
        borderRadius="0 0 32px 32px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Header />
        <Box marginTop="5%" textAlign="center">
          <Text fontSize="64px" fontWeight="bold">
            Experience Peace of Mind
          </Text>
          <Text marginBottom="1%" fontSize="40px" fontWeight="medium">
            Your Precious Assets, Our Trusted Vault
          </Text>
          <Text marginBottom="1%" fontSize="20px" padding="0px 30%">
            We Offer Seamless Protection, Effortless Access to all your valuable
            assets Elevate the Security of Your Valuables Instantly with Mantled
          </Text>
          <Button
            marginBottom="2%"
            bgGradient="linear(to-r, #7800F0, #00A088)"
            padding="1.5% 3%"
            color="white"
          >
            Get Started
          </Button>
        </Box>
        <Flex justifyContent="center">
          <Image height="490px" src={displayImg} />
        </Flex>
      </Box>

      <Flex marginY="5%" justifyContent="center">
        <Flex flexDirection="column" alignItems="center">
          <Image width="20%" src={swift} />
          <Text>Swift Upload</Text>
          <Text marginX="15%" textAlign="center">
            Seamlessly upload your assets along with relevant documents
            instantly
          </Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Image width="20%" src={security} />
          <Text>Swift Upload</Text>
          <Text marginX="15%" textAlign="center">
            Seamlessly upload your assets along with relevant documents
            instantly
          </Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Image width="20%" src={like} />
          <Text>Swift Upload</Text>
          <Text marginX="15%" textAlign="center">
            Seamlessly upload your assets along with relevant documents
            instantly
          </Text>
        </Flex>
      </Flex>

      <Flex>
        <Box flex="1">
          <Image width="100%" height="70%" src={imgLeft} />
          <Image marginTop="1%" width="100%" src={imgb} />
        </Box>

        <Box flex="1">
          <Box
            backgroundColor="#001233"
            padding="10% 5%"
            marginLeft="1%"
            height="70%"
          >
            <Text color="white" fontSize="38px" fontWeight="semibold">
              Protecting What Matters Most
            </Text>
            <Text
              color="white"
              fontSize="20px"
              fontWeight="medium"
              marginTop="5%"
            >
              We provide a state-of-the-art, encrypted platform where you can
              securely store, manage, and access your important documents,
              precious belongings, and sensitive information anytime, anywhere.
              Experience the peace of mind that comes with knowing your assets
              are protected by the latest security measures and accessible only
              by you. Start organizing and safeguarding your future with ease
              and confidence."
            </Text>
            <Button
              color="white"
              padding="4% 8%"
              marginTop="5%"
              backgroundColor="#001233"
              border="1px solid white"
            >
              Get Started
            </Button>
          </Box>
          <Image width="100%" marginTop="1%" src={imgR} />
        </Box>
      </Flex>

      <Flex justifyContent="center" alignItems="center" padding="5% 10%">
        <Box flex="1">
          <Text fontSize="48px" marginTop="-10%" fontWeight="bold">
            Download The App
          </Text>
          <Text fontSize="20px" marginTop="5%">
            Ready to take control of your assets and embrace ultimate security
            on the go? Download our app now and experience the power of our
            Digital Vault right at your fingertips.
          </Text>
          <Flex marginTop="5%">
            <Image marginRight="2%" src={appleBtn} />
            <Image src={googleBtn} />
          </Flex>
        </Box>
        <Box flex="1">
          <Image src={phoneGroup} />
        </Box>
      </Flex>
      <Flex backgroundColor="#001233" padding="0% 10%" alignItems="center">
        <Box flex="2">
          <Text fontSize="48px" fontWeight="bold" color="white">
            Put The Future In Safe Hands
          </Text>
          <Text fontSize="20px" color="white">
            Our mission is to provide you with a fortified digital fortress,
            ensuring your valuable assets are meticulously secured and easily
            accessible whenever you need them.
          </Text>
          <Button
            color="white"
            padding="4% 8%"
            marginTop="5%"
            backgroundColor="#001233"
            border="1px solid white"
          >
            Get Started
          </Button>
        </Box>
        <Box flex="1">
          <Image width="80%" height="70%" src={manImg} />
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
    </Box>
  );
};

export default HomePage;
