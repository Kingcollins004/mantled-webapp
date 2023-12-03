import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import emailIcon from "../assets/svg/envelope-icon.svg";
import userIcon from "../assets/svg/user-icon.svg";
import phone from "../assets/svg/phone-icon.svg";
import { useDisclosure } from "@chakra-ui/react";
import ProfileChangeModal from "../components/ProfileChangeModal";
import avatar from "../assets/svg/lawyer.svg";
import bin from "../assets/svg/bin.svg";

const Lawyer = () => {
  const [name] = useState("David Haruna");
  const [email] = useState("thispeople@gmail.com");
  const [number] = useState("+23498389829292");
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const finalRef = React.useRef(null);


  return (
    <Flex
      backgroundColor="white"
      margin="0 20%"
      marginTop="5%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      padding="5% 0"
    >
      <Flex alignItems="center" width="100%" textAlign="center" marginTop="2%" paddingX="5%">
        <Flex
          flex="1.4"
          flexDirection="column"
          alignItems="flex-end"
          textAlign="center"
          justifyContent="center"
        >
          <Image width="20%" src={avatar} />
          <Text fontWeight="600" fontSize="18px">
            My Lawyer
          </Text>
        </Flex>

        <Box flex="1"  alignItems="flex-end">
          <Image float="right" marginLeft="0%" width="17%" src={bin} />
        </Box>
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
      >
        <Box width="90%" marginTop="4%">
          <Text fontSize="18px" fontWeight="medium">
            Fullname:
          </Text>
          <Flex
            justifyContent="center"
            borderRadius="8px"
            alignItems="center"
            border="1px solid lightgray"
            padding="1% 2%"
          >
            <Image src={userIcon} />
            <Input
              focusBorderColor="none"
              focusBorder="none"
              border="none"
              width="100%"
              placeholder={name}
              padding="3%"
              type="text"
            />
            <Text color="#0496FF">Edit</Text>
          </Flex>
        </Box>

        <Box width="90%" marginTop="4%">
          <Text fontSize="18px" fontWeight="medium">
            Email:
          </Text>
          <Flex
            justifyContent="center"
            borderRadius="8px"
            alignItems="center"
            border="1px solid lightgray"
            padding="1% 2%"
          >
            <Image src={emailIcon} />
            <Input
              focusBorderColor="none"
              focusBorder="none"
              border="none"
              width="100%"
              placeholder={email}
              padding="3%"
              type="email"
            />
            <Text color="#0496FF">Edit</Text>
          </Flex>
        </Box>

        <Box width="90%" marginTop="4%">
          <Text fontSize="18px" fontWeight="medium">
            Phone Number:
          </Text>
          <Flex
            justifyContent="center"
            borderRadius="8px"
            alignItems="center"
            border="1px solid lightgray"
            padding="1% 2%"
          >
            <Image src={phone} />
            <Input
              focusBorderColor="none"
              focusBorder="none"
              border="none"
              width="100%"
              placeholder={number}
              padding="3%"
              type="number"
            />
            <Text color="#0496FF">Edit</Text>
          </Flex>
        </Box>

        <Flex
          alignItems="center"
          justifyContent="center"
          marginTop="5%"
          width="100%"
        >
          <Button
            width="90%"
            backgroundColor="#7800F0"
            color="white"
            padding="4%"
            onClick={onOpen}
          >
            Update
          </Button>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              borderRadius="30px"
              width={{ base: "95%", md: "35%" }}
              maxW="unset"
              textAlign="center"
              display="flex"
              height="40%"
              marginTop="15%"
            >
              <ModalBody>
                <ProfileChangeModal />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Lawyer;
