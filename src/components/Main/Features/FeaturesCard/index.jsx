import "./index.scss"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimeline } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'

library.add(faTimeline, faBuilding, faToggleOff)

function FeaturesCard({icon,header,text}) {
  return (
    <div className='featuresCard' >
      <div className="featuresCard__icon">
        <FontAwesomeIcon icon={ icon } />
      </div>
      <h2>{ header }</h2>
      <p>{ text }</p>
    </div>
  )
}

export default FeaturesCard