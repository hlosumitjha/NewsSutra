import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

const NavBar = ({ setCategory }) => {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(true);  // State to manage collapse

    const handleCategoryClick = (category) => {
        setCategory(category);
        navigate(`/?category=${category}`);
        
        // Collapse the menu after clicking a category
        setIsCollapsed(true);
    };

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);  // Toggle the collapse state
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#000000" }}>
            <div className="container-fluid">
                <Link className="navbar-brand mx-2" to="/">
                    <img src={Logo} alt="Logo" width="40" height="30" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}  // Toggle collapse state when button is clicked
                    aria-controls="navbarSupportedContent"
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                        {["general", "world", "technology", "entertainment", "sports", "science"].map((category) => (
                            <li className="nav-item" key={category}>
                                <div className="nav-link text-light" onClick={() => handleCategoryClick(category)}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="navbar-nav mb-2 mx-5 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">About</Link> {/* Link to About Page */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
