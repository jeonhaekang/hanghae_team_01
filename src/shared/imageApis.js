import axios from "axios";
import { getCookie } from "./Cookie";

const instance = axios.create({
  baseURL: "http://3.39.0.192",
});

instance.interceptors.request.use(function (config) {
  const token = getCookie("authorization");

  config.headers["Content-Type"] = "multipart/form-data";
  config.headers.common["authorization"] = `${token}`;
  return config;
});

export const apis = {
  uploadImage: (image) => instance.post("/user/images", image),
};
