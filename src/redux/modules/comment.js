import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../shared/apis";
import { map } from "lodash";

// action
const GET_COMMENT = "GET_COMMENT";
const SET_COMMENT = "SET_COMMENT";
const DEL_COMMENT = "DEL_COMMENT";
const LIKE_COMMENT = "LIKE_COMMENT";

const initialState = {
  result: true,
  list: {},
};

// actionCreators
const getComment = createAction(GET_COMMENT, (postId, data) => ({
  postId,
  data,
})); //게시물 작성
const setComment = createAction(SET_COMMENT, (postId, comment) => ({
  postId,
  comment,
}));
const delComment = createAction(DEL_COMMENT, (postId, commentId) => ({
  postId,
  commentId,
}));
const likeComment = createAction(LIKE_COMMENT, (props, idx, user) => ({
  props,
  idx,
  user,
}));

// middlewares
const getCommentBE = (postId) => {
  return async function (dispatch, getState, { history }) {
    apis
      .getComment(postId)
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        dispatch(getComment(postId, res.data.data));
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
};

const setCommentBE = (commentData) => {
  return async function (dispatch, getState, { history }) {
    const user = getState().user.user;
    const id = commentData.postId;
    const contents = commentData.commentContents;

    apis
      .commentWrite(id, contents)
      .then((res) => {
        console.log(res);
        const commentSet = {
          userInfo: user,
          commentId: res.data.data.commentId,
          commentContent: commentData.commentContents,
          commentLikesUsername: [],
          commentLike: 0,
        };
        dispatch(setComment(id, commentSet));
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
}; // 댓글 등록

const delCommentBE = (postId, commentId) => {
  return async function (dispatch, getState, { history }) {
    if (window.confirm("덧글을 삭제하시겠습니까?")) {
      apis
        .commentDelete(commentId)
        .then((res) => {
          console.log("성공 : ", res);
          dispatch(delComment(postId, commentId));
        })
        .catch((err) => {
          console.log("실패 : ", err.response);
          alert(err.response.data.data.errors[0].message);
          history.replace("/");
        });
    }
  };
};

const commentLikeBE = (props, idx) => {
  return async function (dispatch, getState, { history }) {
    const user = getState().user.user.username;

    dispatch(likeComment(props, idx, user));
    apis
      .commentLike(props.commentId)
      .then((res) => {
        console.log(res);
        // dispatch(likeComment(props, idx));
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        // alert(err.response.data.data.errors[0].message);
        // history.replace("/");
      });
  };
};

// reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const postId = action.payload.postId;
        const data = action.payload.data;
        draft.list[postId] = data;
      }),
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postId].commentList.unshift(
          action.payload.comment
        );
      }),
    [DEL_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const postId = action.payload.postId;
        const commentId = action.payload.commentId;
        draft.list[postId].commentList = draft.list[postId].commentList.filter(
          (el) => {
            if (el.commentId === commentId) {
              return false;
            }
            return true;
          }
        );
      }),
    [LIKE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const props = action.payload.props;
        const idx = action.payload.idx;
        const user = action.payload.user;

        const result = draft.list[props.postId].commentList[
          idx
        ].commentLikesUsername.find((el) => {
          if (el === user) {
            return true;
          }
        });

        if (result) {
          const new_list = draft.list[props.postId].commentList[
            idx
          ].commentLikesUsername.filter((el) => {
            if (el === user) {
              return false;
            }
            return true;
          });
          console.log(draft.list[props.postId].commentList[idx].commentLike);
          draft.list[props.postId].commentList[idx].commentLikesUsername =
            new_list;
        } else {
          console.log(draft.list[props.postId].commentList[idx].commentLike);
          draft.list[props.postId].commentList[idx].commentLikesUsername.push(
            user
          );
        }
      }),
  },
  initialState
);

const commentActions = {
  getCommentBE,
  setCommentBE,
  delCommentBE,
  commentLikeBE,
};

export { commentActions };
