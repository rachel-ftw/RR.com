import React from 'react'

const BlurbCard = ({ post }) => {
  const { title } = post

  return (
    <h3>{title}</h3>
  )
}

export default BlurbCard