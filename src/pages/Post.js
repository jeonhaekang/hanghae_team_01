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

const Post = (props) => {
  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");
  const [language, setLanguage] = React.useState("js");

  const con = contents.split("``");

  const contentsRef = React.useRef(null);
  const setCode = () => {
    const start = contentsRef.current.selectionStart;
    const end = contentsRef.current.selectionEnd;

    const startText = contentsRef.current.value.substring(0, start);
    const targetText = contentsRef.current.value.substring(start, end);
    const endText = contentsRef.current.value.substring(end);

    const result = startText + "``" + targetText + "``" + endText;
    setContents(result);
    contentsRef.current.value = result;
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
                      placeholder="Please enter JS code."
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
