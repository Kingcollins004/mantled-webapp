import { useEffect } from "react";
import { Flex, useMediaQuery, Box, Image, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import { useSelector } from "react-redux";
import avatar from "../assets/png/avatar.jpg";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { user, token } = useSelector((state) => state.user);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  console.log(user);

  return (
    <>
      {token && (
        <>
          {isMobile ? (
            <Box width="100%" padding="2% 2% ">
              <Box width="100%">
                <Flex width="100%" justifyContent="center" alignItems="center">
                  <Sidebar />
                  <Box width="100%">
                    <Text
                      fontWeight="600"
                      color="#535353"
                      fontSize={{ base: "16px", md: "22px" }}
                    >
                      Welcome Back, {user.fullName}
                    </Text>
                    <Text fontSize="14px">Monthly Premium User</Text>
                  </Box>
                </Flex>
              </Box>
              <Outlet />
            </Box>
          ) : (
            <Flex
              width="100%"
              height="100vh"
              backgroundColor="#FCFCFC"
              padding="0px 2%"
            >
              <Sidebar />
              <Box width="100%" padding="2% 2% ">
                <Box width="100%">
                  <Flex width="100%">
                    <Image
                      borderRadius="50%"
                      height={{ base: "40px", md: "60px" }}
                      width={{ base: "40px", md: "60px" }}
                      src={avatar}
                    />
                    <Box width="100%" marginLeft="1%">
                      {user && (
                        <Text
                          fontWeight="600"
                          color="#535353"
                          fontSize={{ base: "16px", md: "22px" }}
                        >
                          Welcome Back, {user.fullName}
                        </Text>
                      )}
                      <Text fontSize="14px">Monthly Premium User</Text>
                    </Box>
                  </Flex>
                </Box>
                <Outlet />
              </Box>
            </Flex>
          )}
        </>
      )}
    </>
  );
};

export default DashboardLayout;
