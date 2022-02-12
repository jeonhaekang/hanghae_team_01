import React from "react";

import Card from "../components/Card";
import { history } from "../redux/configStore";
import { postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";

const Main = (props) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);

  React.useEffect(() => {
    dispatch(postActions.loadPostBE());
  }); // 최소 렌더링시 리덕스에 서버데이터 갱신

  return (
    <Stack spacing={3} sx={{ paddingTop: "100px" }}>
      {postList.map((el) => {
        return (<Card {...el} key={el.postId}></Card>);
      })}
      <button onClick={() => history.push("/posts")} className="postButton">
        +
      </button>
    </Stack>
  );
};

export default Main;
