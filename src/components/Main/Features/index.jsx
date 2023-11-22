import React from 'react'
import "./index.scss"
import FeaturesCard from './FeaturesCard'

function Features() {
  return (
    <section className='features'>
        <div className="features__left">
          <h2>A better way to start building.</h2>
        </div>
        <div className="features__right">
          <FeaturesCard 
          icon = "fa-timeline"
          header = "Featured title"
          text = "Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
          />
          <FeaturesCard 
          icon = "fa-building"
          header = "Featured title"
          text = "Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
          />
          <FeaturesCard 
          icon = "fa-toggle-off"
          header = "Featured title"
          text = "Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
          />
          <FeaturesCard 
          icon = "fa-toggle-off"
          header = "Featured title"
          text = "Paragraph of text beneath the heading to explain the heading. Here is just a bit more text."
          />
        </div>
    </section>
  )
}

export default Features