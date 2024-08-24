import React, { useEffect,useState } from 'react'
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Close from '@mui/icons-material/Close';
// import "./Css/Warning.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Warning = (props) => {

    const [show,setShow]=useState(props.show);

    
    
    return (
        <Box sx={{ width: 500 }}>
        <Snackbar
         open={show}
         autoHideDuration={10}
        //  onClose={handleClose}
         message="You Have Already Redeemed"

        />
      </Box>

    )
}
