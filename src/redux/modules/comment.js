import instance from "../../shared/Request";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { RESP } from "../../shared/response";

// action
const LOAD_COMMENT = "LOAD_COMMENT";
const SET_COMMENT = "SET_COMMENT";

const initialState = {
  result: true,
  data: {
    commentList: [],
  },
};

// actionCreators
const loadComment = createAction(LOAD_COMMENT, (commentList) => ({
  commentList,
})); //게시물 작성
const setComment = createAction(SET_COMMENT, (comment, postId) => ({
  comment,
}));

// middlewares
const loadCommentBE = (postId) => {
  return async function (dispatch, getState, { history }) {
    // const commentList = RESP.COMMENT_LIST;
    // dispatch(loadComment(commentList));
  };
}; // 서버에서 덧글 리스트 가져옴

const setCommentBE = (commentData) => {
  return async function (dispatch, getState, { history }) {
    const commentSet = {
      comment: {
        userInfo: {
          username: "1003gorkd@naver.com",
          userId: "id",
        },
      },
      commentId: "id",
      commentContent: commentData.commentContents,
      commentLikes: [],
    };
    dispatch(setComment(commentSet));
  };
}; // 댓글 등록

// reducer
export default handleActions(
  {
    [LOAD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.commentList;
      }),
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.data.commentList.unshift(action.payload.comment);
      }),
  },
  initialState
);

const commentActions = {
  loadCommentBE,
  setCommentBE,
};

export { commentActions };
