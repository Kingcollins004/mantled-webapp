import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Spacer,
  Input,
} from "@chakra-ui/react";
import "../App.css";
import Sidebar from "./Sidebar";
import avatar from "../assets/png/avatar.jpg";

const Profile = () => {
  return (
    <div>
      <Flex
        width="100%"
        height="100vh"
        backgroundColor="#FCFCFC"
        padding="0px 2%"
      >
        <Sidebar />

        <Box width="100%" padding="2% 2% ">
          <Box width="100%">
            <Flex width="100%">
              <Image
                borderRadius="50%"
                height="60px"
                width="60px"
                src={avatar}
              />
              <Box width="100%" marginLeft="1%">
                <Text fontWeight="600" color="#535353" fontSize="22px">
                  Welcome Back, David Haruna
                </Text>
                <Text fontSize="14px">Monthly Premium User</Text>
              </Box>
            </Flex>
          </Box>

          <Flex
            backgroundColor="white"
            margin="0 20%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Box>
              <Image src={avatar} />
              <Text>Tap to edit image</Text>
            </Box>
            <Flex flexDirection="column">
              <Box>
                <Input />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Profile;
