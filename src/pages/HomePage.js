import React from "react";
import Header from "../components/Header";
import {
  Box,
  Button,
  Image,
  Text,
  Flex,
  Input,
  Spacer,
} from "@chakra-ui/react";
import displayImg from "../assets/svg/hompepageImg.svg";
import forPhone from "../assets/svg/Forp.svg";
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
import socialIcons from "../assets/png/SocialIcons.svg";
import { useMediaQuery } from "@chakra-ui/react";

const HomePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      <Flex
        bgGradient="linear(#FFFFFF, rgb(255 255 255 0))"
        backgroundImage={rectangle}
        marginX="2%"
        borderRadius={{ base: "0px 0px 15px 0px", md: "0 0 32px 32px" }}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        flexDirection="column"
        height="fit-content"
      >
        <Header />
        <Box marginTop={{ base: "10%", md: "5%" }} textAlign="center">
          <Text
            fontSize={{ base: "24px", md: "64px" }}
            fontWeight={{ base: "black", md: "bold" }}
          >
            Experience Peace of Mind
          </Text>
          <Text
            marginBottom="1%"
            fontSize={{ base: "16px", md: "40px" }}
            fontWeight="medium"
            marginTop={{ base: "3%", md: "0" }}
          >
            Your Precious Assets, Our Trusted Vault
          </Text>
          <Text
            marginBottom="1%"
            fontSize={{ base: "14px", md: "20px" }}
            padding={{ base: "0 5%", md: "0px 30%" }}
            marginTop={{ base: "5%", md: "0" }}
            color="#7F7F84"
          >
            We Offer Seamless Protection, Effortless Access to all your valuable
            assets Elevate the Security of Your Valuables Instantly with Mantled
          </Text>
          <Button
            marginBottom="2%"
            bgGradient="linear(to-r, #7800F0, #00A088)"
            padding={{ base: "9% 16%", md: "1.5% 3%" }}
            color="white"
            marginTop={{ base: "7%", md: "0" }}
          >
            Get Started
          </Button>
        </Box>
        <Spacer />
        <Flex justifyContent="center">
          {isMobile ? (
            <Image
              marginTop={{ base: "10%", md: "0" }}
              width="90%"
              src={forPhone}
            />
          ) : (
            <Image height="490px" src={displayImg} />
          )}
        </Flex>
      </Flex>

      <Flex
        marginY="5%"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          marginY={{ base: "3%", md: "1%" }}
        >
          <Image width="20%" src={swift} />
          <Text
            fontWeight="bold"
            marginY={{ base: "1%", md: "2%" }}
            fontSize={{ base: "16px", md: "26px" }}
          >
            Swift Upload
          </Text>
          <Text marginX="15%" textAlign="center">
            Seamlessly upload your assets along with relevant documents
            instantly
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          marginY={{ base: "3%", md: "1%" }}
        >
          <Image width={{ base: "20%", md: "16%" }} src={security} />
          <Text
            fontWeight="bold"
            marginY={{ base: "1%", md: "2%" }}
            fontSize={{ base: "16px", md: "26px" }}
          >
            Security
          </Text>
          <Text marginX="15%" textAlign="center">
            Your Virtual safety deposit box is securely encrypted with access to
            only authorized individuals
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          marginY={{ base: "3%", md: "1%" }}
        >
          <Image width="20%" src={like} />
          <Text
            fontWeight="bold"
            marginY={{ base: "1%", md: "2%" }}
            fontSize={{ base: "16px", md: "26px" }}
          >
            Convenient
          </Text>
          <Text marginX="15%" textAlign="center">
            Track and monitor your valuable assets in real time on any device
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Box flex="1">
          <Image width="100%" height="70%" src={imgLeft} />
          <Image marginTop="1%" width="100%" src={imgb} />
        </Box>

        <Box flex="1">
          <Box
            backgroundColor="#001233"
            padding="10% 5%"
            marginLeft={{ base: "0", md: "1%" }}
            height="70%"
          >
            <Text
              color="white"
              fontSize={{ base: "20px", md: "38px" }}
              fontWeight="semibold"
            >
              Protecting What Matters Most
            </Text>
            <Text
              color="white"
              fontSize={{ base: "16px", md: "20px" }}
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

      <Flex
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        padding="5% 10%"
      >
        <Box
          flex="1"
          marginY={{ base: "15%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "20px", md: "48px" }}
            marginTop="-10%"
            fontWeight="bold"
          >
            Download The App
          </Text>
          <Text fontSize={{ base: "16px", md: "20px" }} marginTop="5%">
            Ready to take control of your assets and embrace ultimate security
            on the go? Download our app now and experience the power of our
            Digital Vault right at your fingertips.
          </Text>
          <Flex marginTop="5%" justifyContent={{ base: "center", md: "left" }}>
            <Image marginRight="2%" src={appleBtn} />
            <Image src={googleBtn} />
          </Flex>
        </Box>
        <Box flex="1">
          <Image src={phoneGroup} />
        </Box>
      </Flex>
      <Flex
        backgroundColor="#001233"
        flexDirection={{ base: "column", md: "row" }}
        padding="0% 10%"
        alignItems="center"
      >
        <Box
          flex="2"
          marginY={{ base: "15%", md: "5%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "20px", md: "48px" }}
            fontWeight="bold"
            color="white"
          >
            Put The Future In Safe Hands
          </Text>
          <Text fontSize={{ base: "16px", md: "20px" }} color="white">
            Our mission is to provide you with a fortified digital fortress,
            ensuring your valuable assets are meticulously secured and easily
            accessible whenever you need them.
          </Text>
          <Button
            color="white"
            padding={{ base: "10% 15%", md: "4% 8%" }}
            marginTop="5%"
            backgroundColor="#001233"
            border="1px solid white"
          >
            Get Started
          </Button>
        </Box>
        <Box flex="1">
          <Image width="90%" height="70%" src={manImg} />
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
          flexDirection={{ base: "column", md:"row" }}
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
          <Box marginY={{ base: "5%", md:"2%" }} textAlign={{ base: "center", md: "left" }}>
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
    </Box>
  );
};

export default HomePage;
