import instance from "../../shared/Request";
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { RESP } from "../../shared/response";

// action
const LOAD_POSTS = "LOAD_POSTS";
const POSTS = "POSTS";

const initialState = {
  list: [],
};

// actionCreators
const loadPosts = createAction(LOAD_POSTS, (postList) => ({ postList })); //게시물 작성
const posts = createAction(POSTS, (post) => ({ post }));

// middlewares
const loadPostBE = () => {
  return async function (dispatch, getState, { history }) {
    // instance
    //   .get("/posts/list")
    //   .then(() => {})
    //   .catch(() => {});
    const postList = RESP.POSTS_LIST;

    dispatch(loadPosts(postList.postList)); // redux에 서버에서 가져온 리스트 추가
  };
}; // 서버에서 게시물 리스트 가져옴

// reducer
export default handleActions(
  {
    [LOAD_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.postList;
      }),
    [POSTS]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const postActions = {
  posts,
  loadPostBE,
};

export { postActions };
