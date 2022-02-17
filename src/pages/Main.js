import React from "react";

import Card from "../components/Card";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";
import Permit from "../shared/Permit";

const Main = (props) => {
  const postList = useSelector((state) => state.post.list);

  return (
    <Box width="100%">
      <Stack spacing={3}>
        {postList.map((el, i) => {
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
    </Box>
  );
};

export default Main;
