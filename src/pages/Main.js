import React from "react";

import { layout } from "../shared/material";
import Card from "../components/Card";

const Main = (props) => {
  return (
    <layout.Stack spacing={3} sx={{ marginTop: "70px" }}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </layout.Stack>
  );
};

export default Main;
