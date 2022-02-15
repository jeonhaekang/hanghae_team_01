import axios from "axios";
import { getCookie } from "./Cookie";

const instance = axios.create({
  baseURL: "http://3.39.0.192",
});

instance.interceptors.request.use(function (config) {
  const token = getCookie("authorization");

  config.headers["Content-Type"] = 
    "application/json;charset=UTF-8; charset=UTF-8";
  config.headers.common["authorization"] = `${token}`;
  return config;
});

const apis = {
  signup: (post) => instance.post("/user/signup", post),
  idCheck: (id) => instance.post("/user/idCheck", { username: id }),
  login: (data) => instance.post("/user/login", data),
  getUser: () => instance.get("/user"),
  post: (post) => instance.post("/posts", post),
  postList: () => instance.get("/posts"),
  getPost: (postId) => instance.get("/posts/" + postId),
  delPost: (postId) => instance.delete("/posts/" + postId),
  modifyPost: (postId, post, originTag) =>
    instance.put("/posts/" + postId, { ...post, originTag: originTag }),
};

export default apis;
