import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Text,
  Spacer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import logo from "../assets/svg/logo.svg";
import line from "../assets/svg/Nline.svg";
import backArrow from "../assets/svg/back-arrow.svg";
import PaymentModal from "../components/PaymentModal";
import "../App.css";

const SubscriptionPayment = () => {
  return (
    <div>
      <Box height="100%" backgroundColor="#F6F8FA">
        <Box backgroundColor="white" padding="0% 8%">
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <Box flex="1" padding="1.5% 0%">
              <Flex>
                <Box marginTop="5%" marginRight={{ base: "3%", md: "15%" }}>
                  <Link to="/">
                    <Image width="20px" src={backArrow} />
                  </Link>
                </Box>
                <Image marginTop="1%" src={logo} />
              </Flex>
            </Box>
            <Spacer />
            <Box marginTop="2.2%" flex="1">
              <Flex>
                <Text
                  fontSize="14px"
                  color="#979DAC"
                  borderRadius="50px"
                  padding="1% 4%"
                  border="2px solid #979DAC"
                >
                  1
                </Text>
                <Spacer />
                <Image src={line} />
                <Spacer />
                <Text
                  fontSize="14px"
                  color="#979DAC"
                  borderRadius="50px"
                  padding="1% 4%"
                  border="2px solid #979DAC"
                >
                  2
                </Text>
                <Spacer />
                <Image src={line} />
                <Spacer />
                <Text
                  fontSize="14px"
                  fontWeight="700"
                  color="#700BE9"
                  borderRadius="50px"
                  padding="1% 4%"
                  border="2px solid #700BE9"
                >
                  3
                </Text>
              </Flex>
            </Box>
            <Spacer />
            <Box flex="1" padding={{ base: "6.5% 0", md: "2.5% 0" }}>
              <Text
                textAlign={{ base: "center", md: "right" }}
                color="#979DAC"
                fontSize="13px"
              >
                COMPLETE YOUR INFO
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box padding={{ base: "3% 5%", md: "3% 10%" }}>
          <Text color="#700BE9" fontSize="16px" fontWeight="bold">
            WELCOME TO MANTLED AFOLAKEMI
          </Text>
          <Text
            padding="4% 1%"
            fontSize={{ base: "20px", md: "43px" }}
            fontWeight="bold"
          >
            Choose your Mantled plan
          </Text>
          <Flex flexDirection={{ base: "column-reverse", md: "row" }}>
            <Box padding="4% 2%" width={{ base: "100%", md: "50%" }}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        fontSize="16px"
                        fontWeight="600"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        How does Mantled track my assets.
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        fontSize="16px"
                        fontWeight="600"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        How can i collaborate with my lawyer on the Mantled app.
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        fontSize="16px"
                        fontWeight="600"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        Can i control who has access to my properties.
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        fontSize="16px"
                        fontWeight="600"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        How am i tracked digitally.
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>

            <PaymentModal />
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default SubscriptionPayment;
