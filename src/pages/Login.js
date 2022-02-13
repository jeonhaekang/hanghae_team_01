import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { setCookie, getCookie, deleteCookie } from "../shared/Cookie";

import {actionCreators as userActions} from "../redux/modules/user";
import { useDispatch } from "react-redux";



const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [passsward, setPasswerd] = React.useState('');

  
  const login = () => {
    console.log("로그인")
    dispatch(userActions.loginAction({user_name: "perl"}));
  }

  return (
    <React.Fragment>
      {/* 중앙 정렬*/}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "200px", }}>
        {/* 로그인 박스*/}
        <Box
          sx={{ width: 350, height: 450, border: '3px solid #E7EBF0', textAlign: 'center', }}>
          <h2>로그인</h2>
          {/* email input*/}
          <TextField
            sx={{ paddingTop: '40px', }}
            id="standard-required"
            defaultValue={username}
            variant="filled"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br></br>
          {/* passsward input*/}
          <TextField
            sx={{ paddingTop: '40px', }}
            id="standard-required"
            defaultValue={passsward}
            variant="filled"
            onChange={(e) => {
              setPasswerd(e.target.value);
            }}
          />
          <br></br>
          {/* 로그인 버튼*/}
          <Button variant="outlined"
            onClick={() => {login()}}
            sx={{ marginTop: '40px', }}>로그인</Button>
          {/* 회원 가입 버튼*/}
          <Button variant="outlined" sx={{ marginTop: '40px', marginLeft: '20px', }}>회원가입</Button>
        </Box>
      </Box>
    </React.Fragment>
  )
};


export default Login;
