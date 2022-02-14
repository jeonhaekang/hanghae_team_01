import React from "react";

import Card from "../components/Card";
import { history } from "../redux/configStore";
import { postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import Permit from "../shared/Permit";

const Main = (props) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);

  React.useEffect(() => {
    dispatch(postActions.loadPostBE());
  }); // 최소 렌더링시 리덕스에 서버데이터 갱신

  return (
    <Stack spacing={3} sx={{ paddingTop: "100px" }}>
      {postList.map((el, i) => {
        return (
          <Box
            onClick={() => {
              history.push("/post/" + el.postId);
            }}
            key={i}
          >
            <Card {...el} key={i}></Card>
          </Box>
        );
      })}
      <Permit>
        <button onClick={() => history.push("/post")} className="postButton">
          +
        </button>
      </Permit>
    </Stack>
  );
};

export default Main;
