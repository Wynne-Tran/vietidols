import axios from "axios";
import apiUrl from "../api";

export const signup = (info) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return axios.post(apiUrl + "/auth/signup", info, { headers: headers });
};

export const signin = (name, password) => {
  return axios
    .post(apiUrl + "/auth/signin", {
      name,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const getcurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const verifyUser = (userId, secretCode) => {
  return axios.get(apiUrl + `/auth/verify-account/${userId}/${secretCode}`);
};

export const sendVerificationLinkToUser = (userId) => {
  return axios.get(apiUrl + `/auth/send-link/${userId}`);
};

export const resetPassword = (token, name, password) => {
  return axios.post(apiUrl + "/auth/resetuserpassword", {
    token,
    name,
    password,
  });
};

export const sendResetPasswordLinkToUser = (name) => {
  return axios.post(apiUrl + "/auth/forgotpassword", { name });
};
