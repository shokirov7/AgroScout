import React from 'react'
import './Title.scss'

function Title({title1, title2}) {
  return (
    <div className='title_component'>
      <h1 className="title_big">{title1}</h1>
      <h4 className="title_small">{title2}</h4>
    </div>
  )
}

export default Title
