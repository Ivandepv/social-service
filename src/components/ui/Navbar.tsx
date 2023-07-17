import { Link, NavLink } from 'react-router-dom';

import "./Navbar.css"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <Link 
                    className="nav-item nav-link" 
                    to="/home"
                    >
                        {/* <img className="logo" src={logo}></img> */}
                        Sobre Nosotros
                    </Link>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/programas-sociales"
                    >
                        Programas
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/impacto-social"
                    >
                        Impacto
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/contacto"
                    >
                        Contacto
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/Donaciones"
                    >
                        Donaciones
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
