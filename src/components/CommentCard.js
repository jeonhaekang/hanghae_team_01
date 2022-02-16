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

const CommentCard = (props) => {
  const dispatch = useDispatch();

  const deleteComment = (postId, commentId) => {
    dispatch(commentActions.delCommentBE(postId, commentId));
  };

  const loginUser = useSelector((state) => state.user.user?.username);

  const {
    userInfo,
    commentContent,
    commentId,
    commentLikesUsername,
    commentLike,
    postId,
    idx,
  } = props;
  const con = commentContent.split("``");

  const likeState = commentLikesUsername.find((el) => {
    if (loginUser === el) {
      return true;
    }
  });

  const like = () => {
    dispatch(commentActions.commentLikeBE(props, idx));
  };

  return (
    <Box position="relative">
      <Card>
        <Box position="absolute" bottom="10px" right="20px">
          <Typography variant="body2">
            좋아요 : {commentLike}
          </Typography>
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
          <Button color="error" onClick={like}>
            {likeState ? <IoIosHeart /> : <IoIosHeartEmpty />}
          </Button>
        </Stack>
        <CardContent>
          <Typography variant="h7" color="primary">
            {userInfo.username}
          </Typography>
          {con.map((el, i) => {
            if (i % 2 === 1) {
              return (
                <CodeEditor
                  key={el}
                  value={el}
                  language="js"
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
              return <pre key={el}> {el} </pre>;
            }
          })}
        </CardContent>
      </Card>
    </Box>
  );
};

CommentCard.defaultProps = {
  comment: {},
  commentContent: "",
  commentId: null,
  commentLikes: [],
};

export default CommentCard;
