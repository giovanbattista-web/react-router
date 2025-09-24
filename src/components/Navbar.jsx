import { NavLink } from 'react-router-dom';

const links = [
    {
        path: "/",
        label: "Homepage",
    },
    {
        path: "/about",
        label: "About Us",
    },
    {
        path: "/products",
        label: "Products",
    },
]

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className="list-unstyled d-flex">
                    {links.map((link, index) => (
                        <li className='list-item' key={index}>
                            <NavLink to={link.path}>{link.label}</NavLink>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    )
};

export default Navbar;
