import React from "react";
import { apis } from "../shared/imageApis";

const Upload = () => {
  const fileInput = React.useRef(null);

  const selectFile = () => {
    //const reader = new FileReader();
    const file = fileInput.current.files[0];
    console.log(file);
    console.log(file.name);

    let image = new FormData();
    image.append("image", file);

    apis
      .uploadImage(image)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <React.Fragment>
      <input ref={fileInput} onChange={selectFile} type="file" />
    </React.Fragment>
  );
};

export default Upload;
