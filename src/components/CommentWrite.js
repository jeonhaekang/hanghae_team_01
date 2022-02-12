import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, TextField } from "@mui/material";



const CommentWrite = (props) => {
    
    const [postLanguage, setPostLanguage] = React.useState('');
    

    const handleChange = (event) => {
        setPostLanguage(event.target.value);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px", }}>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="fullWidth" id="fullWidth" />
                    </Box>
                    <Box sx={{ width: 120 }}>
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
                    </Box>
                    <Button variant="outlined">추가</Button>
            </Box>
        </React.Fragment>
    );
}

export default CommentWrite;