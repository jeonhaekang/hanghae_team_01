import React from "react";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CommentCard from "./CommentCard";
import { commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const { postId } = props;
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.list);

  React.useEffect(() => {
    if (commentList[postId]) {
      return;
    }
    dispatch(commentActions.getCommentBE(postId));
  }, []);

  return (
    <Stack spacing={3}>
      {commentList[postId] &&
        commentList[postId].commentList.map((el, i) => {
          console.log(el);
          return (
            <CommentCard key={el.commentId} {...el} postId={postId} idx={i} />
          );
        })}
    </Stack>
  );
};

CommentList.defaultProps = {
  postId: "",
};

export default CommentList;
