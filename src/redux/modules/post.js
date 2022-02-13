import instance from "../../shared/Request";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { RESP } from "../../shared/response";

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
    // instance
    //   .get("/posts/list")
    //   .then(() => {})
    //   .catch(() => {});
    //const postList = RESP.POSTS_LIST;
    //dispatch(loadPosts(postList.postList)); // redux에 서버에서 가져온 리스트 추가
  };
}; // 서버에서 게시물 리스트 가져옴

const setPostsBE = (post) => {
  return async function (dispatch, getState, { history }) {
    const time = new Date().getTime();
    dispatch(setPosts({ ...post, postId: time }));
    alert("게시물을 등록하였습니다.")
    history.replace("/");
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
};

export { postActions };
