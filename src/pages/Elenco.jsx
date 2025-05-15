import React from 'react';
import { NavLink } from 'react-router-dom';

const Elenco = () => {
    return (
        <>
            <header>
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
            <div>
                <h3>Elenco</h3>
            </div>
        </>
    )
};

export default Elenco;
