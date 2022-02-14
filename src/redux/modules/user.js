import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/apis";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

//actions
const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

//action creators
const setUser = createAction(SET_USER, (username) => ({ username }));
const logout = createAction(LOGOUT, () => ({}));

//middleware actions
const initialState = {
  user: null,
  username: "",
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
        dispatch(setUser(id));
        history.replace("/");
      })
      .catch((err) => {
        console.log("실패 : ", err);
      });
  };
};

const logoutBE = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logout());
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.username = action.payload.username;
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = false;
      }),
  },
  initialState
);

const userActions = {
  loginActionBE,
  logoutBE,
};

export { userActions };
