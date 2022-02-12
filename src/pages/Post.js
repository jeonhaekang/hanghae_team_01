import React from "react";
import {
  button,
  layout,
  text,
  textfiled,
  icon,
  select,
} from "../shared/material";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Tag from "../components/Tag";

const Post = (props) => {
  const [title, setTitle] = React.useState(""); // 제목 데이터
  const [contents, setContents] = React.useState(""); // 컨텐츠 데이터
  const [language, setLanguage] = React.useState("js"); // 언어 데이터

  const con = contents.split("``");

  const contentsRef = React.useRef(null);

  const setCode = () => { // 드래그한 부분 코드로 변환
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

  return (
    <layout.Container
      sx={{
        borderLeft: "1px solid #E7EBF0",
        borderRight: "1px solid #E7EBF0",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <layout.Box sx={{ paddingTop: "100px" }}>
        <layout.Stack spacing={3}>
          <layout.Stack direction="row">
            <icon.ErrorOutlineIcon color="error" />
            <text.Typography>ERROR REPORT</text.Typography>
          </layout.Stack>

          <textfiled.TextField
            id="outlined-password-input"
            label="ERROR TITLE"
            placeholder="제목을 입력해주세요"
            autoComplete="current-password"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textfiled.TextField
            id="outlined-textarea"
            label="ERROR CONTENT"
            placeholder="본문을 입력해주세요"
            inputRef={contentsRef}
            multiline
            onChange={(e) => {
              setContents(e.target.value);
            }}
          />
          <layout.Stack direction="row" spacing={2}>
            <button.Button onClick={setCode} variant="contained">
              CODE
            </button.Button>

            <select.FormControl sx={{ width: "200px" }}>
              <select.InputLabel id="demo-simple-select-label">
                language
              </select.InputLabel>
              <select.Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="language"
                onChange={(e) => languageSelect(e.target.value)}
              >
                <select.MenuItem value="js">javascript</select.MenuItem>
                <select.MenuItem value="java">java</select.MenuItem>
                <select.MenuItem value="python">python</select.MenuItem>
                <select.MenuItem value="css">css</select.MenuItem>
                <select.MenuItem value="html">html</select.MenuItem>
              </select.Select>
            </select.FormControl>
          </layout.Stack>

          <text.Typography>PREVIEW</text.Typography>
          <layout.Box
            sx={{
              border: "1px solid rgb(200,200,200)",
              borderRadius: "5px",
              padding: "15px",
            }}
          >
            <layout.Box component="h2">{title}</layout.Box>
            <layout.Box whiteSpace="pre-wrap" component="pre">
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
                  return <text.Typography key={i}> {el} </text.Typography>;
                }
              })}
            </layout.Box>
          </layout.Box>
          
          <button.Button variant="contained">ERROR REPORT</button.Button>
        </layout.Stack>
      </layout.Box>
    </layout.Container>
  );
};

export default Post;
