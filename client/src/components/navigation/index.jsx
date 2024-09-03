import React, { useState } from "react";

import Navbar from "./Navbar/Navbar.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={ isOpen } toggle={ toggle } />
            <Navbar toggle={ toggle } />
        </>
    )

};

export default Nav;
