import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { emailCheck, pwdCheck } from "../shared/common";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Signup = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  const signup = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    if (!pwdCheck(pwd)) {
      window.alert("패스워드 형식이 맞지 않습니다!");
      return;
    }
    if (pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
    const post = {
      username: id,
      password: pwd,
      passwordCheck: pwd_check,
    };

    dispatch(userActions.signupBE(post));
  };

  const idCheck = () => {
    dispatch(userActions.idCheckBE(id));
  };

  return (
    <React.Fragment>
      {/* 중앙 정렬*/}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
      >
        {/* 회원가입 박스*/}
        <Box
          sx={{
            width: 400,
            height: 550,
            border: "3px solid #E7EBF0",
            textAlign: "center",
          }}
        >
          <h2>회원가입</h2>
          {/* email input*/}
          <TextField
            sx={{ marginTop: "70px" }}
            id="standard-required"
            defaultValue="Email"
            variant="filled"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          {/* email 중복 check button*/}
          <Button
            variant="outlined"
            sx={{ marginTop: "80px", marginLeft: "20px" }}
            onClick={idCheck}
          >
            확인
          </Button>
          <br></br>
          {/* passsward input*/}
          <TextField
            sx={{ marginTop: "40px" }}
            id="standard-required"
            defaultValue="Password"
            variant="filled"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          <br></br>
          {/* passswardcheck input*/}
          <TextField
            sx={{ marginTop: "40px" }}
            id="standard-required"
            defaultValue="PasswordCheck"
            variant="filled"
            onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
          <br></br>
          {/* 회원가입 button*/}
          <Button
            variant="outlined"
            onClick={() => {
              signup();
            }}
            sx={{ marginTop: "70px" }}
          >
            회원가입
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Signup;
