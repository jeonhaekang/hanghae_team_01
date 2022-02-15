import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../redux/modules/post";
import { userActions } from "../redux/modules/user";

// page/index
import { Detail, Login, Main, Post, Signup, Edit } from "../pages/Index";

// shared/index
import { Header } from "./Index";
import { Container } from "@mui/material";
import { getCookie } from "./Cookie";

function App() {
  const user = useSelector((state) => state.user.user);
  const token = getCookie("authorization");
  console.log("user : ", user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.loadPostBE());

    if (token && !user) {
      dispatch(userActions.getUserBE());
    }
  }); // 최소 렌더링시 리덕스에 서버데이터 갱신

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <ConnectedRouter history={history}>
          {/* 메인 */}
          <Route path="/" exact component={Main} />
          {/* 로그인 */}
          <Route path="/login" exact component={Login} />
          {/* 회원가입 */}
          <Route path="/signup" exact component={Signup} />
          {/* 게시글 작성 */}
          <Route path="/post" exact component={Post} />
          {/* 게시글 수정 */}
          <Route path="/edit/:postId" exact component={Edit} />
          {/* 상세 페이지 */}
          <Route path="/post/:postId" exact component={Detail} />
        </ConnectedRouter>
      </Container>
    </React.Fragment>
  );
}

export default App;
