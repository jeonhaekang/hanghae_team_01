import React from "react";
import { layout, button, text } from "../shared/material";


const Login = (props) => {
  return (
    <React.Fragment>
      {/* 중앙 정렬*/}
      <layout.Box sx={{ display: "flex", justifyContent:"center", marginTop:"200px",}}>
        {/* 로그인 박스*/}
        <layout.Box
          sx={{ width: 350, height: 450, border: '3px solid #E7EBF0', textAlign: 'center',}}>
          <h2>로그인</h2>
          {/* email input*/}
          <text.TextField
            sx={{ paddingTop: '40px',}}
            id="standard-required"
            defaultValue="Email"
            variant="filled"
          />
          <br></br>
          {/* passsward input*/}
          <text.TextField
            sx={{ paddingTop: '40px',}}
            id="standard-required"
            defaultValue="Password"
            variant="filled"
          />
          <br></br>
          {/* 로그인 버튼*/}
          <button.Button variant="outlined"
            sx={{marginTop: '40px',}}>로그인</button.Button>
            {/* 회원 가입 버튼*/}
             <button.Button variant="outlined" sx={{ marginTop: '40px', marginLeft: '20px',}}>회원가입</button.Button>
        </layout.Box>
      </layout.Box>
    </React.Fragment>
  )
};


export default Login;
