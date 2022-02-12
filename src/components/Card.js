import React from "react";

import { layout, icon, text, card, chip } from "../shared/material";
import Divider from "@mui/material/Divider";

import ReactDOM from "react-dom";
import { WithContext as ReactTags } from "react-tag-input";

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
    <card.Card>
      <card.CardContent
        sx={{
          position: "relative",
          borderBottom: "1px solid #E7EBF0",
        }}
      >
        <text.Typography
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
          <text.Typography></text.Typography>
          {postTitle}
        </text.Typography>
        <layout.Box
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
          }}
        >
          <layout.Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <text.Typography color="primary">
              {userInfo.username}
            </text.Typography>
            <text.Typography fontSize={23} color="primary">
              {postLanguage === "javascript" ? <icon.DiJsBadge /> : ""}
              {postLanguage === "css" ? <icon.DiCss3 /> : ""}
              {postLanguage === "html" ? <icon.DiHtml5 /> : ""}
              {postLanguage === "java" ? <icon.DiJava /> : ""}
              {postLanguage === "python" ? <icon.DiPython /> : ""}
            </text.Typography>
            <layout.Stack direction="row">
              <chip.Chip
                color={postProblem ? "primary" : "error"}
                size="small"
                variant="outlined"
                label={postProblem ? "FOUND" : "NOT FOUND"}
              />
            </layout.Stack>
          </layout.Stack>
        </layout.Box>
        <div className="cardContents">{postContents}</div>
      </card.CardContent>
      <card.CardContent>
        <layout.Stack direction="row" spacing={1}>
          <icon.TagIcon color="info"></icon.TagIcon>
          {postTag.map((el, i) => {
            return <chip.Chip key={i} size="small" label={el} />;
          })}
        </layout.Stack>
      </card.CardContent>
    </card.Card>
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
