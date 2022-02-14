import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/Request";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { RESP } from "../../shared/response";
import axios from "axios";

//actions
const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
const GET_USER = "GET_USER";

//action creators
const userLogin = createAction(USER_LOGIN, (user) => ({ user }));
const userLogout = createAction(USER_LOGOUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//middleware actions
const initialState = {
  user: null,
  result: false,
};

//middleware actions
const loginActionBE = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(id, pwd)
      .then((res) => {
        console.log("로그인 성공:", res);
      })
      .catch((err) => {
        console.log("로그인 실패:", err.response);
      });
    //dispatch(userLogin(user));
    //history.push("/");
  };
};

export default handleActions(
  {
    [USER_LOGIN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("result", "success");
        draft.user = action.payload.user;
        draft.result = true;
      }),
    [USER_LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("result");
        draft.user = null;
        draft.result = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const userActions = {
  userLogin,
  userLogout,
  getUser,
  loginActionBE,
};

export { userActions };
