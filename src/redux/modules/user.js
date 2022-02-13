import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";

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
const signupBE = (post) => {
  return function (dispatch, getState, { history }) {

    instance
      .post("/user/signup", post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    dispatch(userLogin(user));
    history.push("/");
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

const actionCreators = {
  userLogin,
  userLogout,
  getUser,
  loginAction,
  signupBE,
};

export { actionCreators };
