import React from 'react'
import { NavLink } from 'react-router-dom'
import hero4 from '../hero4.png'
import '../App.css'



export default function Error() {
 

  return (
    <div>
        <section  className="flex items-center flex-col justify-center h-screen">
          <h1 className="font-bold text-6xl mb-5 mt-10 md:mt-0" >Error 404</h1>
          <NavLink  
            className="py-2 px-4 rounded bg-pink-500 border border-pink-500 hover:bg-transparent transition-all duration-300"
            to={"/"}>Regresa a la página de inicio
          </NavLink>
          <article className='error'>
              <img className='imgMove' src={hero4} alt="" />
          </article>
        </section>
    </div>
  )
}
