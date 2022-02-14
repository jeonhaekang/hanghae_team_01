import React from "react";
import {
  Button,
  Box,
  TextField,
  Container,
  Stack,
  Typography,
} from "@mui/material";

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
    <Container
      sx={{
        borderLeft: "1px solid #E7EBF0",
        borderRight: "1px solid #E7EBF0",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Stack spacing={3} sx={{ paddingTop: "100px" }}>
        <Typography>SIGNUP</Typography>
        <TextField
          id="outlined-textarea"
          label="USER ID"
          placeholder="아이디를 입력해주세요."
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          sx={{ marginTop: "80px", marginLeft: "20px" }}
          onClick={idCheck}
        >
          확인
        </Button>
        <TextField
          sx={{ marginTop: "40px" }}
          id="standard-required"
          defaultValue="Password"
          variant="filled"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <TextField
          sx={{ marginTop: "40px" }}
          id="standard-required"
          defaultValue="PasswordCheck"
          variant="filled"
          onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          onClick={() => {
            signup();
          }}
          sx={{ marginTop: "70px" }}
        >
          회원가입
        </Button>
      </Stack>
    </Container>
  );
};

export default Signup;
