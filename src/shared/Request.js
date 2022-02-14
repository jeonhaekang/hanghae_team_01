import axios from "axios";

const instance = axios.create({});

const urlInstance = axios.create({
  baseURL: "http://3.39.0.192:8080",
});

instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] =
    "application/json;charset=UTF-8; charset=UTF-8";
  return config;
});

const apis = {
  signup: (post) => instance.post("/user/signup", post),
  idCheck: (id) => instance.post("/user/idCheck", { username: id }),
  login: (frm) => instance.post("/user/login", frm, { withCredentials: true }),
  post: (post) => urlInstance.post("/posts", post),
};

export default apis;
