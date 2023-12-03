import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import logo from "../assets/svg/logo.svg";
import line from "../assets/svg/Line.svg";
import emailIcon from "../assets/svg/envelope-icon.svg";
import phone from "../assets/svg/phone-icon.svg";
import userIcon from "../assets/svg/user-icon.svg";
import google from "../assets/svg/google-icon.svg";
import pageIdc from "../assets/svg/page-idc.svg";
import phoneImg from "../assets/svg/phone-background.svg";
import "../App.css";
import country from "../assets/svg/nigeria.svg";
import eye from "../assets/svg/eye.svg";
import eyeOff from "../assets/svg/eye-off.svg";
import { Toaster, toast } from "react-hot-toast";
import { css } from "@emotion/react";

const USER_REGEX = /^[A-z][A-z0-9-_ ]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*!@#$%]).{8,24}$/;
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const url = "https://sentinel-production.up.railway.app/api/v1/users/signup";

function GetStarted() {
  const autofillStyles = css`
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px white inset;
      background-color: white;
      /* Adjust other styles as needed */
    }
  `;
  const userRef = useRef();
  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidemail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [show, setShow] = useState(false);

  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(fullName);
    setValidName(result);
  }, [fullName]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phoneNumber);
    setValidPhoneNumber(result);
  }, [phoneNumber]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidemail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPwd(result);
  }, [password]);

  const handleFullnameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidName = USER_REGEX.test(fullName);
    const isValidPwd = PWD_REGEX.test(password);
    const isValidPhone = PHONE_REGEX.test(phoneNumber);
    const isValidEmail = EMAIL_REGEX.test(email);

    if (!isValidName || !isValidPwd || !isValidPhone || !isValidEmail) {
      toast.error("Fill in your information to sign up");
      return;
    }

    try {
      setLoading(true);
      const resp = await axios.post(url, {
        fullName,
        email,
        phoneNumber,
        password,
      });
      console.log(resp);
      toast.success("Success");
      navigate("/accountverification", { state: { email } });
    } catch (error) {
      console.error(error);

      if (error.response) {
        const { data, status } = error.response;
        console.error(`Error ${status}:`, data);

        if (status === 409 && data.error === "This email is already in use") {
          // Provide a user-friendly message for email already in use
          toast.error(
            "This email address is already in use. Please use a different email."
          );
        } else {
          // Provide a generic error message for other cases
          toast.error("An error occurred while signing up. Please try again.");
        }
      } else if (error.request) {
        console.error("No response received from the server.");
        toast.error("No response received from the server. Please try again.");
      } else {
        console.error("Error setting up the request:", error.message);
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Box width="100%">
        <Flex direction={{ base: "column", md: "row" }}>
          <Toaster position="top-center" reverseOrder={false} />
          <Box
            width={{ base: "100%", md: "50%" }}
            padding={{ base: "40px 20px 20px 20px", md: "40px 80px 20px 80px" }}
          >
            <Image src={logo} />

            <Box marginTop="4%">
              <Text fontSize="30px" fontWeight="700">
                Get Started with Mantled.
              </Text>
              <Text fontSize="16px">Create an account in 5 mins.</Text>
            </Box>

            <Button
              padding={{ base: "7%", md: "5%" }}
              marginTop="5%"
              color="#000000"
              variant="outline"
              width="100%"
              fontWeight="600"
            >
              <Image marginRight="10px" src={google} />
              Sign up with Google
            </Button>

            <Flex marginTop="3%">
              <Image src={line} width="25%" />
              <Text
                color="#979DAC"
                fontSize="14px"
                width="50%"
                textAlign="center"
              >
                Or Sign Up with Email
              </Text>
              <Image src={line} width="25%" />
            </Flex>

            <form onSubmit={handleSubmit}>
              <Box marginTop="2%">
                <Text
                  htmlFor="username"
                  marginBottom="10px"
                  fontSize="14px"
                  fontWeight="600"
                >
                  Fullname:
                </Text>
                <Flex
                  border="2px solid lightgray"
                  borderRadius="10px"
                  alignItems="center"
                >
                  <Box pointerEvents="none" paddingX="2%">
                    <Image width="100%" src={userIcon} />
                  </Box>
                  <Input
                    padding={{ base: "7%", md: "5% 2%" }}
                    type="text"
                    placeholder="Emeka Ayobami Yakubu"
                    value={fullName}
                    onChange={handleFullnameChange}
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    border="none"
                    focusBorderColor="transparent"
                    focusBorder="0"
                    _css={autofillStyles}
                  />
                </Flex>
                <Text
                  fontSize="12px"
                  id="uidnote"
                  className={
                    userFocus && fullName && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </Text>
              </Box>

              <Flex marginTop="5%">
                <Box width="50%" marginRight="2%">
                  <Text marginBottom="10px" fontSize="12px" fontWeight="600">
                    Email Address
                  </Text>
                  <Flex
                    border="2px solid lightgray"
                    borderRadius="10px"
                    alignItems="center"
                  >
                    <Box
                      alignItems="center"
                      justifyContent="center"
                      pointerEvents="none"
                      paddingLeft="4%"
                    >
                      <Image src={emailIcon} />
                    </Box>
                    <Input
                      padding={{ base: "14%", md: "10% 4%" }}
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleEmailChange}
                      paddingLeft="35px"
                      id="email"
                      ref={userRef}
                      required
                      aria-invalid={validEmail ? "false" : "true"}
                      border="none"
                      focusBorderColor="transparent"
                      focusBorder="0"
                      // onFocus={() => setEmailFocus(true)}
                      // onBlur={() => setEmailFocus(false)}
                    />
                  </Flex>
                </Box>

                <Box width="50%" marginLeft="2%">
                  <Text marginBottom="10px" fontSize="12px" fontWeight="600">
                    Phone Number:
                  </Text>
                  <Flex
                    border="2px solid lightgray"
                    borderRadius="10px"
                    alignItems="center"
                  >
                    <Flex pointerEvents="none">
                      <Image
                        display={{ base: "none", md: "block" }}
                        marginLeft="10px"
                        src={phone}
                      />
                      <Image
                        marginLeft="10px"
                        width="25px"
                        src={country}
                        display={{ base: "none", md: "block" }}
                      />
                      <Text
                        margin={{
                          base: "13px 0px 0px 20px",
                          md: "0px 10px",
                        }}
                      >
                        +234
                      </Text>
                    </Flex>
                    <Input
                      padding={{ base: "14%", md: "10%" }}
                      type="number"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      id="phoneNumber"
                      ref={userRef}
                      required
                      aria-invalid={validPhoneNumber ? "false" : "true"}
                      border="none"
                      focusBorderColor="transparent"
                      focusBorder="0"
                      // onFocus={() => setNumberFocus(true)}
                      // onBlur={() => setNumberFocus(false)}
                    />
                  </Flex>
                </Box>
              </Flex>

              <Box marginTop="3%">
                <Text marginTop="15px" fontSize="12px" fontWeight="600">
                  Password:
                </Text>
                <Flex
                  border="2px solid lightgray"
                  borderRadius="10px"
                  alignItems="center"
                  marginTop="2%"
                  size="md"
                >
                  <Input
                    padding={{ base: "7%", md: "5%" }}
                    paddingLeft={{ base: "10px", md: "35px" }}
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    id="password"
                    onChange={handlePasswordChange}
                    value={password}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    border="none"
                    focusBorderColor="transparent"
                    focusBorder="0"
                  />
                  <Box width="3.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={togglePasswordVisibility}
                      backgroundColor="white"
                      _hover={{
                        bg: "wihte",
                      }}
                    >
                      <Image
                        src={show ? eyeOff : eye}
                        alt="Toggle Password Visibility"
                      />
                    </Button>
                  </Box>
                </Flex>
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  8 to 24 characters.
                </p>
              </Box>

              <Button
                background="linear-gradient(90deg, #7800F0 0%, #00A088 100%)"
                marginTop="4%"
                color="#fff"
                variant="outline"
                width="100%"
                padding={{ base: "7%", md: "5%" }}
                onClick={handleSubmit}
                _hover={{
                  bg: "90deg, #7800F0 0%, #00A088 100%",
                  color: "white",
                }}
              >
                {loading ? "Creating Account..." : "Create my Account"}
              </Button>
            </form>

            <Text marginTop="10px" fontSize="15px">
              Already have an account?
              <Link to="/login" className="login">
                Login
              </Link>
            </Text>
          </Box>

          <Box
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundImage={phoneImg}
            width={{ base: "100%", md: "50%" }}
            height="100vh"
            display={{ base: "none", md: "block" }}
          >
            <Box textAlign="center" marginTop="75%" color="white" width="100%">
              <Text fontSize="28px">Keep Track Of All Your</Text>
              <Text lineHeight="15px" fontSize="28px">
                Valuable Assets in One Place
              </Text>
              <Box marginTop="2%">
                <Text fontSize="16px">
                  Keep your assets safe and access safer,{" "}
                </Text>
                <Text fontSize="16px">with premium solutions</Text>
              </Box>
              <Box justifyContent="center" display="flex" marginTop="5%">
                <Image src={pageIdc} />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default GetStarted;
