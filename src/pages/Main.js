import React from "react";

import Card from "../components/Card";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Stack } from "@mui/material";
import Permit from "../shared/Permit";
import { postActions } from "../redux/modules/post";
import Upload from "../shared/Upload";

const Main = (props) => {
  const postList = useSelector((state) => state.post.list);
  const dispatch = useDispatch();

  const myPost = () => {
    dispatch(postActions.loadMyPostBE());
  };

  return (
    <Stack spacing={3} sx={{ paddingTop: "100px" }}>
      {/* <Upload></Upload> */}
      <Permit>
        <Button variant="contained" onClick={myPost}>
          내가 작성한 게시글
        </Button>
      </Permit>
      {postList.map((el, i) => {
        console.log(el);
        return (
          <Box key={i}>
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
