import React from 'react'


const ProjectCard = (props) => {
  const style = {
    card: {
      padding: '8px',
      margin: '5px',
      border: 'solid 2px yellow',
    },
    img: {
      maxWidth: '32vw',
      minWidth: '25vw',
      minHeight: '40vh',
      backgroundImage: `url('${props.image}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  }
  return (
    <div style={style.card}>
      <div style={style.img}></div>
      <div style={{padding: '5px 10px'}}>
        <h3 style={{textAlign: 'center', fontSize: '1.5em'}}>{props.title}</h3>
        <p>{props.blurb}</p>
      </div>
    </div>
  )
}

export default ProjectCard
