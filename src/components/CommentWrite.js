import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { commentActions } from "../redux/modules/comment";

const CommentWrite = (props) => {
  const { postId } = props;
  const dispatch = useDispatch();
  const contentsRef = React.useRef(null);
  const [contents, setContents] = React.useState(""); // 컨텐츠 데이터
  const [language, setLanguage] = React.useState("js"); // 언어 데이터

  const setCode = () => {
    // 드래그한 부분 코드로 변환
    const start = contentsRef.current.selectionStart; // 드래그 부분 시작인덱스
    const end = contentsRef.current.selectionEnd; // 드래그 부분 종료 인덱스

    const startText = contentsRef.current.value.substring(0, start); // 드래그 영역 앞부분
    const targetText = contentsRef.current.value.substring(start, end); // 드래그 영역
    const endText = contentsRef.current.value.substring(end); // 드래그 영역 뒷부분

    const result = startText + "``" + targetText + "``" + endText;
    // 드래그 영역 앞뒤로 ``추가

    setContents(result);
    contentsRef.current.value = result;
    // textArea value변경
  };

  const languageSelect = (e) => {
    setLanguage(e);
  };

  const setComment = () => {
    if (contents === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    const comment = {
      postId: postId,
      commentContents: contents,
    };

    dispatch(commentActions.setCommentBE(comment));
    alert("답변을 등록하였습니다.");
    setContents("");
    contentsRef.current.value = "";
  };

  return (
    <React.Fragment>
      <TextField
        id="outlined-textarea"
        label="ANSWER"
        placeholder="피드백을 입력해주세요"
        inputRef={contentsRef}
        multiline
        onChange={(e) => {
          setContents(e.target.value);
        }}
      />
      <Stack direction="row" spacing={2}>
        <Button onClick={setCode} variant="contained">
          CODE
        </Button>
      </Stack>
      <Button onClick={setComment} variant="contained">
        ANSWER
      </Button>
    </React.Fragment>
  );
};

export default CommentWrite;
