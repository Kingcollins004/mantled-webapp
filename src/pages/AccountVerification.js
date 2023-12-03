import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; // Import axios for API requests
import {
  Box,
  Flex,
  Image,
  Spacer,
  Text,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import logo from "../assets/svg/logo.svg";
import backArrow from "../assets/svg/back-arrow.svg";
import "../App.css";

const url =
  "https://sentinel-production.up.railway.app/api/v1/users/sendemailverificationToken";

const AccountVerification = () => {
  const [timer, setTimer] = useState(90);
  const [showModal, setShowModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputContainerRef = useRef(null);

  const location = useLocation();
  const selectedOption = location.state.email;

  const handleVerify = async () => {
    try {
      const response = await axios.get(url, {
        email: {selectedOption}, 
        verificationCode: verificationCode.join(""),
      });

      console.log("Verification response:", response);

      if (response.data.success) {
        setShowModal(true);
        setTimeout(() => {
          window.location.href = "/verification-success";
        }, 1000);
      } else {
        console.log("Verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleCodeChange = (e, index) => {
    const value = e.target.value;
    setVerificationCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });

    const inputFields = Array.from(inputContainerRef.current.children);
    if (value && index < inputFields.length - 1) {
      inputFields[index + 1].focus();
    }
  };

  const handleCodeKeyUp = (e) => {
    const keyCode = e.keyCode || e.which;
    const inputFields = Array.from(inputContainerRef.current.children);
    const currentIndex = inputFields.findIndex((input) => input === e.target);

    if (
      (keyCode >= 48 && keyCode <= 57) ||
      keyCode === 8 ||
      keyCode === 46 ||
      keyCode === 37
    ) {
      // Allow only digits, backspace, delete, and left arrow keys

      if (keyCode === 8 || keyCode === 46) {
        // Move to the previous input field when backspace or delete is pressed
        if (currentIndex > 0 && e.target.value === "") {
          inputFields[currentIndex - 1].focus();
        }
      } else if (keyCode === 37) {
        // Move to the previous input field when the left arrow key is pressed
        if (currentIndex > 0) {
          inputFields[currentIndex - 1].focus();
        }
      } else if (e.target.value !== "") {
        // Move to the next input field when the current field is filled
        if (currentIndex < inputFields.length - 1) {
          inputFields[currentIndex + 1].focus();
        }
      }
    } else {
      e.preventDefault();
    }
  };

  

  return (
    <div>
      <Box height="100vh" backgroundColor="#F6F8FA">
        <Box backgroundColor="white" padding={{ base: "0px 3%", md: "0% 8%" }}>
          <Flex>
            <Box width="30%" padding="1.5% 0%">
              <Flex>
                <Image marginRight="5%" width="20px" src={backArrow} />
                <Image marginTop="1%" src={logo} />
              </Flex>
            </Box>
            <Spacer />
            <Box padding={{ base: "3.5% 0%", md: "2.5% 0%" }}>
              <Text color="#979DAC" fontWeight="600" fontSize="13px">
                VERIFY YOUR ACCOUNT
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box
          textAlign="center"
          margin={{ base: "25% 5%", md: "5% 35%" }}
          padding="5%"
          borderRadius="20px"
          backgroundColor="white"
        >
          <Text
            fontSize={{ base: "20px", md: "30px" }}
            fontWeight="700"
            marginBottom="8%"
          >
            Verify Your Account
          </Text>
          <Text
            fontSize={{ base: "13px", md: "13px" }}
            color="#707070"
            marginBottom="8%"
          >
            A 4-digit OTP has been sent to your emaii address 
            <span className="user-num">{selectedOption}</span>
          </Text>
          <Box marginBottom="8%" ref={inputContainerRef}>
            <Flex justifyContent="center">
              <HStack>
                <PinInput otp>
                  {verificationCode.map((digit, index) => (
                    <PinInputField
                      key={index}
                      height="50px"
                      width="70px"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(e, index)}
                      onKeyUp={handleCodeKeyUp}
                    />
                  ))}
                </PinInput>
              </HStack>
            </Flex>
          </Box>
          <Button
            background="linear-gradient(90deg, #7800F0 0%, #00A088 100%)"
            marginTop="4%"
            color="#fff"
            variant="outline"
            width="100%"
            padding="7%"
            borderRadius="10px"
            fontSize="15px"
            marginBottom="5%"
            onClick={handleVerify}
          >
            Verify Account
          </Button>
          <Box color="#001233" fontSize="12px">
            {timer > 0 ? (
              <span>
                Didn't receive an OTP?
                <br /> Resend OTP in:{" "}
                <span className="verifyTimer">
                  {formattedMinutes}:{formattedSeconds}
                </span>
              </span>
            ) : (
              <button>Resend OTP</button>
            )}
          </Box>
        </Box>
        {/* Modal */}
        <Modal isOpen={showModal} onClose={closeModal}>
          <ModalOverlay backgroundColor="rgba(255, 255, 255, 0.1)" />
          <ModalContent
            borderRadius="25px"
            padding="0.5%"
            backgroundColor="#30CF63"
            margin="600px 22% 0% 22%"
          >
            <ModalBody>
              <ModalCloseButton marginTop="-5px" color="white" />
              <Text fontSize={{ base: "12px", md: "16px" }} color="white">
                Verification Successful.
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default AccountVerification;
