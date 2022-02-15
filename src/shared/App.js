import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../redux/modules/post";
import { userActions } from "../redux/modules/user";

// page/index
import { Detail, Login, Main, Post, Signup } from "../pages/Index";

// shared/index
import { Header } from "./Index";
import { Container } from "@mui/material";
import { getCookie } from "./Cookie";

function App() {
  const user = useSelector((state) => state.user.user);
  const token = getCookie("authorization");
  console.log("user : ", user, " token : ", token);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.loadPostBE());

    if (token && !user) {
      dispatch(userActions.loginCheckBE());
    }
  }); // 최소 렌더링시 리덕스에 서버데이터 갱신

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
