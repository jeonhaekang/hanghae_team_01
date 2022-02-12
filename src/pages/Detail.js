import React from "react";
import { Typography, Card, CardContent, Button, Box } from "@mui/material";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Detail = (props) => {
  return (
    <React.Fragment>
      {/* 중앙 정렬*/}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
      >
        <Card sx={{ minWidth: "1000px", minHeight: "500px" }}>
          <CardContent>
            <div style={{ fontSize: "30px" }}>
              {props.postTitle}
              <Button
                variant="outlined"
                sx={{ marginRight: "20px", marginLeft: "600px" }}
              >
                수정
              </Button>
              <Button variant="outlined">삭제</Button>
            </div>
            <br />
            <Typography variant="body2">
              {props.postContents}
              <br />
            </Typography>
            <Stack direction="row" spacing={1} sx={{ marginTop: "350px" }}>
              <Chip label={props.postTag[0]} />
              <Chip label={props.postTag[1]} />
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

Detail.defaultProps = {
  postTitle: "javascript error",
  postContents: "content",
  postLanguage: "javascript",
  postTag: ["code", "check"],
  postProblem: false,
};

export default Detail;
