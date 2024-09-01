import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import { COLLECTION_ID, databases, DB_ID} from '../Database/appwrite';
import "./Css/DeleteGoalForm.css"

export const DeleteGoalForm = (props) => {
    
    const [loading, setLoading] = useState(false);
    const [checkId,setCheckId]=useState('');
    const [deleteBtn,setDeleteBtn]=useState(true);

    const closeForm = () => {
        props.setOpenBackDrop(false);
        setLoading(false);
        props.setSubmit(false);
    }

    async function deleteDocument(id) {
        try{
            await databases.deleteDocument(DB_ID, COLLECTION_ID, id);
        }catch{
            alert("Document Does not Exist..");
        }
        
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        
        setLoading(true);
        props.setSubmit(true);

        deleteDocument(checkId);

        setTimeout(() => {
            closeForm();
        }, 2000)

    }

    const validateId=(e)=>{

        setCheckId(e.target.value);
        if((checkId.length+1)===20){
            setDeleteBtn(false);
        }
        else{
            setDeleteBtn(true);
        }
        
        
    }

    return (
        <div className="dl-form-container">
            <h3>🗑️ Delete Goal</h3>
            <div className="dl-img-container">
                <div className="dl-img">

                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="dl-inp">

                    <TextField id="standard-basic"
                        label="Enter Sprint Id"
                        name="sid"
                        type='text'
                        sx={{ width: "90%", outline: "none" }}
                        onChange={validateId}
                        variant="outlined" />

                </div>
                
                <h1 className="dl-btn">
                    {
                        loading
                            ?
                            (
                                <LoadingButton loading loadingIndicator="Deleting.." variant="outlined">
                                    Fetch data
                                </LoadingButton>
                            )
                            :
                            (
                                <Button variant="contained"
                                    sx={{ marginRight: "1rem" }}
                                    type='submit'
                                    disabled={deleteBtn}
                                    endIcon={<DeleteIcon />}>
                                    Delete
                                </Button>
                            )
                    }

                </h1>
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
        </div >
    )
}
