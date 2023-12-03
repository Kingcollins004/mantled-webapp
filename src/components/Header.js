import {
  Flex,
  Button,
  Image,
  Text,
  Spacer,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/svg/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import menu from "../assets/svg/menu.svg";

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      {isMobile ? (
        <Flex padding="1.5% 5%">
          <Image width={{ base: "100px", md: "150px" }} src={logo} />
          <Spacer />

          <Menu>
            <MenuButton marginRight="-5%" backgroundColor="white" as={Button}>
              <Image src={menu} />
            </MenuButton>
            <MenuList>
              <MenuItem width="100%">
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem width="100%">
                <Link to="pricing">Pricing</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/contact-us">Contact Us</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/login">Login</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/getstarted">Get Started</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <Flex padding="1.5% 5%">
          <Image width={{ base: "100px", md: "150px" }} src={logo} />
          <Spacer />

          <Flex flex="3" alignItems="center" justifyContent="center">
            <Text
              textAlign="center"
              color="#7800F0"
              fontSize="18px"
              fontWeight="500"
              margin="2% 5%"
            >
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#7800F0" : "black",
                  };
                }}
                to="/"
              >
                Home
              </NavLink>
            </Text>
            <Text
              textAlign="center"
              fontSize="18px"
              fontWeight="500"
              margin="2% 5%"
            >
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#7800F0" : "black",
                  };
                }}
                to="/pricing"
              >
                Pricing
              </NavLink>
            </Text>
            <Text
              textAlign="center"
              fontSize="18px"
              fontWeight="500"
              margin="2% 5%"
            >
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
              _hover="none"
            >
              <Link to="/getstarted">Get Started</Link>
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Header;
