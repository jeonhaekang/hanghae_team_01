import axios from "axios";

const instance = axios.create({
  baseURL: "https://3.39.0.192",
});

//instance.defaults.headers.common["Authorization"] = "dd";

export default instance;