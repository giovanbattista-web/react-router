import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='content, text'>
                    <li>
                        <NavLink to="/">Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/chisiamo">Chi Siamo</NavLink>
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
