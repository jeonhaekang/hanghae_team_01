import React from "react";

import { button, layout, text } from "./material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { history } from "../redux/configStore";

const Header = (props) => {
  return (
    <layout.Box sx={{ position: "fixid", left: 0, top: 0 }}>
      <AppBar>
        <Toolbar>
          <text.Typography
            onClick={() => {
              history.push("/");
            }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            404 Found
          </text.Typography>
          <button.Button
            onClick={() => {
              history.push("/user/login");
            }}
            color="inherit"
          >
            Login
          </button.Button>
          <button.Button
            onClick={() => {
              history.push("/user/signup");
            }}
            color="inherit"
          >
            Signup
          </button.Button>
        </Toolbar>
      </AppBar>
    </layout.Box>
  );
};

export default Header;
