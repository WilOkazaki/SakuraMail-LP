import React from 'react'
import about from "../about.png"
import '../App.css'

export default function AboutUs() {
  return (
    <div>
        <section className=" py-10 px-5 md:mt-20">
            <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:items-center lg:gap-10">
                <article>
                    <img className='imgMove' src={about} alt="" />
                </article>

                <article>
                    <h1 className="font-bold text-6xl mb-5 mt-10 md:mt-0">
                    QUIENES SOMOS?
                    </h1>
                    <p >
                    Somos un grupo de personas sin fines de lucro, amantes del anime y manga japonés, te ofrecemos una galería de imágenes tipo portada de manga para que puedas disfrutar de tus mejores personajes, a futuro nuestra web, podrá contar con muchas más opciones como descargas y links directos de los mangas para su lectura, muchas gracias por preferirnos.
                    </p>
                </article>
            </div>
      </section>
    </div>
  )
}
