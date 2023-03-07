import { useRef } from "react";
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import AuthContext from '../context/auth'
import { useContext } from 'react'
import "./main.css";
import logo from '../logo.png'
import Button from './Button'

function Navbar() {
    const { user } = useContext(AuthContext)
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className='logo'>
                <NavLink to={"/"}>
                    <a href=''><img src={logo} alt="" /></a>
                </NavLink>
            </div>
			<nav ref={navRef}>
                <NavLink to={"/"}><a>Inicio</a></NavLink>
                <NavLink to={"/about-us"}><a>Acerca de Nosotros</a></NavLink>
                <NavLink to={"/contact-us"}><a>Contacto</a></NavLink>
				<NavLink to={"/gallery"}><a>Galeria</a></NavLink>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;