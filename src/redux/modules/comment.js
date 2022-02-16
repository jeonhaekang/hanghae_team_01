import instance from "../../shared/apis";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../shared/apis";

// action
const LOAD_COMMENT = "LOAD_COMMENT";
const SET_COMMENT = "SET_COMMENT";
const DEL_COMMENT = "DEL_COMMENT";

const initialState = {
  result: true,
  data: {
    commentList: [],
  },
};

// actionCreators
const getComment = createAction(LOAD_COMMENT, (commentList) => ({
  commentList,
})); //게시물 작성
const setComment = createAction(SET_COMMENT, (comment, postId) => ({
  comment,
}));
const delComment = createAction(DEL_COMMENT, (commentId) => ({
  commentId,
}));

// middlewares
const getCommentBE = (postId) => {
  return async function (dispatch, getState, { history }) {
    apis
      .getComment(postId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
}; // 서버에서 덧글 리스트 가져옴

const setCommentBE = (commentData) => {
  return async function (dispatch, getState, { history }) {
    const user = getState().user.user;
    const id = commentData.postId;
    const contents = commentData.commentContents;
    console.log(id, contents);

    apis
      .commentWrite(id, contents)
      .then((res) => {
        console.log(res);
        const commentSet = {
          comment: {
            userInfo: user,
          },
          commentId: res.data.data.commentId,
          commentContent: commentData.commentContents,
          commentLikes: [],
        };
        dispatch(setComment(commentSet));
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
}; // 댓글 등록

const delCommentBE = (id) => {
  return async function (dispatch, getState, { history }) {
    apis
      .commentDelete(id)
      .then((res) => {
        console.log("성공 : ", res.response);
        dispatch(delComment(id));
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
};

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
    [DEL_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter((el) => {
          console.log(el.commentId, action.payload.commentId);
          if (el.commentId === action.payload.commentId) {
            return false;
          }
          return true;
        });
      }),
  },
  initialState
);

const commentActions = {
  getCommentBE,
  setCommentBE,
  delCommentBE,
};

export { commentActions };
