import React, { useState } from "react";
import { Flex, Image, Box, Text, Button } from "@chakra-ui/react";
import danger from "../assets/svg/danger.svg";
import SuccessCard from "../card/SuccessCard";
import axios from "axios";
import { useSelector } from "react-redux";

const url = "https://sentinel-production.up.railway.app/api/v1/lawyers/";

const ProfileChangeModal = (props) => {
  const [displayModal, setDisplayModal] = useState(false);
  const userData = useSelector((state) => state.user);
  const handleProfileChange = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        name: props.name,
        email: props.email,
        number: props.phoneNumber,
      }, {
        headers: {
          Authorization: userData.token
        }
      });
      const { data } = resp;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
    setDisplayModal(true);
  };
  return (
    <Flex alignItems="center" justifyContent="center" height="100%">
      {displayModal ? (
        <SuccessCard text="Your profile has been updated Successfully" />
      ) : (
        <Flex
          flexDirection="column"
          alignItems="center"
          height="100%"
          padding="5%"
          justifyContent="center"
        >
          <Image width="15%" src={danger} />
          <Box marginTop="5%">
            <Text>Are You sure you want to make changes to your Profile?</Text>
          </Box>
          <Flex justifyContent="center" marginTop="5%" width="100%">
            <Button
              padding="5%"
              color="#7800F0"
              backgroundColor="white"
              border="1px solid black"
            >
              Cancel
            </Button>
            <Button
              padding="5% 6%"
              backgroundColor="#7800F0"
              color="white"
              marginLeft="6%"
              onClick={handleProfileChange}
            >
              Save
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default ProfileChangeModal;
