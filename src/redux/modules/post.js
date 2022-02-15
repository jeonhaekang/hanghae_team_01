import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../shared/apis";

// action
const LOAD_POSTS = "LOAD_POSTS";
const SET_POSTS = "SET_POSTS";

const initialState = {
  list: [],
};

// actionCreators
const loadPosts = createAction(LOAD_POSTS, (postList) => ({ postList })); //게시물 작성
const setPosts = createAction(SET_POSTS, (post) => ({ post }));

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
        console.log(err.response);
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
        console.log(err.response);
      });
  };
};

const setPostsBE = (post) => {
  return async function (dispatch, getState, { history }) {
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
  },
  initialState
);

const postActions = {
  loadPostBE,
  setPostsBE,
  getPostBE,
};

export { postActions };
