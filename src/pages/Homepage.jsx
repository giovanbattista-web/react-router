import React from 'react';
import { NavLink } from 'react-router-dom';


const Homepage = () => {
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
                <h3>Homepage</h3>
            </div>
        </>
    )
};



export default Homepage;