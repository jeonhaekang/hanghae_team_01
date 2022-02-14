import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { history } from "../redux/configStore";
import { Box, Button, Typography } from "@mui/material";
import { userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const logout = () => {
    dispatch(userActions.logoutBE());
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
          {!is_login ? (
            // 비로그인 상태 헤더F
            <Box>
              <Button
                onClick={() => {
                  history.push("/login");
                }}
                color="inherit"
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  history.push("/signup");
                }}
                color="inherit"
              >
                Signup
              </Button>
            </Box>
          ) : (
            // 로그인 상태 헤더
            <Button onClick={logout} color="inherit">
              LOGOUT
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
