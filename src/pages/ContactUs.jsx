import React from 'react'
import contact from "../contact.png"

export default function ContactUs() {
  return (
    <div>
        <section className="py-10 px-5">
            <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10">
                <article>
                    <h1 className="text-4xl mb-5 mt-10 font-bold">Cuentanos queremos saber tu opinión</h1>
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
                        className="block text-left mt-5 py-2 px-6 rounded-lg shadow text-white"
                    >
                        Enviar
                    </button>
                    </form>
                </article>

                <article>
                <img src={contact} alt="" />
            </article>
            </div>
      </section>
    </div>
  )
}
