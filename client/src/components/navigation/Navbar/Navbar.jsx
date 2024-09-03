import React from "react";
import "./styles.css";
const Navbar = ({ toggle }) => {
    return (
        <>
            <div className="navbar">
                <h3>React-Redux BoilerPlate</h3>
                <div><button onClick={ toggle } className="toggle-btn">Menu</button></div>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>
        </>
    );
};

export default Navbar;
