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
  signup: (post) =>
    instance
      .post("/user/signup", post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }),
};

export default apis;