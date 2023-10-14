import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";

import fileIcon from "../assets/svg/fileIcon.svg";
import deleteIcon from "../assets/svg/deleteIcon.svg";
import uploadIcon from "../assets/svg/uploadIcon.svg";
import downloadIcon from "../assets/svg/downloadIcon.svg";
const DocumentPage = () => {

  return (
    <div>
      <Box margin="2% 1%" width="100%">
        <Flex width="100%" justifyContent="center">
          <Box
            backgroundColor="white"
            padding="2%"
            borderRadius="23px"
            width={{base:"95%", md:"50%"}}
          >
            <Flex alignItems="center" marginBottom="3%" width="100%">
              <Box>
                <Text color="#121936" fontSize="14px" fontWeight="medium">
                  Uploaded Documents - Liberty Estate, Laderin, Abeokuta…
                </Text>
              </Box>
            </Flex>
            <Flex marginTop="9%" flexDirection="column" alignItems="center">
              <Box
                margin="5% 0"
                backgroundColor="#EEF7EF"
                width="20%"
                textAlign="center"
                height="20%"
                borderRadius="20px"
                padding="5%"
              >
                <Image width="50px" src={fileIcon} />
              </Box>
              <Box textAlign="center">
                <Text fontWeight="semibold">Legal Ownership Papers</Text>
                <Text fontSize="12px">Added 5th July, 2023</Text>
              </Box>

              <Flex justifyContent="space-evenly" margin="10% 0" width="70%">
                <Box textAlign="center">
                  <Flex
                    padding="3%"
                    borderRadius="10px"
                    backgroundColor="#FFF3EA"
                    width="50px"
                    height="50px"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image width="25px" src={downloadIcon} />
                  </Flex>
                  <Text fontSize="12px">Download</Text>
                </Box>
               
                <Box textAlign="center">
                  <Flex
                    padding="3%"
                    borderRadius="10px"
                    backgroundColor="#EEF7EF"
                    width="50px"
                    height="50px"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image width="25px" src={uploadIcon} />
                  </Flex>
                  <Text fontSize="12px">Share</Text>
                </Box>
                
                <Box textAlign="center">
                  <Flex
                    padding="3%"
                    borderRadius="10px"
                    backgroundColor="#FCE9F1"
                    width="50px"
                    height="50px"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image width="25px" src={deleteIcon} />
                  </Flex>
                  <Text fontSize="12px">Delete</Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default DocumentPage;
