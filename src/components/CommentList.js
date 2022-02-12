import React from "react";
import { Button, Box } from "@mui/material";

const CommentList = (props) => {
  return (
    <React.Fragment>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Box
          sx={{
            width: 1000,
            height: 50,
            border: "3px solid #E7EBF0",
            textAlign: "center",
            paddingTop: "5px",
          }}
        >
          댓글 내용
          <Button variant="contained" sx={{ marginLeft: "700px" }}>
            삭제
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Box
          sx={{
            width: 1000,
            height: 50,
            border: "3px solid #E7EBF0",
            textAlign: "center",
          }}
        >
          댓글 내용
          <Button variant="contained" sx={{ marginLeft: "700px" }}>
            삭제
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Box
          sx={{
            width: 1000,
            height: 50,
            border: "3px solid #E7EBF0",
            textAlign: "center",
          }}
        >
          댓글 내용
          <Button variant="contained" sx={{ marginLeft: "700px" }}>
            삭제
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CommentList;
