import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

import "./Css/AddGoalForm.css"

export const AddGoalForm = (props) => {
    const [load,setLoad]=useState(false);

    const closeForm = () => {
        props.setOpenBackDrop(false);
        setLoad(false);
    }

    const handleSubmit=(e)=>{

        e.preventDefault();
        setLoad(true);
        setTimeout(()=>{
            closeForm();
        },2000)

    }


    return (
        <div className="form-container">
            <form method="get" onSubmit={handleSubmit} className='user-form'>
                <h3>🚀Set Your Sprint🎯</h3>

                <div className="container-fluid">
                    <TextField id="standard-basic" color='secondary' label="🎯Sprint Title" variant="standard" fullWidth />
                </div>
                <br />
                <div className="container-fluid">
                    <TextField
                        id="filled-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue="What You Will Do In This Sprint ?"
                        variant="filled"
                        fullWidth
                        color='secondary'
                    />

                </div>
                <br />
                <FormControl required sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-required-label">Streak</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        // value={age}
                        label="No of Days"
                        // onChange={handleChange}
                        color='secondary'
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                
                {load
                    ?
                    (<LoadingButton loading 
                     sx={{position:"absolute",bottom:"10px",right:"10px"}}
                    variant="outlined">Submit</LoadingButton>)
                    :
                    (<Button 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    type='submit'
                    
                    sx={{position:"absolute",bottom:"10px",right:"10px"}}
                    >
                        Send
                    </Button>)}
                
            </form>

            <CloseIcon
                color='secondary'
                onClick={closeForm}
                sx={{
                    position: "absolute;",
                    top: "10px",
                    right: "10px",
                    fontSize: "28px",
                    cursor: "pointer"
                }} />

        </div>
    )
}
