import React from "react";
import { Route } from "react-router-dom";

// material ui
import { layout } from "./material";

// page/index
import { Detail, Login, Main, Post, Signup } from "../pages/Index";

// shared/index
import { Header } from "./Index";

function App() {
  return (
    <React.Fragment>
      <Header />
      <layout.Container maxWidth="lg">
        <Route path="/" exact component={Main} />
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/signup" exact component={Signup} />
        <Route path="/posts" exact component={Post} />
        <Route path="/edit/:postId" exact component={Post} />
        <Route path="/posts/list/:postId" exact component={Detail} />
      </layout.Container>
    </React.Fragment>
  );
}

export default App;
