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

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openBackDrop, setOpenBackDrop] = useState(false);
    const [submit, setSubmit] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openForm = (e) => {
        e.preventDefault();
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
                            startIcon={<AddIcon />}
                            sx={{ color: "#fff", backgroundColor: "var(--secondary-color);", borderColor: "var(--secondary-color)", fontFamily: "var(--font)", fontSize: "16px", letterSpacing: "2px" }}
                        >
                            Add Sprint
                        </Button>
                    </li>
                    <li className="nav-item">

                        <Button
                            href="/about"
                            className="nav-links"
                            onClick={toggleMenu}
                            variant="outlined"
                            startIcon={<LockIcon />}
                            sx={{ color: "#fff", backgroundColor: "var(--secondary-color);", borderColor: "var(--secondary-color)", fontFamily: "var(--font)", fontSize: "16px", letterSpacing: "2px" }}
                        >
                            Lock Sprint
                        </Button>
                    </li>
                    <li className="nav-item">
                        <Button
                            href="/about"
                            className="nav-links"
                            onClick={toggleMenu}
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            sx={{ color: "#fff", backgroundColor: "var(--secondary-color);", borderColor: "var(--secondary-color)", fontFamily: "var(--font)", fontSize: "16px", letterSpacing: "2px" }}
                        >
                            Delete Sprint
                        </Button>
                    </li>
                    <li className="nav-item">
                        <Button
                            href="/about"
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


                    <AddGoalForm
                        setOpenBackDrop={setOpenBackDrop}
                        setSubmit={setSubmit}
                    />
                </Backdrop>

            </div>
        </nav>
    );
};

export default Navbar;
