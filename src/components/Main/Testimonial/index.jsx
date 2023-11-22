import "./index.scss"
import React from 'react'

function Testimonial() {
  return (
    <section className="testimonial">
        <div className="testimonial__container">
            <div className="testimonial__container__text">
                <p>"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</p>
                <div className="testimonial__container__text__author">
                    <img src="https://dummyimage.com/40x40/ced4da/6c757d" alt="" />
                    <span> Tom Ato <span className="testimonial__container__text__author__slash">/</span> CEO, Pomodoro </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial