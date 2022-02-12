import React from "react";

import { layout } from "../shared/material";
import Card from "../components/Card";
import { history } from "../redux/configStore";

const Main = (props) => {
  return (
    <layout.Stack spacing={3} sx={{ paddingTop: "100px" }}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <button onClick={() => history.push("/posts")} className="postButton">
        +
      </button>
    </layout.Stack>
  );
};

export default Main;
