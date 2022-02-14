import { create } from "@mui/material/styles/createTransitions";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.39.0.192",
});

const temp = axios.create({
  withCredentials: true,
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    accept: "*/*",
  },
});

instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] =
    "application/json;charset=UTF-8; charset=UTF-8";
  return config;
});

const apis = {
  signup: (post) => instance.post("/user/signup", post),
  idCheck: (id) => instance.post("/user/idCheck", { username: id }),
  login: (frm) => temp.post("/user/login", frm, { withCredentials: true }),
};

export default apis;
