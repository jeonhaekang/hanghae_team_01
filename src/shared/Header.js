import React from "react";
import { button, layout } from "./material";

const Header = (props) => {
  return (
    <layout.Box
      sx={{
        width: "100%",
        height: 80,
        overflow: "hidden",
        backgroundColor: "rgb(10,25,41,0.7)",
        borderBottom: "1px solid rgba(194, 224, 255, 0.08)",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <button.ButtonGroup variant="outlined" aria-label="outlined button group">
        <button.Button>One</button.Button>
        <button.Button>Two</button.Button>
        <button.Button>Three</button.Button>
      </button.ButtonGroup>
    </layout.Box>
  );
};

export default Header;
