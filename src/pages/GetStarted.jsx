import React from 'react'
import hero4 from '../hero4.png'
import { FcGoogle } from "react-icons/fc"

export default function GetStarted() {
  return (
    <div>
        <section className='p-5 lg:grid grid-cols-2 mt-10 rounded shadow lg:p-0'>
            <article className="get__started py-10 rounded-t lg:rounded-l lg:p-10">
                <img src={hero4} alt="hero4" title='Hero4' 
                className='w-9/12 mx-auto mb-10' />
            </article>

            <article className="bg-white p-5 rounded-b lg:rounded-r lg:px-10">
                <form autoComplete='off'
                className='flex justify-center flex-col'>
                    <label htmlFor='username'className="text-gray-900 mb-1">Nombre de usuario</label>
                    <input type="text" name='username' id='username' placeholder='Ingresa tu nombre de usuario' required autoComplete='off'
                    className='mb-5 py-2 px-6 text-pink-500 tracking-wide placeholder-pink-500 border-b-2 border-gray-900'/>
                    <label htmlFor='email'className="text-gray-900 mb-1">Email</label>
                    <input type="text" name='email'id='email' placeholder='Ingresa tu dirección de correo...' required autoComplete='off'
                    className='mb-5 py-2 px-6 text-pink-500 tracking-wide placeholder-pink-500 border-b-2 border-gray-900'/>
                    <label htmlFor='password'className="text-gray-900 mb-1">Password</label>
                    <input type="password" name=''id='password' placeholder='Ingresa tu contraseña...' required autoComplete='off'
                    className='mb-5 py-2 px-6 text-pink-500 tracking-wide placeholder-pink-500 border-b-2 border-gray-900'/>
                    <div className='cta'>
                        <button className='btn' type='Submit'>Log in</button>
                    </div>
                    <div className="mt-10">
                        <p className="text-gray-900 flex items-center">
                            Log In with: <FcGoogle className="text-4xl ml-10" />
                        </p>
                     </div>
                </form>
            </article>
        </section>
    </div>
  )
}
