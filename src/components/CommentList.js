import React from "react";
import { layout, button} from "../shared/material";


const CommentList = (props) => {
    return (
        <React.Fragment>
            <layout.Box sx={{ display: "flex", justifyContent:"center", marginTop:"30px",}}>
                <layout.Box
                    sx={{ width: 1000, height: 50, border: '3px solid #E7EBF0', textAlign: 'center', paddingTop:'5px'}}>
                        댓글 내용
                    <button.Button variant="contained" sx={{marginLeft:'700px'}}>삭제</button.Button>
                </layout.Box>
          </layout.Box>
          <layout.Box sx={{ display: "flex", justifyContent:"center", marginTop:"10px",}}>
                <layout.Box
                    sx={{ width: 1000, height: 50, border: '3px solid #E7EBF0', textAlign: 'center',}}>
                        댓글 내용
                    <button.Button variant="contained" sx={{marginLeft:'700px'}}>삭제</button.Button>
                </layout.Box>
          </layout.Box>
          <layout.Box sx={{ display: "flex", justifyContent:"center", marginTop:"10px",}}>
                <layout.Box
                    sx={{ width: 1000, height: 50, border: '3px solid #E7EBF0', textAlign: 'center',}}>
                        댓글 내용
                    <button.Button variant="contained" sx={{marginLeft:'700px'}}>삭제</button.Button>
                </layout.Box>
          </layout.Box>
        </React.Fragment>
    );
}

export default CommentList;