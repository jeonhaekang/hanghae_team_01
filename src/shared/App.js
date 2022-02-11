import "./App.css";
import Container from "@mui/material/Container";

import { Route } from "react-router-dom";
import Main from "../pages/Main";
import Header from "./Header";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <Route path="/" exact component={Main} />
      </Container>
    </React.Fragment>
  );
}

export default App;
