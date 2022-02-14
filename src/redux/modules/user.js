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
const idCheckBE = (id) => {
  return function (dispatch, getState, { history }) {
    console.log(id);
    apis
      .idCheck(id)
      .then((res) => {
        console.log("통신 성공 : ", res.data.result);
        if (res.data.result) {
          alert("사용 가능한 아이디 입니다.");
        }
      })
      .catch((err) => {
        console.log("통신 실패 : ", err.response.data.result);
        if (!err.response.data.result) {
          alert("중복된 아이디 입니다.");
        }
      });
  };
};

const signupBE = (post) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(post)
      .then((res) => {
        console.log(res);
        alert("회원가입에 성공하였습니다.");
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

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

const actionCreators = {
  userLogin,
  userLogout,
  getUser,
  loginActionBE,
  signupBE,
  idCheckBE,
};

export { actionCreators };
