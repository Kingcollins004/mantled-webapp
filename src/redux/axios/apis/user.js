import api from "../axios";

const LoginApi = (data) => {
  return api.post("/users/signIn", data);
};

const SignUpApi = (data) => {
  return api.post("/users/signup", data);
};

const VerifyMailApi = (data) => {
  return api.patch("/users/auth/verifynumber", data);
};

const SendVerifyMailApi = () => {
  return api.get("/users/sendemailverificationToken");
};

export { LoginApi, SignUpApi, VerifyMailApi, SendVerifyMailApi };
