import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../redux/modules/post";
import { userActions } from "../redux/modules/user";
import { Stack, Typography } from "@mui/material";
import Permit from "../shared/Permit";
import Upload from "../shared/Upload";

// page/index
import { Detail, Login, Main, Post, Signup, Edit } from "../pages/Index";

// shared/index
import { Header } from "./Index";
import { Container } from "@mui/material";
import { getCookie } from "./Cookie";

function App() {
  const user = useSelector((state) => state.user.user);
  const token = getCookie("authorization");
  const dispatch = useDispatch();

  const myPost = () => {
    dispatch(postActions.loadMyPostBE());
    history.replace("/");
  };

  const allPost = () => {
    dispatch(postActions.loadPostBE());
    history.replace("/");
  };

  React.useEffect(() => {
    dispatch(postActions.loadPostBE());

    if (token && !user) {
      // 리덕스에 유저 정보 없고 토큰만 존재하면 서버에서 유저 정보 가져옴
      dispatch(userActions.getUserBE());
    }
  }); // 최소 렌더링시 리덕스에 서버데이터 갱신

  return (
    <React.Fragment>
      <Header />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ paddingTop: "100px" }}
      >
        <Permit>
          <Stack
            spacing={1}
            minWidth="150px"
            minHeight={{ xs: "100px", sm: "150px" }}
            marginLeft="20px"
            borderRight="1px solid #eee"
          >
            <Typography onClick={allPost}>전체 게시글</Typography>
            <Typography onClick={myPost}>내가 작성한 게시글</Typography>
            <Typography onClick={() => history.push("/profile")}>
              프로필 이미지 변경
            </Typography>
          </Stack>
        </Permit>

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
            {/* 프로필 이미지 수정 */}
            <Route path="/profile" exact component={Upload} />
          </ConnectedRouter>
        </Container>
      </Stack>
    </React.Fragment>
  );
}

export default App;
