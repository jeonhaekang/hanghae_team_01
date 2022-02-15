import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {
  IoIosHelpCircleOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { Typography, Box } from "@mui/material";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../redux/modules/post";

const Detail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.postId;
  const post_list = useSelector((state) => state.post.list);
  const post_idx = post_list.findIndex((p) => {
    return p.postId === parseInt(id);
  });
  let post = post_list[post_idx];

  const contents = post ? post.postContents.split("``") : [];

  React.useEffect(() => {
    if (post) {
      return;
    }
    dispatch(postActions.getPostBE(id));
  }, []);

  return (
    <React.Fragment>
      {post && (
        <Stack spacing={2} sx={{ paddingTop: "100px" }}>
          <Stack direction="row">
            <Typography variant="h5" color="error">
              <IoIosHelpCircleOutline />
            </Typography>
            <Typography>QUESTION</Typography>
          </Stack>
          <Box
            border="1px solid rgb(200,200,200)"
            borderRadius="5px"
            padding="15px"
          >
            <Box component="h2">{post.postTitle}</Box>
            <Box whiteSpace="pre-wrap" component="pre">
              {contents.map((el, i) => {
                if (i % 2 === 1) {
                  return (
                    <CodeEditor
                      key={i}
                      value={el}
                      language={post.postLanguage}
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
            <Box border="1px solid #E7EBF0" padding="15px">
              <Stack direction="row" spacing={1}>
                {post.postTag.map((el, i) => {
                  return <Chip key={i} size="small" label={el} />;
                })}
              </Stack>
            </Box>
          </Box>

          <Stack direction="row">
            <Typography variant="h5" color="green">
              <IoMdInformationCircleOutline />
            </Typography>
            <Typography>ANSWER</Typography>
          </Stack>
          <CommentWrite {...post} postId={id} />

          <Box>
            <CommentList postId={id} />
          </Box>
        </Stack>
      )}
    </React.Fragment>
  );
};

export default Detail;
