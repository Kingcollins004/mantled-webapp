import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Avatar,
  Input,
  Spacer,
} from "@chakra-ui/react";
import proceed from "../assets/svg/collabPIcon.svg";
import CreateBene from "../card/CreateBene";

const UserBeneficiary = () => {
  const [displayModal, setDisplayModal] = useState(true);

  const handleSubmit = () => {
    setDisplayModal(false);
  };

  return (
    <div>
      {displayModal ? (
        <div>
          <Box marginX="25%" marginTop="10%" fontSize="18px">
            <Box>
              <Box textAlign="left" marginTop="2%">
                <Text fontWeight="500" fontSize="18px">
                  Add Beneficiary to Asset
                </Text>
              </Box>
            </Box>
          </Box>
          <Box marginX="20%" height="fit-content" textAlign="center" padding="3% 5%">
            <Box width="100%">
              <Input
                color="#000000"
                backgroundColor="#FAFBFC"
                borderRadius="10px"
                padding="4% 2%"
                placeholder="Search Beneficiary"
                width="100%"
                type="search"
                fontSize="14px"
              />
            </Box>
            <Box marginTop="5%">
              <Flex margin="4% 0px">
                <Avatar
                  name="Gbenga Iwosokan"
                  src="https://bit.ly/broken-link"
                />
                <Box marginTop="1%" textAlign="left" marginLeft="2%">
                  <Text fontSize="13px">Gbenga Iwosokan</Text>
                  <Text fontSize="11px" color="#8B8B8B">
                    Added 9th Jun. 2022
                  </Text>
                </Box>
                <Spacer />
                <Image src={proceed} />
              </Flex>

              <Flex margin="4% 0px">
                <Avatar
                  name="Adobe Uzoechina"
                  src="https://bit.ly/broken-link"
                />
                <Box marginTop="1%" textAlign="left" marginLeft="2%">
                  <Text fontSize="13px">Adobe Uzoechina</Text>
                  <Text fontSize="11px" color="#8B8B8B">
                    Added 9th Jun. 2022
                  </Text>
                </Box>
                <Spacer />
                <Image src={proceed} />
              </Flex>

              <Flex margin="4% 0px">
                <Avatar
                  name="Peter Williams"
                  src="https://bit.ly/broken-link"
                />
                <Box marginTop="1%" textAlign="left" marginLeft="2%">
                  <Text fontSize="13px">Peter Williams</Text>
                  <Text fontSize="11px" color="#8B8B8B">
                    Added 9th Jun. 2022
                  </Text>
                </Box>
                <Spacer />
                <Image src={proceed} />
              </Flex>

              <Flex margin="4% 0px">
                <Avatar name="Destiny Kalu" src="https://bit.ly/broken-link" />
                <Box marginTop="1%" textAlign="left" marginLeft="2%">
                  <Text fontSize="13px">Destiny Kalu</Text>
                  <Text fontSize="11px" color="#8B8B8B">
                    Added 9th Jun. 2022
                  </Text>
                </Box>
                <Spacer />
                <Image src={proceed} />
              </Flex>
            </Box>
            <Box marginTop="10%" width="100%">
              <Button
                borderRadius="10px"
                padding="4% 0px"
                color="white"
                backgroundColor="#7800F0"
                width="100%"
                fontSize="12px"
                onClick={handleSubmit}
              >
                Create Beneficiary
                {/* <Image src={backArrow} /> */}
              </Button>
            </Box>
          </Box>
        </div>
      ) : (
        <CreateBene goBack={() => setDisplayModal(true)} />
      )}
    </div>
  );
};

export default UserBeneficiary;
