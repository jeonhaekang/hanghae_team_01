import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {
  Button,
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { commentActions } from "../redux/modules/comment";
import { IoIosHeart } from "react-icons/io";

const CommentList = (props) => {
  const { postId } = props;
  const commentList = useSelector((state) => state.comment);

  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(postId);
    dispatch(commentActions.getCommentBE(postId));
  });

  const deleteComment = (id) => {
    console.log(id);
    dispatch(commentActions.delCommentBE(id));
  };

  return (
    <Stack spacing={3}>
      {commentList.data.commentList.map((el, i) => {
        const con = el.commentContent.split("``");
        console.log(el);
        return (
          <Box position="relative">
            <Card>
              <Box position="absolute" right="0">
                <Button
                  color="error"
                  onClick={() => {
                    deleteComment(el.commentId);
                  }}
                >
                  삭제
                </Button>
                <Button color="error">
                  <IoIosHeart />
                </Button>
              </Box>
              <CardContent>
                <Typography variant="h7" color="primary">
                  {el.comment.userInfo.username}
                </Typography>
                {con.map((el, i) => {
                  if (i % 2 === 1) {
                    return (
                      <CodeEditor
                        key={i}
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
                    return <pre> {el} </pre>;
                  }
                })}
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Stack>
  );
};

CommentList.defaultProps = {
  postId: "",
};

export default CommentList;
