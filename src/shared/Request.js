import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.39.0.192:8080",
});

//instance.defaults.headers.common["Authorization"] = "dd";
instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] =
    "application/json;charset=UTF-8; charset=UTF-8";
  //config.headers["authorization"] = ""
  return config;
});

const apis = {
  signup: (post) => instance.post("/user/signup", post),
  idCheck: (id) => instance.post("/user/idCheck", { username: id }),
  login: (data) =>
    instance.post("/user/login", data, { withCredentials: true }),
};

export default apis;
