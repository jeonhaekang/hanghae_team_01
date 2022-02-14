import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

// page/index
import { Detail, Login, Main, Post, Signup } from "../pages/Index";

// shared/index
import { Header } from "./Index";
import { Container } from "@mui/material";

function App() {
  
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/post" exact component={Post} />
          <Route path="/edit/:postId" exact component={Post} />
          <Route path="/post/:postId" exact component={Detail} />
        </ConnectedRouter>
      </Container>
    </React.Fragment>
  );
}

export default App;
