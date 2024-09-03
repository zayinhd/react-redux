import React from 'react'
import "./styles.css";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div className={ `sidebar ${isOpen ? 'open' : ''}` }>
            <button onClick={ toggle }>Close</button>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Sidebar;