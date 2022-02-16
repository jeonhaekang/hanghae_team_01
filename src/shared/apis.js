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
  // user
  signup: (post) => instance.post("/user/signup", post), // 회원가입
  idCheck: (id) => instance.post("/user/idCheck", { username: id }), // 중복검사
  login: (data) => instance.post("/user/login", data), // 로그인
  getUser: () => instance.get("/user"), // 유저정보 가져오기

  // post
  post: (post) => instance.post("/posts", post), // 게시글 작성
  postList: () => instance.get("/posts"), // 게시글 리스트
  getPost: (postId) => instance.get("/posts/" + postId), // 게시글 단건 가져오기
  delPost: (postId) => instance.delete("/posts/" + postId), // 게시글 삭제
  modifyPost: (postId, post, originTag) =>
    instance.put("/posts/" + postId, { ...post, originTag: originTag }), // 게시글 수정

  // comment
  getComment: (postId) => instance.get("/comment/" + postId),
  commentWrite: (id, contents) =>
    instance.post("/comment/" + id, { commentContents: contents }), // 덧글 작성
  commentDelete: (id) => instance.delete("/comment/" + id), // 덧글 삭제
};

export default apis;
