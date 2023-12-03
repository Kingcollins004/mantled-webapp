import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./pages/getStarted";
import Login from "./pages/Login";
import AccountVerification from "./pages/AccountVerification";
import VerificationSuccess from "./pages/VerificationSuccess";
import RegistrationPageOne from "./pages/RegistrationPageOne";
import RegistrationPageTwo from "./pages/RegistrationPageTwo";
import RegistrationPageThree from "./pages/RegistrationPageThree";
import SubscriptionPayment from "./pages/SubscriptionPayment";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import Dashboard from "./pages/Dashboard";
import MyVault from "./pages/MyVault";
import Collaborations from "./pages/Collaborations";
import Notifications from "./pages/Notifications";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import Settings from "./pages/Settings";

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          fontFamily: "Plus Jakarta Sans, sans-serif",
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Pricing />} path="/pricing" />
          <Route element={<GetStarted />} path="/getstarted" />
          <Route element={<Login />} path="/login" />
          <Route element={<AccountVerification />} path="/accountverification" />
          <Route element={<Collaborations />} path="/collaborations" />
          <Route element={<Notifications />} path="/notifications" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<ContactUs />} path="/contact-us" />
          <Route
            element={<VerificationSuccess />}
            path="verification-success"
          />
          <Route
            element={<RegistrationSuccess />}
            path="registration-success"
          />
          <Route
            element={<RegistrationPageOne />}
            path="profile-registration"
          />
          <Route
            element={<RegistrationPageTwo />}
            path="profile-registration-two"
          />
          <Route
            element={<RegistrationPageThree />}
            path="profile-registration-three"
          />
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<MyVault />} path="/myvault" />
          <Route element={<Settings />} path="/settings" />
          <Route
            element={<SubscriptionPayment />}
            path="/profile-registration-three-2"
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
