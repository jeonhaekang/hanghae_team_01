import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/Request";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

const USER_LOGIN = "USER_LOGIN";

const userLogin = createAction(USER_LOGIN, (user) => ({ user }));

const initialState = {
  user: null,
  result: false,
};

const idCheckBE = (id) => {
  return function (dispatch, getState, { history }) {
    console.log(id);
    apis
      .idCheck(id)
      .then((res) => {
        if (res.data.result) {
          alert("사용 가능한 아이디 입니다.");
        }
      })
      .catch((err) => {
        console.log(err.response);
        // if (!err.response.data.result) {
        //   alert("중복된 아이디 입니다.");
        // }
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
const signupActions = {
  userLogin,
  signupBE,
  idCheckBE,
};

export default handleActions({}, initialState);

export { signupActions };
