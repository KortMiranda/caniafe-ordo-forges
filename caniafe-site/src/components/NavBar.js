import React from 'react';
import { Link } from 'react-router-dom'
import '../css/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, Container } from 'react-bootstrap'


function NavBar(props) {
    return (
        <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            {/* <nav className="navbar"> */}
            <Nav className="mr-auto">
                <div className="nav-center">
                    <ul className="nav justify-content-center">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/store">Store</Link>
                        </li>
                        <li>
                            <Link to="/custom-order">Contact</Link>
                        </li>
                        <li>
                            <Link to=""><FontAwesomeIcon icon={faSearch}/></Link>
                        </li>
                        <li>
                            <Link to=""><FontAwesomeIcon icon={faShoppingCart}/></Link>
                        </li>
                    </ul>
                </div>
            </Nav>
            {/* </nav> */}
            </Navbar.Collapse>
        </Navbar>
        
    );
}

export default NavBar;