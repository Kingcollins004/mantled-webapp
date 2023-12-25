import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Flex, Text, Image, Button, Input } from "@chakra-ui/react";
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
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../redux/features/userSlice";
import { LoginApi } from "../redux/axios/apis/user";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^.{8,24}$/;

function Login() {
  const userRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidemail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

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

    if (!v1 && !v2) {
      toast.error("Please input your Email and Password");
      return;
    } else if (!v1) {
      toast.error("Please Input your Password");
    } else if (!v2) {
      toast.error("Please Input your Email");
    }

    try {
      const formBody = {
        email,
        password,
      };
      const resp = await LoginApi(formBody);
      const { data } = resp;
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.data.user));
      dispatch(setToken(data.token));
      dispatch(setUser(data.data.user));

      navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
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
            <Flex
              alignItems="center"
              border="2px solid lightgray"
              borderRadius="10px"
            >
              <Box pointerEvents="none" paddingX="2%">
                <Image src={emailIcon} />
              </Box>
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
                border="none"
                focusBorderColor="transparent"
                focusBorder="0"
              />
            </Flex>
          </Box>

          <Flex
            alignItems="center"
            border="2px solid lightgray"
            borderRadius="10px"
            marginTop="5%"
            size="md"
          >
            <Box pointerEvents="none" paddingX="2%">
              <Image marginRight="15%" width="20px" src={passwordIcon} />
            </Box>
            <Input
              pr="4.5rem"
              placeholder="Enter password"
              padding={{ base: "7%", md: "5%" }}
              paddingLeft={{ base: "30px" }}
              type={showPassword ? "text" : "password"}
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
                  src={showPassword ? eyeOff : eye}
                  alt="Toggle Password Visibility"
                />
              </Button>
            </Box>
          </Flex>
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
          >
            8 to 24 characters.
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
            <Link to="/getstarted" className="login">
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
