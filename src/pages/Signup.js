import React from "react";
import { Button, TextField, Container, Stack, Typography } from "@mui/material";

import { emailCheck, pwdCheck } from "../shared/common";
import { signupActions } from "../redux/modules/signup";
import { useDispatch, useSelector } from "react-redux";

const Signup = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const state = useSelector((state) => !state.signup.state);

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

    dispatch(signupActions.signupBE(post));
  };

  const idChagne = (e) => {
    setId(e.target.value);
    dispatch(signupActions.idCheck(false));
  };

  const idCheck = () => {
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    dispatch(signupActions.idCheckBE(id));
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

        <Stack>
          <TextField
            id="outlined-id-input"
            label="USER ID"
            placeholder="아이디를 입력해주세요."
            onChange={(e) => {
              idChagne(e);
            }}
          />
          <Typography variant="h7">
            이메일 형식으로 아이디를 입력해주세요.
          </Typography>
        </Stack>
        <Button variant="contained" onClick={idCheck}>
          중복 확인
        </Button>

        <Stack>
          <TextField
            id="outlined-password-input"
            label="PASSWORD"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            type="password"
          />
          <Typography variant="h7">
            비밀번호는 특수문자를 포함한 8자리 이상을 입력해주세요.
          </Typography>
        </Stack>
        <TextField
          id="outlined-check-input"
          label="PASSWORD CHECK"
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
          type="password"
        />

        <Button disabled={state} variant="contained" onClick={signup}>
          회원가입
        </Button>
      </Stack>
    </Container>
  );
};

export default Signup;
