import React from 'react'
import Button from './Button'
import hero from '../hero.png'

export default function Hero() {
  return (
    <div>
        <section className='hero'>
            <div className='overlay'>
               <article>
                    <h1 className='font-bold'>SAKURA MAIL</h1>
                    <h2 className='font-bold'>Tu Repositorio de Anime</h2>
                    <div>
                        <Button />
                    </div>
                   
               </article>

               <article>
                    <img src={hero} alt="" />
               </article>
              
               
            </div>
            
        </section>
    </div>
  )
}
