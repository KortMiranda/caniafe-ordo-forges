import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
           <nav className="navbar">
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
            </nav>
        
    );
}

export default NavBar;