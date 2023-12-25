import axios from "axios";
import { setToken } from "../features/userSlice";
import { dispatch } from "../store";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Content-Type": "application/json",
};

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const axiosInstance = axios.create({
  headers,
  timeout: 60000,
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    dispatch(setToken(token));
    if (token) {
      // const decodedToken = jwt_decode(token);
      // const currentTime = Math.floor(Date.now() / 1000);
      // if (decodedToken.exp && decodedToken.exp < currentTime) {
      //   Promise.resolve(
      //     () =>
      //       dispatch(
      //         createResponse({
      //           type: 'Error',
      //           title: 'UnAuthorized',
      //           message: 'Session Expired...please login ',
      //         })
      //       ),
      //     1000
      //   );
      //   localStorage.clear();
      //   sessionStorage.clear();
      //   dispatch(setToken(null));
      //   window.location.href = '/signin';
      // }
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error?.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      dispatch(setToken(null));
      sessionStorage.clear();
      window.location.href = "/signin";

      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
