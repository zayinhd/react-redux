import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" >
                <Typography component={ Link } to="/">
                    Movo
                </Typography>
                <ul>
                    <li>Movies</li>
                    <li>What's New</li>
                    <li>About</li>
                </ul>
            </AppBar>
        </>
    );
};

export default Navbar;
