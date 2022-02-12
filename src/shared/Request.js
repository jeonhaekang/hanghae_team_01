import axios from "axios";

const instance = axios.create({
  baseURL: "192.168.0.1",
});

instance.defaults.headers.common["Authorization"] = "dd";

export default instance;
