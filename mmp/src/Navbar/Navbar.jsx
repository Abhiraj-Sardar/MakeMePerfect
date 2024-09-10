import * as React from "react";
import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import LockIcon from '@mui/icons-material/Lock';
import CodeIcon from '@mui/icons-material/Code';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import './Css/Navbar.css';
import { Backdrop } from "@mui/material";
import { AddGoalForm } from "../UserForm/AddGoalForm";
import { DeleteGoalForm } from "../UserForm/DeleteGoalForm";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openBackDrop, setOpenBackDrop] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [option,setOption]=useState(1); //if 1 then open addSprint if 2 then open DeleteSprint
    const [btn,setBtn]=useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const disableBtn = ()=>{


        const lock = localStorage.getItem("lock");

        if(lock===null){
            localStorage.setItem("lock",'false');
        }else{

            if(lock==='false'){
                setBtn(true)
                localStorage.setItem("lock",'true');
            }
            else{
                setBtn(false)
                localStorage.setItem("lock",'false');
            }
        }

    }

    const openForm = (e) => {
        e.preventDefault();
        setOption(1);
        setOpenBackDrop(true);
        
    }

    const openDeleteForm=(e)=>{
        e.preventDefault();
        setOption(2);
        setOpenBackDrop(true);
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <Button
                        href="/"
                        className="nav-links"
                        onClick={toggleMenu}
                        variant="outlined"
                        sx={{ color: "#fff", borderColor: "var(--secondary-color)", fontFamily: "var(--font)", fontSize: "20px", letterSpacing: "5px" }}
                    >
                        🚀Make Me Perfect
                    </Button>

                </a>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Button
                            href="/about"
                            className="nav-links"
                            onClick={openForm}
                            variant="outlined"
                            disabled={btn}
                            startIcon={<AddIcon />}
                            sx={{ color: "#fff", backgroundColor: "var(--secondary-color);", borderColor: "var(--secondary-color)", fontFamily: "var(--font)", fontSize: "16px", letterSpacing: "2px" }}
                        >
                            Add Sprint
                        </Button>
                    </li>
                    <li className="nav-item">

                        <Button
                            className="nav-links"
                            onClick={disableBtn}
                            variant="outlined"
                            disabled={false}
                            startIcon={<LockIcon />}
                            sx={{ color: "#fff", backgroundColor: "var(--secondary-color);", borderColor: "var(--secondary-color)", fontFamily: "var(--font)", fontSize: "16px", letterSpacing: "2px" }}
                        >
                            Lock Sprint
                        </Button>
                    </li>
                    <li className="nav-item">
                        <Button
                            href="/ComingSoon"
                            // disabled={true}
                            className="nav-links"
                            onClick={toggleMenu}
                            variant="outlined"
                            disabled={btn}
                            startIcon={<DeleteIcon />}
                            onClick={openDeleteForm}
                            sx={{ color: "#fff", backgroundColor: "var(--secondary-color);", borderColor: "var(--secondary-color)", fontFamily: "var(--font)", fontSize: "16px", letterSpacing: "2px" }}
                        >
                            Delete Sprint
                        </Button>
                    </li>
                    <li className="nav-item">
                        <Button
                            href="/dev"
                            className="nav-links"
                            onClick={toggleMenu}
                            variant="outlined"
                            startIcon={<CodeIcon />}
                            sx={{ color: "#fff", backgroundColor: "var(--secondary-color);", borderColor: "var(--secondary-color)", fontFamily: "var(--font)", fontSize: "16px", letterSpacing: "2px" }}
                        >
                            Developer Info
                        </Button>
                    </li>
                </ul>

                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={openBackDrop}
                //
                >
                    {
                        submit 
                        ? 
                        (<Box sx={{ width: '100%', position: 'absolute', top: "0" }}>
                            <LinearProgress />
                        </Box>)
                        :
                        (<p></p>)
                    }

                    {
                        option==1
                        ?(<AddGoalForm
                            setOpenBackDrop={setOpenBackDrop}
                            setSubmit={setSubmit}
                        />)
                        :(<DeleteGoalForm
                            setOpenBackDrop={setOpenBackDrop}
                            setSubmit={setSubmit}
                            />)
                    }
                    
                </Backdrop>

            </div>
        </nav>
    );
};

export default Navbar;
