import api from "../axios";

const LoginApi = (data) => {
  return api.post("/users/signIn", data);
};

export { LoginApi };
