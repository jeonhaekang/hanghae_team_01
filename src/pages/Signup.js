import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';


const Signup = (props) => {
  return (
  <React.Fragment>
    {/* 중앙 정렬*/}
    <Box sx={{ display: "flex", justifyContent:"center", marginTop:"100px",}}>
      {/* 회원가입 박스*/}
        <Box sx={{ width: 400, height: 550, border: '3px solid #E7EBF0', textAlign: 'center',}}>
          <h2>회원가입</h2>
          {/* email input*/}
          <TextField sx={{ marginTop: '70px',}}
            id="standard-required"
            defaultValue="Email"
            variant="filled"
          />
          {/* email 중복 check button*/}
           <Button variant="outlined"
            sx={{ marginTop: '80px', marginLeft: '20px',}}>확인</Button>
          <br></br>
          {/* passsward input*/}
          <TextField sx={{ marginTop: '40px',}}
            id="standard-required"
            defaultValue="Password"
            variant="filled"
          />
           <br></br>
           {/* passswardcheck input*/}
          <TextField sx={{marginTop: '40px',}}
            id="standard-required"
            defaultValue="PasswordCheck"
            variant="filled"
          />
          <br></br>
          {/* 회원가입 button*/}
          <Button variant="outlined" sx={{ marginTop: '70px',}}>회원가입</Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Signup;
