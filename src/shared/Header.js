import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { history } from "../redux/configStore";
import { Box, Button, Typography } from "@mui/material";
import { getCookie, deleteCookie } from "./Cookie";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.user.result);


  if (result) {
    return (
      <Box sx={{ position: "fixid", left: 0, top: 0 }}>
        <AppBar>
          <Toolbar>
            <Typography
              onClick={() => {
                history.push("/");
              }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              404 Found
            </Typography>
            <Button
              color="inherit"
              onClick={() => {dispatch(userActions.userLogout({}));}}
            >
              LogOut
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
  };
    return (
      <Box sx={{ position: "fixid", left: 0, top: 0 }}>
        <AppBar>
          <Toolbar>
            <Typography
              onClick={() => {
                history.push("/");
              }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              404 Found
            </Typography>
            <Button
              onClick={() => {
                history.push("/user/login");
              }}
              color="inherit"
            >
              Login
            </Button>
            <Button
              onClick={() => {
                history.push("/user/signup");
              }}
              color="inherit"
            >
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}


export default Header;
