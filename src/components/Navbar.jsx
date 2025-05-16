import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='content'>
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
        </>
    )
};

export default Navbar;
