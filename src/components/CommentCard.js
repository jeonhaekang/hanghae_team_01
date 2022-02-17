import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { commentActions } from "../redux/modules/comment";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import Permit from "../shared/Permit";
import { styled } from "@mui/system";

const CommentCard = (props) => {
  const {
    userInfo,
    commentContent,
    commentId,
    commentLikesUsername,
    commentLike,
    postId,
    idx,
    language,
  } = props;

  const dispatch = useDispatch();
  console.log(language);
  const deleteComment = (postId, commentId) => {
    dispatch(commentActions.delCommentBE(postId, commentId));
  };

  const loginUser = useSelector((state) => state.user.user?.username);

  const con = commentContent.split("``");

  const likeState = commentLikesUsername.find((el) => {
    if (loginUser === el) {
      return true;
    }
  });

  const [like, setLike] = React.useState(likeState);
  const [likeCnt, setLikeCnt] = React.useState(commentLike);

  const likeBtn = () => {
    console.log(likeCnt);
    dispatch(commentActions.commentLikeBE(props, idx));
    setLike(!like);
    setLikeCnt(likeCnt + (like ? -1 : +1));
  };

  return (
    <Box position="relative">
      <Card>
        <Box position="absolute" bottom="10px" right="20px">
          <Typography variant="body2">좋아요 : {likeCnt}</Typography>
        </Box>
        <Stack direction="row" position="absolute" right="0">
          {userInfo.username === loginUser && (
            <Button
              color="error"
              onClick={() => {
                deleteComment(postId, commentId);
              }}
            >
              삭제
            </Button>
          )}
          <Permit>
            <Button color="error" onClick={likeBtn}>
              {like ? <IoIosHeart /> : <IoIosHeartEmpty />}
            </Button>
          </Permit>
        </Stack>
        <CardContent>
          <Typography variant="h7" color="primary">
            <Stack direction="row">
              <ProfileImage src={userInfo.profileImageUrl} />
              {userInfo.username}
            </Stack>
          </Typography>
          {con.map((el, i) => {
            if (i % 2 === 1) {
              return (
                <CodeEditor
                  key={i}
                  value={el}
                  language={language}
                  placeholder="Please enter code."
                  padding={15}
                  style={{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily:
                      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                  }}
                />
              );
            } else {
              return <pre key={i}> {el} </pre>;
            }
          })}
        </CardContent>
      </Card>
    </Box>
  );
};

const ProfileImage = styled("img")({
  width: "20px",
  height: "20px",
  borderRadius: "50px",
  backgroundSize: "cover",
});

CommentCard.defaultProps = {
  comment: {},
  commentContent: "",
  commentId: null,
  commentLikes: [],
};

export default CommentCard;
