import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { emailCheck, pwdCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    if (!pwdCheck(pwd)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    dispatch(userActions.loginActionBE(id, pwd));
  };

  return (
    <React.Fragment>
      {/* 중앙 정렬*/}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "200px" }}
      >
        {/* 로그인 박스*/}
        <Box
          sx={{
            width: 350,
            height: 450,
            border: "3px solid #E7EBF0",
            textAlign: "center",
          }}
        >
          <h2>로그인</h2>
          {/* email input*/}
          <TextField
            sx={{ paddingTop: "40px" }}
            id="standard-required"
            defaultValue={id}
            variant="filled"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <br></br>
          {/* passsward input*/}
          <TextField
            sx={{ paddingTop: "40px" }}
            id="standard-required"
            defaultValue={pwd}
            variant="filled"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          <br></br>
          {/* 로그인 버튼*/}
          <Button
            variant="outlined"
            onClick={() => {
              login();
            }}
            sx={{ marginTop: "40px" }}
          >
            로그인
          </Button>
          {/* 회원 가입 버튼*/}
          <Button
            variant="outlined"
            sx={{ marginTop: "40px", marginLeft: "20px" }}
          >
            회원가입
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Login;
