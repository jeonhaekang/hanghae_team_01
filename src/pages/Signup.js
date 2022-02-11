import React from "react";
import { layout, button, text } from "../shared/material";


const Signup = (props) => {
  return (
  <React.Fragment>
    {/* 중앙 정렬*/}
    <layout.Box sx={{ display: "flex", justifyContent:"center", marginTop:"100px",}}>
      {/* 회원가입 박스*/}
        <layout.Box sx={{ width: 400, height: 550, border: '3px solid #E7EBF0', textAlign: 'center',}}>
          <h2>회원가입</h2>
          {/* email input*/}
          <text.TextField sx={{ marginTop: '70px',}}
            id="standard-required"
            defaultValue="Email"
            variant="filled"
          />
          {/* email 중복 check button*/}
           <button.Button variant="outlined"
            sx={{ marginTop: '80px', marginLeft: '20px',}}>확인</button.Button>
          <br></br>
          {/* passsward input*/}
          <text.TextField sx={{ marginTop: '40px',}}
            id="standard-required"
            defaultValue="Password"
            variant="filled"
          />
           <br></br>
           {/* passswardcheck input*/}
          <text.TextField sx={{marginTop: '40px',}}
            id="standard-required"
            defaultValue="PasswordCheck"
            variant="filled"
          />
          <br></br>
          {/* 회원가입 button*/}
          <button.Button variant="outlined" sx={{ marginTop: '70px',}}>회원가입</button.Button>
        </layout.Box>
      </layout.Box>
    </React.Fragment>
  );
};

export default Signup;
