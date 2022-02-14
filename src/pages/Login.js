import React from "react";
import { Button, TextField, Container, Stack, Typography } from "@mui/material";

import { userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (id === "") {
      window.alert("아이디를 입력해주세요.");
      return;
    }
    if (pwd === "") {
      window.alert("패스워드를 입력해주세요.");
      return;
    }
    dispatch(userActions.loginActionBE(id, pwd));
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
        <Typography>LOGIN</Typography>
        <TextField
          id="outlined-id-input"
          label="USER ID"
          placeholder="아이디를 입력해주세요."
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <TextField
          id="outlined-password-input"
          label="PASSWORD"
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          type="password"
        />
        <Button
          variant="contained"
          onClick={() => {
            login();
          }}
        >
          로그인
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
