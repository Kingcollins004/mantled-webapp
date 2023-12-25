import React, { useState } from "react";
import { Box, Text, Button, ModalHeader, Input } from "@chakra-ui/react";
import AddBeneficiarySuccess from "./AddBeneficiarySuccess";
import toast from "react-hot-toast";
import ErrorHandler from "../redux/axios/Utils/ErrorHandler";
import { CreateBeneficiaryApi } from "../redux/axios/apis/asset";

const CreateBene = ({ goBack }) => {
  const [displayModal, setDisplayModal] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName && !email && !number) {
      toast.error("Please fill all required fields");
    }
    const formBody = {
      assetId: "655b371cd8e9e95b394bf49b",
      fullName: fullName,
      email: email,
      phoneNumber: number,
      assetType: "PersonalEffects",
    };
    try {
      setLoading(true);
      const response = await CreateBeneficiaryApi(formBody);

      if (response.data) {
        setLoading(false);
        setDisplayModal(false);
      }
    } catch (error) {
      setLoading(false);
      const err = ErrorHandler(error);
      toast.error(err.message);
    }
  };

  return (
    <div className="assets">
      {displayModal ? (
        <div>
          <ModalHeader marginTop="2%" fontSize="18px" padding="2% 15%">
            <Box>
              <Box textAlign="left" marginTop="1%">
                <Text
                  textAlign={{ base: "center" }}
                  fontWeight="semibold"
                  fontSize="18px"
                >
                  Create Beneficiary
                </Text>
              </Box>
            </Box>
          </ModalHeader>
          <Box height="fit-content" padding={{ base: "0% 5%", md: "0 15%" }}>
            <Box marginTop="5%">
              <Text
                fontWeight="500"
                fontSize="12px"
                textAlign="left"
                margin="2% 0%"
              >
                Fullname
              </Text>
              <Input
                border="0.5px solid #848484"
                borderRadius="10px"
                fontSize="11px"
                padding="5%"
                placeholder="Enter here..."
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Box>
            <Box marginTop="5%">
              <Text fontSize="12px" textAlign="left" margin="2% 0%">
                Email Address
              </Text>
              <Input
                border="0.5px solid #848484"
                borderRadius="10px"
                fontSize="11px"
                padding="5%"
                placeholder="Enter here..."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box marginTop="5%">
              <Text fontSize="12px" textAlign="left" margin="2% 0%">
                Phone Number
              </Text>
              <Input
                border="0.5px solid #848484"
                borderRadius="10px"
                fontSize="11px"
                padding="5%"
                placeholder="Enter here..."
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Box>
            <Box
              marginBottom="7%"
              marginTop="10%"
              width="100%"
              textAlign="right"
              // display={selectedOption ? "block" : "none"}
            >
              <Button
                color="white"
                marginRight="3%"
                fontSize="14px"
                padding="6% 0px"
                backgroundColor="#7800F0"
                onClick={handleSubmit}
                width="100%"
                borderRadius="10px"
                isLoading={loading}
              >
                Create Beneficiary
              </Button>
            </Box>
          </Box>
        </div>
      ) : (
        <div>
          <AddBeneficiarySuccess text="Beneficiary has been added successfully!" />
        </div>
      )}
    </div>
  );
};

export default CreateBene;
