import React, { useState, useRef, useEffect } from "react";
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
import passwordIcon from "../assets/svg/password-icon.svg";
import emailIcon from "../assets/svg/envelope-icon.svg";
import google from "../assets/svg/google-icon.svg";
import pageIdc from "../assets/svg/page-idc.svg";
import phoneImg from "../assets/svg/phone-background.svg";
import eye from "../assets/svg/eye.svg";
import eyeOff from "../assets/svg/eye-off.svg";
import "../App.css";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*!@#$%]).{8,24}$/;
const url = "https://sentinel-production.up.railway.app/api/v1/users/signIn";

function Login() {
  const userRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidemail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidemail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPwd(result);
  }, [password]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(password);
    const v2 = EMAIL_REGEX.test(email);

    try {
      const resp = await axios.post(url, {
        email,
        password,
      });
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }

    if (!v1 && !v2) {
      toast.error("Please input your Email and Password");
      return;
    } else if (!v1) {
      toast.error("Please Input your Password");
    } else if (!v2) {
      toast.error("Please Input your Email");
    } else {
      console.log(email, password);
      navigate("/dashboard");
    }
  };

  return (
    <Box width="100%">
      <Flex direction={{ base: "column", md: "row" }}>
        <Toaster position="top-center" reverseOrder={false} />
        <Box
          width={{ base: "100%", md: "50%" }}
          padding={{ base: "40px 20px 20px 20px", md: "40px 80px 20px 80px" }}
        >
          <Image src={logo} />

          <Box marginTop="5%">
            <Text fontSize="30px" fontWeight="700">
              Hi Buddy, Welcome Back!
            </Text>
            <Text fontSize="16px">Sign in to your account.</Text>
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
            Sign in with Google
          </Button>

          <Flex marginTop="3%">
            <Image src={line} width="30%" />
            <Text
              color="#979DAC"
              fontSize="14px"
              width="40%"
              textAlign="center"
            >
              Or Sign In with Email
            </Text>
            <Image src={line} width="30%" />
          </Flex>

          <Box marginTop="5%">
            <Text marginBottom="10px" fontSize="12px" fontWeight="600">
              Email Address
            </Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Image  marginTop={{ base: "15px", md: "22px" }} src={emailIcon} />
              </InputLeftElement>
              <Input
               padding={{ base: "7%", md: "5%" }}
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

          <InputGroup marginTop="5%" size="md">
            <InputLeftElement pointerEvents="none">
              <Image marginRight="15%" marginTop={{ base: "10px", md: "22px" }} src={passwordIcon} />
            </InputLeftElement>
            <Input
              pr="4.5rem"
              placeholder="Enter password"
              padding={{ base: "7%", md: "5%" }}
              paddingLeft={{base: "30px"}}
              type={showPassword ? "text" : "password"}
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
                marginTop="30%"
                h="1.75rem"
                size="sm"
                onClick={togglePasswordVisibility}
                backgroundColor="white"
                _hover={{
                  bg: "wihte",
                }}
              >
                <Image
                  src={showPassword ? eyeOff : eye}
                  alt="Toggle Password Visibility"
                />
              </Button>
            </InputRightElement>
          </InputGroup>
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
          >
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters: <span aria-label="asterix">*</span>{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>

          <Button
            background="linear-gradient(90deg, #7800F0 0%, #00A088 100%)"
            marginTop="4%"
            color="#fff"
            variant="outline"
            width="100%"
            padding="5%"
            onClick={handleSubmit}
          >
            Login
          </Button>

          <Text color="#979DAC" marginTop="10px" fontSize="15px">
            Not registered yet?
            <Link to="/" className="login">
              Create an Account
            </Link>
          </Text>
        </Box>

        <Box
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundImage={phoneImg}
          width="50%"
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
  );
}

export default Login;
