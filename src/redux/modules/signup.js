import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/apis";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

const ID_CHECK = "ID_CHECK";

const idCheck = createAction(ID_CHECK, (state) => ({ state }));

const initialState = {
  state: false,
};

const idCheckBE = (id) => {
  return function (dispatch, getState, { history }) {
    console.log(id);
    apis
      .idCheck(id)
      .then((res) => {
        console.log("통신 성공 : ", res);
        if (res.data.result) {
          alert("사용 가능한 아이디 입니다.");
        }
        dispatch(idCheck(true));
      })
      .catch((err) => {
        console.log("통신 실패 : ", err.response);
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
        history.replace("/login");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export default handleActions(
  {
    [ID_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.state = action.payload.state;
      }),
  },
  initialState
);

const signupActions = {
  idCheck,
  signupBE,
  idCheckBE,
};

export { signupActions };
