import React from 'react'
import contact from "../contact.png"
import '../App.css'

export default function ContactUs() {
  return (
    <div>
        <section className="py-10 px-5">
            <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10">
                <article>
                    <h1 className="text-6xl mb-5 mt-10 font-bold">Cuentanos sobre ti..</h1>
                    <form name="contact-form" method="post" className="flex flex-col">
                    <input type="hidden" name="form-name" value="contact-form" />
                    <label htmlFor="name">Cual es tu nombre?</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Tu nombre"
                        required
                    />
                    <label htmlFor="email">Ingresa tu email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ingresa tu email"
                        required
                    />
                    <label htmlFor="textarea">Que quieres contarnos...?</label>
                    <textarea
                        name="message"
                        id="textarea"
                        cols="30"
                        rows="10"
                        placeholder="Cuentanos sobre ti..."
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-pink-500 py-1 px-4 rounded shadow transition-all duration-300 hover:bg-transparent hover:text-pink-500 border border-pink-500"
                    >
                        Enviar
                    </button>
                    </form>
                </article>

                <article>
                <img className='imgMove' src={contact} alt="" />
            </article>
            </div>
      </section>
    </div>
  )
}


