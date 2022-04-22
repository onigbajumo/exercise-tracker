import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'



const Navbar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark navbr-expand-lg">
            <Link to="/" className="navbar-brand">Exercise Tracker</Link>
            <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/">Exercise</Link>
                </li>
                    <li className="navbar-item">
                        <Link to="/create">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user">Create User</Link>
                    </li>

                </ul>
            </div>
        </nav>
    
    )
}

export default Navbar