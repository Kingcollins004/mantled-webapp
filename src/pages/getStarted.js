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
  InputGroup,
  InputLeftElement,
  InputRightElement,
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

const USER_REGEX = /^[A-z][A-z0-9-_ ]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*!@#$%]).{8,24}$/;
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const url = "https://sentinel-production.up.railway.app/api/v1/users/signup";

function GetStarted() {
  const userRef = useRef();

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
    const v1 = USER_REGEX.test(fullName);
    const v2 = PWD_REGEX.test(password);
    const v3 = PHONE_REGEX.test(phoneNumber);
    const v4 = EMAIL_REGEX.test(email);

    try {
      const resp = await axios.post(url, {
        fullName,
        email,
        phoneNumber,
        password,
      });
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }

    if(!v1 && !v2 && !v3 && !v4){
      toast.error("Fill in your information to sign up");
    } else if(!v2){
      toast.error("Create a password in the correct format");
    } else if (!v1) {
      toast.error("Input your fullname in the correct format");
      return;
    } else {
      toast.success("Success");
      console.log(fullName, email, phoneNumber, password);
      navigate("/accountverification");
      navigate("/accountverification", { state: { phoneNumber } });
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
                <InputGroup alignItems="center">
                  <InputLeftElement pointerEvents="none">
                    <Image
                      marginTop={{ base: "15px", md: "35px" }}
                      width="45%"
                      src={userIcon}
                    />
                  </InputLeftElement>
                  <Input
                    padding={{ base: "7%", md: "5%" }}
                    paddingLeft="35px"
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
                  />
                </InputGroup>
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
                  <InputGroup alignItems="center">
                    <InputLeftElement alignItems="center" justifyContent="center" pointerEvents="none">
                      <Image
                        marginTop={{ base: "13px", md: "20px" }}
                        src={emailIcon}
                        
                      />
                    </InputLeftElement>
                    <Input
                      padding={{ base: "14%", md: "10%" }}
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleEmailChange}
                      paddingLeft="35px"
                      id="email"
                      ref={userRef}
                      required
                      aria-invalid={validEmail ? "false" : "true"}
                      // onFocus={() => setEmailFocus(true)}
                      // onBlur={() => setEmailFocus(false)}
                    />
                  </InputGroup>
                </Box>

                <Box width="50%" marginLeft="2%">
                  <Text marginBottom="10px" fontSize="12px" fontWeight="600">
                    Phone Number:
                  </Text>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Image
                        display={{ base: "none", md: "block" }}
                        marginLeft="80px"
                        marginTop="20px"
                        src={phone}
                      />
                      <Image
                        marginLeft="10px"
                        marginTop="20px"
                        width="25px"
                        src={country}
                        display={{ base: "none", md: "block" }}
                      />
                      <Text
                        margin={{
                          base: "13px 0px 0px 20px",
                          md: "20px 0px 0px 10px",
                        }}
                      >
                        +234
                      </Text>
                    </InputLeftElement>
                    <Input
                      padding={{ base: "14%", md: "10%" }}
                      type="number"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      paddingLeft={{ base: "55px", md: "120px" }}
                      id="phoneNumber"
                      ref={userRef}
                      required
                      aria-invalid={validPhoneNumber ? "false" : "true"}
                      // onFocus={() => setNumberFocus(true)}
                      // onBlur={() => setNumberFocus(false)}
                    />
                  </InputGroup>
                </Box>
              </Flex>

              <Box marginTop="3%">
                <Text marginTop="15px" fontSize="12px" fontWeight="600">
                  Password:
                </Text>
                <InputGroup marginTop="2%" size="md">
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
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      marginTop={{ base: "10px", md: "30%" }}
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
                  </InputRightElement>
                </InputGroup>
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="asterix">*</span>{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
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
                Create my Account
              </Button>
            </form>

            <Text marginTop="10px" fontSize="15px">
              Already have an account?
              <Link to="login" className="login">
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
