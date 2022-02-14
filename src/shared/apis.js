import axios from "axios";
import { getCookie } from "./Cookie";

const token = getCookie("authorization");
console.log(getCookie("authorization"));

const instance = axios.create({
  baseURL: "http://3.39.0.192",
});

instance.interceptors.request.use(function (config) {
  config.headers["Content-Type"] =
    "application/json;charset=UTF-8; charset=UTF-8";
  config.headers.common["authorization"] = `${token}`;
  return config;
});

const apis = {
  signup: (post) => instance.post("/user/signup", post),
  idCheck: (id) => instance.post("/user/idCheck", { username: id }),
  login: (data) => instance.post("/user/login", data),
  post: (post) => instance.post("/posts", post),
};

export default apis;
