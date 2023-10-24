import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  Flex,
  Text,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom"; // Import NavLink from React Router
import sidebarLogo from "../assets/svg/sidebarIcon.svg";
import homeIcon from "../assets/svg/sidebarHome.svg";
import vaultIcon from "../assets/svg/vaultIcon.svg";
import collaborateIcon from "../assets/svg/collaborateIcon.svg";
import notificationIcon from "../assets/svg/notificationIcon.svg";
import userIcon from "../assets/svg/userIcon.svg";
import settingsIcon from "../assets/svg/settingIcon.svg";
import avatar from "../assets/png/avatar.jpg";
import "../App.css";
import { useDisclosure } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const SidebarMenuItem = ({ to, icon, text }) => (
  <ChakraLink
    as={NavLink}
    to={to}
    exact
    p="2"
    display="flex"
    alignItems="center"
    _hover={{ textDecoration: "none", bg: "#F5F0FF" }}
    _activeLink={{ color: "#700BE9" }}
    activeClassName="active-link" // Add this line to apply a class for active links
  >
    <Image width="20px" src={icon} />
    <Text fontSize="14px" marginLeft="2">
      {text}
    </Text>
  </ChakraLink>
);

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState("left");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <Box
        margin="0px"
        height={{ base: "10%", md: "100vh" }}
        width="15vw"
        borderRight={{ base: "none", md: "1px solid lightgrey" }}
        overflow="hidden"
        transition="width 0.3s"
        padding="0%"
      >
        {isMobile ? (
          <Box>
            <Box
              onClick={onOpen}
              padding="20% 0 10% 10%"
              marginBottom="10%"
              style={{ cursor: "pointer" }}
            >
              <Image width="40px" src={sidebarLogo} />
            </Box>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerBody>
                  <Box
                    padding="5% 0%"
                    marginBottom="10%"
                    style={{ cursor: "pointer" }}
                  >
                    <Image width="40px" src={sidebarLogo} />
                  </Box>
                  <Box marginTop="0px">
                    <Text fontSize="12px" color="#979DAC">
                      ANALYTICS
                    </Text>
                    <SidebarMenuItem
                      to="/dashboard"
                      icon={homeIcon}
                      text="Dashboard"
                    />
                  </Box>
                  <Box marginTop="40px">
                    <Text display="block" fontSize="12px" color="#979DAC">
                      APPLICATION
                    </Text>
                    <SidebarMenuItem
                      to="/myvault"
                      icon={vaultIcon}
                      text="My Vault"
                    />
                    <SidebarMenuItem
                      to="/collaborations"
                      icon={collaborateIcon}
                      text="Collaborations"
                    />
                    <SidebarMenuItem
                      to="/notifications"
                      icon={notificationIcon}
                      text="Notifications"
                    />
                  </Box>
                  <Box marginTop="40px">
                    <Text fontSize="12px" color="#979DAC">
                      PREFERENCES
                    </Text>
                    <SidebarMenuItem
                      to="/profile"
                      icon={userIcon}
                      text="Profile"
                    />
                    <SidebarMenuItem
                      to="/settings"
                      icon={settingsIcon}
                      text="Settings"
                    />
                  </Box>
                  <Box
                    borderRadius="20px"
                    marginRight="20px"
                    padding="5%"
                    backgroundColor="#F5F0FF"
                    marginTop="40%"
                  >
                    <Flex>
                      <Image borderRadius="50%" width="52px" src={avatar} />
                      <Box marginLeft="10px" marginTop="5px">
                        <Text fontSize="14px" fontWeight="bold">
                          David Haruna
                        </Text>
                        <Text fontSize="14px">Premium User</Text>
                      </Box>
                    </Flex>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        ) : (
          <Box>
            <Box
              onClick={onOpen}
              padding="15% 0%"
              marginBottom="10%"
              style={{ cursor: "pointer" }}
            >
              <Image width="40px" src={sidebarLogo} />
            </Box>
            <Box marginTop="0px">
              <Text fontSize="12px" color="#979DAC">
                ANALYTICS
              </Text>
              <SidebarMenuItem
                to="/dashboard"
                icon={homeIcon}
                text="Dashboard"
              />
            </Box>
            <Box marginTop="40px">
              <Text display="block" fontSize="12px" color="#979DAC">
                APPLICATION
              </Text>
              <SidebarMenuItem to="/myvault" icon={vaultIcon} text="My Vault" />
              <SidebarMenuItem
                to="/collaborations"
                icon={collaborateIcon}
                text="Collaborations"
              />
              <SidebarMenuItem
                to="/notifications"
                icon={notificationIcon}
                text="Notifications"
              />
            </Box>
            <Box marginTop="40px">
              <Text fontSize="12px" color="#979DAC">
                PREFERENCES
              </Text>
              <SidebarMenuItem to="/profile" icon={userIcon} text="Profile" />
              <SidebarMenuItem
                to="/settings"
                icon={settingsIcon}
                text="Settings"
              />
            </Box>
            <Box
              borderRadius="20px"
              marginRight="20px"
              padding="5%"
              backgroundColor="#F5F0FF"
              marginTop="80%"
            >
              <Flex>
                <Image borderRadius="50%" width="52px" src={avatar} />
                <Box marginLeft="10px" marginTop="5px">
                  <Text fontSize="14px" fontWeight="bold">
                    David Haruna
                  </Text>
                  <Text fontSize="14px">Premium User</Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Sidebar;
