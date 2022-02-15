import React from "react";

import Card from "../components/Card";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import Permit from "../shared/Permit";

const Main = (props) => {
  const postList = useSelector((state) => state.post.list);

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
