import React from 'react'

import './BlurbCard.css'

const BlurbCard = ({ post }) => {
  const { title, blurb, image, publishDate } = post
  console.log(post)
  return (
    <div className="blurb-card" onClick={() => console.log('clicked!', title)}>
      <div className="blurb-card-image" style={{ backgroundImage: `url('${image}')`}}></div>
      <div className="blurb-card-content">
        <h3>{title}</h3>
        <p>{blurb}</p>
        <div className="blurb-card-footer">
          {publishDate}
        </div>
      </div>
    </div>
  )
}

export default BlurbCard