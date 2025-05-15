import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className='content-header'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Homepage</NavLink>
                        </li>
                        <li>
                            <NavLink to="/chisiamo">ChiSiamo</NavLink>
                        </li>
                        <li>
                            <NavLink to="/elenco">Elenco</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
};

export default Navbar;
