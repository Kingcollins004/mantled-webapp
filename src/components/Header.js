import { Flex, Button, Image, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex padding="1.5% 5%">
      <Image width="150px" src={logo} />
      <Spacer />
      <Flex flex="3" alignItems="center" justifyContent="center">
        <Text textAlign="center" color="#7800F0" fontSize="18px" fontWeight="500" margin="2% 5%">
          <Link to="/">Home</Link>
        </Text>
        <Text textAlign="center" fontSize="18px" fontWeight="500" margin="2% 5%">
          <Link to="pricing">Pricing</Link>
        </Text>
        <Text textAlign="center" fontSize="18px" fontWeight="500" margin="2% 5%">
          <Link to="/contact-us">Contact Us</Link>
        </Text>
      </Flex>
      <Spacer />
      <Flex flex="1" justifyContent="right" alignItems="center">
        <Text fontSize="18px" fontWeight="500" marginRight="8%">
          <Link to="/login">Login</Link>
        </Text>
        <Button
          marginBottom="2%"
          bgGradient="linear(to-r, #7800F0, #00A088)"
          padding="5% 10%"
          color="white"
        >
          <Link to="/getstarted">Get Started</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
