import React from "react";

import Divider from "@mui/material/Divider";

import { DiJava, DiJsBadge, DiPython, DiCss3, DiHtml5 } from "react-icons/di";
import {
  Card as CardBox,
  Box,
  CardContent,
  Chip,
  Stack,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import { postActions } from "../redux/modules/post";

const Card = (props) => {
  const dispatch = useDispatch();

  const {
    postContents,
    postId,
    postLanguage,
    postProblem,
    postTag,
    postTitle,
    userInfo,
  } = props;

  const user = useSelector((state) => state.user.user);
  const nickName = userInfo.username.split("@")[0];
  const contents = postContents.split("``");
  const [found, setFound] = React.useState(postProblem);

  const delPost = () => {
    if (user?.username === userInfo.username) {
      dispatch(postActions.delPostsBE(postId));
    }
  };

  const foundPost = () => {
    dispatch(postActions.foundPostBE(postId, found));
    setFound(!found);
  };

  return (
    <CardBox>
      <CardContent
        onClick={() => {
          history.push("/post/" + postId);
        }}
        sx={{
          position: "relative",
          borderBottom: "1px solid #E7EBF0",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Typography
            sx={{
              whiteSpace: "nowrap",
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            component="div"
            variant="h6"
            color="primary"
          >
            {postTitle}
          </Typography>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            alignContent="center"
          >
            <Typography color="primary">{nickName}</Typography>
            <Typography fontSize={23} color="primary">
              {postLanguage === "js" ? <DiJsBadge /> : ""}
              {postLanguage === "css" ? <DiCss3 /> : ""}
              {postLanguage === "html" ? <DiHtml5 /> : ""}
              {postLanguage === "java" ? <DiJava /> : ""}
              {postLanguage === "python" ? <DiPython /> : ""}
            </Typography>
            <Chip
              color={found ? "primary" : "error"}
              size="small"
              variant="outlined"
              label={found ? "FOUND" : "NOT FOUND"}
            />
          </Stack>
        </Stack>

        <Box
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
          }}
        ></Box>
        <div className="cardContents">
          {contents.filter((el, i) => {
            if (i % 2 === 0) {
              return true;
            }
          })}
        </div>
      </CardContent>
      <CardContent>
        <Stack direction="row" display="inline-block">
          {postTag.map((el, i) => {
            return (
              <Chip
                sx={{
                  marginRight: "10px",
                }}
                key={i}
                size="small"
                label={el}
              />
            );
          })}
        </Stack>
      </CardContent>

      {user?.username === userInfo.username ? (
        <ButtonGroup>
          <Button
            variant="text"
            onClick={() => history.push("/edit/" + postId)}
          >
            수정
          </Button>
          <Button
            onClick={() => {
              delPost();
            }}
            variant="text"
            color="error"
          >
            삭제
          </Button>
          <Button
            onClick={() => {
              foundPost();
            }}
            variant="text"
            color="success"
          >
            해결
          </Button>
        </ButtonGroup>
      ) : (
        ""
      )}
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
