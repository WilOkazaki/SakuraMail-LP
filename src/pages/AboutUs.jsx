import React from 'react'
import about from "../about.png"

export default function AboutUs() {
  return (
    <div>
        <section className="py-10 px-5 md:mt-20">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:items-center lg:gap-10">
                <article>
                    <img src={about} alt="" />
                </article>

                <article>
                    <h1 className="font-bold text-4xl mb-5 mt-10 md:mt-0">
                    Porque hemos creado esta APP?
                    </h1>
                    <p>
                    El animé resulta ser una descripción generada desde la creación, a partir de una interpretación del mundo, además es objeto de una reinterpretación que lleva hacia una ulterior representación subjetiva por parte de cada aficionado.
                    </p>
                </article>
            </div>
      </section>
    </div>
  )
}
