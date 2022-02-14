import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/Request";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

//actions
const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
const GET_USER = "GET_USER";
const IS_LOGIN = "IS_LOGIN";

//action creators
const userLogin = createAction(USER_LOGIN, (user) => ({ user }));
const userLogout = createAction(USER_LOGOUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const isLogin = createAction(IS_LOGIN, (state) => ({ state }));

//middleware actions
const initialState = {
  user: null,
  result: false,
  is_login: false,
};

//middleware actions
const loginActionBE = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    const frm = new FormData();
    frm.append("username", id);
    frm.append("password", pwd);

    apis
      .login(frm)
      .then((res) => {
        const userInfo = res.data.data.userInfo;
        // setCookie("username", userInfo.username);
        // setCookie("userId", userInfo.userId);
        // setCookie("is_login", true);
        dispatch(isLogin(true));
        history.replace("/");
      })
      .catch((err) => {
        console.log("로그인 실패:", err);
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
    [IS_LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = action.payload.state;
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
