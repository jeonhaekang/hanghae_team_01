import axios from "axios";

const instance = axios.create({});

instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] =
    "application/json;charset=UTF-8; charset=UTF-8";
  return config;
});

const apis = {
  signup: (post) => instance.post("/user/signup", post),
  idCheck: (id) => instance.post("/user/idCheck", { username: id }),
  login: (frm) => instance.post("/user/login", frm, { withCredentials: true }),
};

export default apis;
