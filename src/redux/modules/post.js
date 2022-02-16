import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../shared/apis";
import { commentActions } from "../modules/comment";

// action
const LOAD_POSTS = "LOAD_POSTS";
const SET_POSTS = "SET_POSTS";
const DEL_POSTS = "DEL_POSTS";
const MODIFY_POSTS = "MODIFY_POSTS";
const FOUND_POSTS = "FOUND_POSTS";

const initialState = {
  list: [],
};

// actionCreators
const loadPosts = createAction(LOAD_POSTS, (postList) => ({ postList })); //게시물 작성
const setPosts = createAction(SET_POSTS, (post) => ({ post }));
const delPosts = createAction(DEL_POSTS, (postId) => ({ postId }));
const modifyPosts = createAction(MODIFY_POSTS, (postId, post) => ({
  postId,
  post,
}));
const foundPosts = createAction(DEL_POSTS, (postId) => ({ postId }));

// middlewares
const loadPostBE = () => {
  return async function (dispatch, getState, { history }) {
    apis
      .postList()
      .then((res) => {
        const postList = res.data.data.postList;
        dispatch(loadPosts(postList)); // redux에 서버에서 가져온 리스트 추가
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
}; // 서버에서 게시물 리스트 가져옴

const getPostBE = (postId) => {
  return async function (dispatch, getState, { history }) {
    apis
      .getPost(postId)
      .then((res) => {
        dispatch(loadPosts([res.data.data]));
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
};

const setPostsBE = (post) => {
  return async function (dispatch, getState, { history }) {
    console.log("1");
    apis
      .post(post)
      .then((res) => {
        console.log(res);
        const user = getState().user.user;
        dispatch(
          setPosts({ ...post, postId: res.data.data.postId, userInfo: user })
        );
        alert("게시물을 등록하였습니다.");
        history.replace("/");
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
};

const delPostsBE = (postId) => {
  return async function (dispatch, getState, { history }) {
    console.log("삭제할 포스트 아이디:", postId);
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      apis
        .deletePost(postId)
        .then((res) => {
          console.log(res);
          dispatch(delPosts(postId));

          alert("게시글을 삭제하였습니다.");
          history.replace("/");
        })
        .catch((err) => {
          console.log("실패 : ", err.response);
          alert(err.response.data.data.errors[0].message);
          history.replace("/");
        });
    }
  };
};

const modifyPostBE = (id, post, originTag) => {
  return async function (dispatch, getState, { history }) {
    apis
      .modifyPost(id, post, originTag)
      .then((res) => {
        console.log(res);
        dispatch(modifyPosts(id, post));
        alert("게시글을 수정하였습니다.");
        history.replace("/");
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
};

const foundPostBE = (id) => {
  return async function (dispatch, getState, { history }) {
    apis
      .foundPost(id)
      .then((res) => {
        console.log(res);
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
    [LOAD_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.postList;
      }),
    [SET_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [DEL_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter((el) => {
          if (el.postId === action.payload.postId) {
            return false;
          }
          return true;
        });
      }),
    [MODIFY_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.map((el) => {
          if (el.postId === action.payload.postId) {
            return { ...el, ...action.payload.post };
          }
          return el;
        });
      }),
  },
  initialState
);

const postActions = {
  loadPostBE,
  setPostsBE,
  getPostBE,
  delPostsBE,
  modifyPostBE,
  foundPostBE,
};

export { postActions };
