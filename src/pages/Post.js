import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  TextField,
  Chip,
} from "@mui/material";
import { BiErrorCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { postActions } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState(""); // 제목 데이터
  const [contents, setContents] = React.useState(""); // 컨텐츠 데이터
  const [language, setLanguage] = React.useState("js"); // 언어 데이터
  const [tag, setTag] = React.useState([]);

  const con = contents.split("``");

  const contentsRef = React.useRef(null);

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

  const setPost = () => {
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    } else if (contents === "") {
      alert("본문을 입력해주세요.");
      return;
    }
    const post = {
      postTitle: title,
      postContents: contents,
      postLanguage: language,
      postTag: tag,
      postProblem: false,
    };
    dispatch(postActions.setPostsBE(post));
  }; // 게시물 등록

  const languageSelect = (e) => {
    setLanguage(e);
  };

  const putTag = (e) => {
    if (e.key === "Enter") {
      setTag([...tag, e.target.value]);
      e.target.value = "";
    }
  }; // 태그 입력

  const delTag = (i) => {
    setTag(
      tag.filter((el, idx) => {
        if (idx === i) {
          return false;
        }
        return true;
      })
    );
  }; // 태그 삭제

  return (
    <Container
      sx={{
        borderLeft: "1px solid #E7EBF0",
        borderRight: "1px solid #E7EBF0",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Stack spacing={3} sx={{ paddingTop: "100px" }}>
        <Stack direction="row">
          <Typography variant="h5" color="error">
            <BiErrorCircle />
          </Typography>

          <Typography>ERROR REPORT</Typography>
        </Stack>

        <TextField
          id="outlined-password-input"
          label="ERROR TITLE"
          placeholder="제목을 입력해주세요"
          autoComplete="current-password"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <TextField
          id="outlined-textarea"
          label="ERROR CONTENT"
          placeholder="본문을 입력해주세요"
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
          <FormControl sx={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="language"
              onChange={(e) => languageSelect(e.target.value)}
            >
              <MenuItem value="js">javascript</MenuItem>
              <MenuItem value="java">java</MenuItem>
              <MenuItem value="python">python</MenuItem>
              <MenuItem value="css">css</MenuItem>
              <MenuItem value="html">html</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Typography>PREVIEW</Typography>
        <Box
          sx={{
            border: "1px solid rgb(200,200,200)",
            borderRadius: "5px",
            padding: "15px",
          }}
        >
          <Box component="h2">{title}</Box>
          <Box whiteSpace="pre-wrap" component="pre">
            {con.map((el, i) => {
              if (i % 2 === 1) {
                return (
                  <CodeEditor
                    key={i}
                    value={el}
                    language={language}
                    placeholder="Please enter code."
                    padding={15}
                    style={{
                      fontSize: 12,
                      backgroundColor: "#f5f5f5",
                      fontFamily:
                        "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                    }}
                  ></CodeEditor>
                );
              } else {
                return <Typography key={i}> {el} </Typography>;
              }
            })}
          </Box>
        </Box>

        <div className="tagWrap">
          <Stack direction="row" display="inline-block">
            {tag.map((el, i) => {
              return (
                <Chip
                  key={i}
                  size="small"
                  label={el}
                  onDelete={() => {
                    delTag(i);
                  }}
                />
              );
            })}
            <input
              onKeyPress={(e) => {
                putTag(e);
              }}
              placeholder="태그를 입력해주세요"
              className="tagInput"
            ></input>
          </Stack>
        </div>

        <Button onClick={setPost} variant="contained">
          ERROR REPORT
        </Button>
      </Stack>
    </Container>
  );
};

export default Post;
