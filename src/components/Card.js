import React from "react";

import Divider from "@mui/material/Divider";

import { DiJava, DiJsBadge, DiPython, DiCss3, DiHtml5 } from "react-icons/di";
import { Card as CardBox, Box, CardContent, Chip, Stack, Typography } from "@mui/material";

const Card = (props) => {
  const {
    postContents,
    postId,
    postLanguage,
    postProblem,
    postTag,
    postTitle,
    userInfo,
  } = props;

  return (
    
    <CardBox>
      <CardContent
        sx={{
          position: "relative",
          borderBottom: "1px solid #E7EBF0",
        }}
      >
        <Typography
          sx={{
            whiteSpace: "nowrap",
            width: "700px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          component="div"
          variant="h6"
          color="primary"
        >
          <Typography></Typography>
          {postTitle}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
          }}
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Typography color="primary">
              {userInfo.username}
            </Typography>
            <Typography fontSize={23} color="primary">
              {postLanguage === "javascript" ? <DiJsBadge /> : ""}
              {postLanguage === "css" ? <DiCss3 /> : ""}
              {postLanguage === "html" ? <DiHtml5 /> : ""}
              {postLanguage === "java" ? <DiJava /> : ""}
              {postLanguage === "python" ? <DiPython /> : ""}
            </Typography>
            <Stack direction="row">
              <Chip
                color={postProblem ? "primary" : "error"}
                size="small"
                variant="outlined"
                label={postProblem ? "FOUND" : "NOT FOUND"}
              />
            </Stack>
          </Stack>
        </Box>
        <div className="cardContents">{postContents}</div>
      </CardContent>
      <CardContent>
        <Stack direction="row" spacing={1}>
          {postTag.map((el, i) => {
            return <Chip key={i} size="small" label={el} />;
          })}
        </Stack>
      </CardContent>
    </CardBox>
  );
};

Card.defaultProps = {
  postContents: "본문",
  postId: null,
  postLanguage: "javascript",
  postProblem: false,
  postTag: [],
  postTitle: "제목",
  postLike: 0,
  userInfo: { username: "유저", userId: 0 },
};

export default Card;
