import React from 'react'
import { NavLink } from 'react-router-dom'
import hero4 from '../hero4.png'
import '../App.css'



export default function Error() {
 

  return (
    <div>
        <h1 className="font-bold text-6xl mb-5 mt-10 md:mt-0" >Error de Página</h1>
        <NavLink to={"/"}>Regresa a la página de inicio</NavLink>
        <article className='error'>
            <img className='imgMove' src={hero4} alt="" />
        </article>

    </div>
  )
}
