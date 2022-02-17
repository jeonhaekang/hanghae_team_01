import { Stack, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apis } from "../shared/imageApis";
import { imageActions } from "../redux/modules/image";

const Upload = () => {
  const dispatch = useDispatch();
  const fileInput = React.useRef(null);

  const [preview, setPreview] = React.useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAAJFBMVEXq6urQ0NDV1dXm5ubi4uLZ2dno6OjR0dHe3t7g4ODU1NTb29vXtTPwAAACjUlEQVR4nO3c6XKCMBRAYQiLiu//vrViFLIZmmSYe3u+vyDTnGGNla4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC4+TqZFqbb2SM76N63I6rF1DBE31/PHl6+sWmIvh/OHmC2S+MS5uwB5hqef+51aGE9AZ09wlzPg2NqtPHld+Nzo43X9ixxb7RxI+lE0XSfoIRFCYsSlvgSt2lZzH0s37jwEu/HkKW4hewSy+b+sPTqKrrE/ua7MIXkEu6DadkBIrjE4D4/XYo2LriEP1dRtFMILuGFKLvVkFvCOzgel9L0x01yn1FVIj29YNKHj6oSyVOm+XImkVti9kukJt/Mt5Oq3BKBSc3EvZWx60RTCC5x9UrEx2E+K8VSCC7hXUbjF1GzXS2SQnIJ99uP6OfMfr1wCsklnOMjOgonRCSF6BLbvWKJTtB7IcIpZJfouvt6BVni3+4GQgRTSC/xuK8YxyHxhU0wRCiF/BJpkRCBFMpLREP4KXSXSITwUqgusaRCuCk0l0juEV4KxSW+htinUFNidh9EM0LsUmgpMbsLskJsUygpMbtLMkNsUugo8Zq/+izKDvFJoaLEeyLPLjsQYv8Z4SVmd1hHQryn/BSU2E3t/i49FEJRCWeOezoYQk8Jb7L/6P/xaikR+Nbjf5YoD6GkRIUQOkrUCKGiRJUQGkrMdX7tIb9EpRAKStT6/Y/8EpVCUIISlKAEJShBCUoUkz+jO1ZiBy+3RG2UsChhUcKihCWvBG9d6F4/bvnyE6e/WidFpbyJY72bujR5n9W66bMHmK3tS5xEvcapbYhGB14TQ8v3OEkK0TV83dtF0KHxMjd5n9XZowIAAAAAAAAAAAAAAAAAAAAAAAAAnOUH264aA95JfP8AAAAASUVORK5CYII="
  );

  const selectFile = () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const updateImage = () => {
    const file = fileInput.current.files[0];
    dispatch(imageActions.uploadImageBE(file));
  };

  return (
    <React.Fragment>
      <Stack spacing={3}>
        <input ref={fileInput} onChange={selectFile} type="file" />
        <Stack>
          <Typography variant="h6">PREVIEW</Typography>
          <PreviewImage src={preview} />
        </Stack>
        <Button onClick={updateImage} variant="contained">
          프로필 수정
        </Button>
      </Stack>
    </React.Fragment>
  );
};

const PreviewImage = styled("img")({
  width: "100px",
  height: "100px",
  border: "1px solid black",
  padding: "10px",
  borderRadius: "50px",
  backgroundSize: "cover",
});

export default Upload;
