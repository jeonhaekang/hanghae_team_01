
import { apis } from "../../shared/imageApis";
import { userActions } from "./user";

const uploadImageBE = (file) => {
  return function (dispatch, getState, { history }) {
    let image = new FormData();
    image.append("images", file);

    apis
      .uploadImage(image)
      .then((res) => {
        const url = res.data.data.profileImageUrl;
        dispatch(userActions.profileUpdateBE(url));
        console.log(res.data.data.profileImageUrl);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const imageActions = {
  uploadImageBE,
};

export { imageActions };
