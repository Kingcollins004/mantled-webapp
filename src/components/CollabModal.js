import {
  Button,
  Box,
  Flex,
  Text,
  Image,
  Spacer,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
} from "@chakra-ui/react";
import React from "react";
import dummyImg from "../assets/png/dummyImg.png";
import Av1 from "../assets/png/avatar1.jpg";
import Av2 from "../assets/png/avatar2.jpg";
import Av3 from "../assets/png/avatar3.jpg";
import Arrow from "../assets/svg/arrowIcon.svg";
import { useDisclosure } from "@chakra-ui/react";
import AddCollab from "../card/AddCollab";

const CollabModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <div>
      <Box
        backgroundColor="white"
        padding="3%"
        borderRadius="23px"
        marginLeft="5%"
        marginRight="3%"
        marginBottom={{base: "10%"}}
      >
        <Flex alignItems="center" paddingTop="2%" marginBottom={{base:"10%", md:"5%"}} width="100%">
          <Text fontWeight="medium" fontSize="16px" color="#121936">
            Collaborators
          </Text>
          <Spacer />
          <Button
            height="40px"
            borderRadius="7px"
            color="#7800F0"
            fontWeight="semibold"
            fontSize="14px"
            onClick={onOpen}
          >
            Add Collaborators
          </Button>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              borderRadius="30px"
              width={{base:"97%", md: "45%"}}
              maxW="unset"
              textAlign="center"
            >
              <ModalBody>
                <AddCollab />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
        <Box>
          <Text marginBottom="3%" fontSize="12px" color="#8B8B8B">
            PENDING COLLABORATORS
          </Text>
          <Flex marginBottom="2%">
            <Image src={dummyImg} />
            <Box paddingTop="1%">
              <Text color="#000000" fontSize="12px" fontWeight="semibold">
                Olurotimi Ajao
              </Text>
              <Text fontSize="12px" color="#8B8B8B">
                Created 3rd Jan,2022
              </Text>
            </Box>
            <Spacer />
            <Button
              backgroundColor="#DBF0DE"
              height="29px"
              color="#177937"
              fontSize="12px"
            >
              Resend Invite
            </Button>
          </Flex>
          <Flex marginBottom="2%">
            <Image src={dummyImg} />
            <Box paddingTop="1%">
              <Text color="#000000" fontSize="12px" fontWeight="semibold">
                Cynthia Morgan
              </Text>
              <Text fontSize="12px" color="#8B8B8B">
                Created 3rd Jan,2022
              </Text>
            </Box>
            <Spacer />
            <Button
              backgroundColor="#DBF0DE"
              color="#177937"
              height="29px"
              fontSize="12px"
            >
              Resend Invite
            </Button>
          </Flex>
        </Box>
        <Box>
          <Text marginBottom="3%" fontSize="12px" color="#8B8B8B">
            ADDED COLLABORATORS
          </Text>
          <Flex marginLeft="1%" marginBottom="4%">
            <Image width={{base:"14%", md:"8%"}} src={Av1} />
            <Box marginLeft="1%" paddingTop="1%">
              <Text color="#000000" fontSize="12px" fontWeight="semibold">
                Tomiloluwa Ayayi
              </Text>
              <Text fontSize="12px" color="#8B8B8B">
                Created 3rd Jan,2022
              </Text>
            </Box>
            <Spacer />
            <Image src={Arrow} />
          </Flex>
          <Flex marginLeft="1%" marginBottom="4%">
            <Image width={{base:"14%", md:"8%"}} src={Av2} />
            <Box marginLeft="1%" paddingTop="1%">
              <Text color="#000000" fontSize="12px" fontWeight="semibold">
                Destiny Etiko
              </Text>
              <Text fontSize="12px" color="#8B8B8B">
                Created 3rd Jan,2022
              </Text>
            </Box>
            <Spacer />
            <Image src={Arrow} />
          </Flex>
          <Flex marginLeft="1%" marginBottom="4 %">
            <Image width={{base:"14%", md:"8%"}} src={Av3} />
            <Box marginLeft="1%">
              <Text color="#000000" fontSize="12px" fontWeight="semibold">
                Philips Oluwatoyin
              </Text>
              <Text fontSize="12px" color="#8B8B8B">
                Created 3rd Jan,2022
              </Text>
            </Box>
            <Spacer />
            <Image src={Arrow} />
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default CollabModal;
