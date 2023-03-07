import React from 'react'
import Button from './Button'
import hero from '../hero.png'
import '../App.css'


export default function Hero() {
  return (
    <div>
        <section className='hero'>
            <div className='overlay'>
               <article className='fondo'>
                    <h1 className='font-bold'>SAKURA MAIL</h1>
                    <h2 className='font-bold'>Tu Repositorio de Manga</h2>
                    <div className='buttonHero'>
                        <Button />
                    </div>
               </article>
                 
               <article>
                    <img className='imgMove' src={hero} alt="" />
               </article>
              
               
            </div>
            
        </section>
    </div>
  )
}
