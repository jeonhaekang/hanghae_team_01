import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {
  Button,
  ButtonGroup,
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { commentActions } from "../redux/modules/comment";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const CommentList = (props) => {
  const { postId } = props;
  const commentList = useSelector((state) => state.comment);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(commentActions.loadCommentBE(postId));
  });

  return (
    <Stack spacing={3}>
      {commentList.data.commentList.map((el, i) => {
        const con = el.commentContent.split("``");
        console.log(el);
        return (
          <Box position="relative">
            <Card key={i}>
              <Box position="absolute" right="0">
                <Button color="error">삭제</Button>
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
                      ></CodeEditor>
                    );
                  } else {
                    return <Typography key={i}> {el} </Typography>;
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
