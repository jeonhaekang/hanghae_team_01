import React from "react";

import { button, layout, icon, text } from "./material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = (props) => {
  return (
    <layout.Box sx={{ position: "fixid", left: 0, top: 0 }}>
      <AppBar >
        <Toolbar>
          <text.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            404 Found
          </text.Typography>
          <button.Button color="inherit">Login</button.Button>
          <button.Button color="inherit">Signup</button.Button>
        </Toolbar>
      </AppBar>
    </layout.Box>
  );
};

export default Header;
