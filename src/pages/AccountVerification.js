import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Spacer,
  Text,
  HStack,
  Button,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import logo from "../assets/svg/logo.svg";
import backArrow from "../assets/svg/back-arrow.svg";
import "../App.css";
import { SendVerifyMailApi, VerifyMailApi } from "../redux/axios/apis/user";
import ErrorHandler from "../redux/axios/Utils/ErrorHandler";
import toast from "react-hot-toast";

const AccountVerification = () => {
  const [timer, setTimer] = useState(90);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const selectedOption = location.state.email;

  const handleVerify = async () => {
    try {
      const formBody = {
        numToken: verificationCode.join(""),
      };
      const response = await VerifyMailApi(formBody);

      if (response.data) {
        toast.success("Verification Successful.");
        setTimeout(() => {
          window.location.href = "/verification-success";
        }, 1000);
      } else {
        console.log("Verification failed");
      }
    } catch (error) {
      const err = ErrorHandler(error);
      toast.error(err.message);
    }
  };

  const handleVerifyResend = async () => {
    try {
      setLoading(true);
      const response = await SendVerifyMailApi();

      if (response.data) {
        setLoading(false);
        toast.success("Verification Successful.");
        setTimer(90);
      }
    } catch (error) {
      setLoading(false);
      const err = ErrorHandler(error);
      toast.error(err.message);
    }
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
              <Button
                bgColor="#fff"
                cursor="pointer"
                onClick={() => handleVerifyResend()}
                isLoading={loading}
              >
                Resend OTP
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AccountVerification;
