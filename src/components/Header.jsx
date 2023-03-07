import React from 'react'
import  '../App.css'
import Button from './Button'
import logo from '../logo.png'
import { NavLink } from 'react-router-dom'
import AuthContext from '../context/auth'
import { useContext } from 'react'

export default function Header() {

    const { user } = useContext(AuthContext)
    
  return (
    <div>
        <header className='header'>
            <div className='logo'>
                <NavLink to={"/"}>
                    <a href=''><img src={logo} alt="" /></a>
                </NavLink>
            </div>
        
        <nav className='nav'>
            <ul>
                <li><NavLink to={"/about-us"}>Acerca de Nosotros</NavLink></li>
                <li><NavLink to={"/contact-us"}>Contacto</NavLink></li>
            </ul>
        </nav>

        <Button />
        </header>
    </div>
  )
}
