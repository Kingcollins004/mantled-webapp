import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Button,
  Select,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import logo from "../assets/svg/logo.svg";
import line from "../assets/svg/Nline.svg";
import camera from "../assets/svg/camera.svg";
import backArrow from "../assets/svg/back-arrow.svg";
import "../App.css";

// const DATE_REGEX = /^(0[1-9]|[1-2][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

const RegistrationPageOne = () => {
  const userRef = useRef();

  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [numChild, setNumChild] = useState("");

  // const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect(() => {
  //   const result = DATE_REGEX.test(date);
  //   setDate(result);
  // }, [date]);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [date, maritalStatus, numChild]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleMartialStatusChange = (e) => {
    setMaritalStatus(e.target.value);
  };

  const handleNumChildChange = (e) => {
    setNumChild(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = date;
    const v2 = maritalStatus;
    const v3 = numChild;

    if (!v1 || !v2 || !v3) {
      // setErrMsg("Invalid Entry");
      alert("Please fill in all the required fields.");

      return;
    } else {
      console.log(date, maritalStatus, numChild, image);
      navigate("/profile-registration-two");
    }
  };

  const handleUpload = (e) => {
    if (e.target.files.length > 0) {
      const selectedImage = URL.createObjectURL(e.target.files[0]);
      setImage(selectedImage);
    }
  };

  return (
    <div>
      <Box height="100vh" backgroundColor="#F6F8FA">
        <Box backgroundColor="white" padding="0% 8%">
          <Flex flexDirection={{base: "column", md: "row"}}>
            <Box flex="1" padding="1.5% 0%">
              <Flex>
                <Box marginTop="5%" marginRight={{base: "3%", md: "15%"}}>
                  <Link to="/">
                    <Image width="20px" src={backArrow} alt="Back" />
                  </Link>
                </Box>
                <Image marginTop="1%" src={logo} alt="Logo" />
              </Flex>
            </Box>
            <Spacer />
            <Box marginTop="2.2%" flex="1">
              <Flex>
                <Text
                  fontSize="14px"
                  fontWeight="700"
                  color="#700BE9"
                  borderRadius="50px"
                  padding="1% 4%"
                  border="2px solid #700BE9"
                >
                  1
                </Text>
                <Spacer />
                <Image src={line} alt="Line" />
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
                <Image src={line} alt="Line" />
                <Spacer />
                <Text
                  fontSize="14px"
                  color="#979DAC"
                  borderRadius="50px"
                  padding="1% 4%"
                  border="2px solid #979DAC"
                >
                  3
                </Text>
              </Flex>
            </Box>
            <Spacer />
            <Box flex="1" padding={{base: "6.5% 0", md: "2.5% 0"}}>
              <Text
                textAlign={{base: "center", md: "right"}}
                color="#979DAC"
                fontWeight="600"
                fontSize="13px"
              >
                COMPLETE YOUR INFO
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box
          textAlign="center"
          margin={{base: "5% 3%", md: "3% 32%"}}
          padding={{base: "10% 5%", md: "3% 5%"}}
          borderRadius="20px"
          backgroundColor="white"
        >
          <Text
            marginLeft="-15px"
            color="#979DAC"
            textAlign="center"
            fontSize="16px"
            fontWeight="700"
            marginBottom="8%"
          >
            Step 1 of 3
          </Text>

          <Box>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {image ? (
                <Box>
                  <Image
                    borderRadius="50%"
                    width="100px"
                    height="100px"
                    src={image}
                    alt="Selected"
                  />
                  <label className="forTap" htmlFor="file">
                    TAP TO CHANGE
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/*"
                    onChange={handleUpload}
                    style={{ display: "none" }}
                  />
                </Box>
              ) : (
                <div>
                  <Image src={camera} alt="Camera" />
                  <label className="forTap" htmlFor="file">
                    TAP TO CHANGE
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/*"
                    onChange={handleUpload}
                    style={{ display: "none" }}
                  />
                </div>
              )}
            </Flex>
          </Box>

          <Box marginTop="5%">
            <Text
              textAlign="left"
              marginBottom="10px"
              fontSize="14px"
              fontWeight="600"
            >
              Date of Birth
            </Text>
            <InputGroup>
              <Input
                borderRadius="10px"
                size="lg"
                type="date"
                placeholder="dd-mm-yyyy"
                color="#979DAC"
                value={date}
                onChange={handleDateChange}
                id="username"
                ref={userRef}
                autoComplete="off"
                required
                // aria-invalid={valid ? "false" : "true"}
                // aria-describedby="uidnote"
              />
            </InputGroup>
          </Box>

          <Flex marginTop="8%">
            <Box width="50%" marginRight="2%">
              <Text
                textAlign="left"
                marginBottom="10px"
                fontSize="12px"
                fontWeight="600"
              >
                Marital Status
              </Text>
              <Select
                borderRadius="10px"
                type="Text"
                placeholder="Select Status"
                value={maritalStatus}
                onChange={handleMartialStatusChange}
                id="maritalStatus"
                ref={userRef}
                autoComplete="off"
                required
                color="#979DAC"
                // aria-invalid={validName ? "false" : "true"}
                // aria-describedby="uidnote"
                size="lg"
                fontSize="14px"
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widow">Widow</option>
              </Select>
            </Box>

            <Box width="50%" marginLeft="2%">
              <Text
                textAlign="left"
                marginBottom="10px"
                fontSize="12px"
                fontWeight="600"
              >
                Number of Children
              </Text>
              <InputGroup>
                <Input
                  borderRadius="10px"
                  size="lg"
                  type="number"
                  placeholder="No of Children"
                  value={numChild}
                  onChange={handleNumChildChange}
                  id="numChild"
                  ref={userRef}
                  autoComplete="off"
                  required
                  color="#979DAC"
                  fontSize="14px"
                  // aria-invalid={validName ? "false" : "true"}
                  // aria-describedby="uidnote"
                />
              </InputGroup>
            </Box>
          </Flex>

          <Button
            background="linear-gradient(90deg, #7800F0 0%, #00A088 100%)"
            marginTop="10%"
            color="#fff"
            variant="outline"
            width="100%"
            padding="7%"
            borderRadius="10px"
            fontSize="15px"
            marginBottom="8%"
            onClick={handleSubmit}
          >
            Proceed To Next
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default RegistrationPageOne;
