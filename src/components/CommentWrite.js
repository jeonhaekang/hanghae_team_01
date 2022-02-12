import React from "react";
import { layout, button, text } from "../shared/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const CommentWrite = (props) => {
    const [postLanguage, setPostLanguage] = React.useState('');
    

    const handleChange = (event) => {
        setPostLanguage(event.target.value);
    };
    return (
        <React.Fragment>
            <layout.Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px", }}>
                    <layout.Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <text.TextField fullWidth label="fullWidth" id="fullWidth" />
                    </layout.Box>
                    <layout.Box sx={{ width: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={postLanguage}
                                label="postLanguage"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Java</MenuItem>
                                <MenuItem value={20}>javascript</MenuItem>
                                <MenuItem value={30}>Css</MenuItem>
                            </Select>
                        </FormControl>
                    </layout.Box>
                    <button.Button variant="outlined">추가</button.Button>
            </layout.Box>
        </React.Fragment>
    );
}

export default CommentWrite;