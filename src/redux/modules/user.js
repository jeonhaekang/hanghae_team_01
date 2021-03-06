import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/apis";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

//actions
const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";
const PROFILE_UPDATE = "PROFILE_UPDATE";

//action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logout = createAction(LOGOUT, () => ({}));
const profileUpdate = createAction(PROFILE_UPDATE, (url) => ({ url }));

//middleware actions
const initialState = {
  user: null,
  is_login: false,
};

//middleware actions
const loginActionBE = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    const data = {
      username: id,
      password: pwd,
    };

    apis
      .login(data)
      .then((res) => {
        const token = res.headers.authorization;
        setCookie(token);

        dispatch(setUser(res.data.data));
        history.replace("/");
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
};

const getUserBE = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getUser()
      .then((res) => {
        console.log(res);
        dispatch(setUser(res.data.data));
      })
      .catch((err) => {
        console.log("실패 : ", err.response);
        alert(err.response.data.data.errors[0].message);
        history.replace("/");
      });
  };
};

const profileUpdateBE = (url) => {
  return function (dispatch, getState, { history }) {
    dispatch(profileUpdate(url));
    alert("이미지를 수정하였습니다.");
    history.replace("/");
  };
};

const logoutBE = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logout());
    deleteCookie("authorization");
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = false;
        draft.user = null;
      }),
    [PROFILE_UPDATE]: (state, action) =>
      produce(state, (draft) => {
        draft.user.profileImageUrl = action.payload.url;
      }),
  },
  initialState
);

const userActions = {
  loginActionBE,
  getUserBE,
  logoutBE,
  profileUpdateBE,
};

export { userActions };
