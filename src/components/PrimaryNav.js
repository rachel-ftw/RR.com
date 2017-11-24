import React from 'react'

const style = {
  navContainer: {
    padding: '10px 30px',
    minHeight: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  rr : {
    margin: 0,
    padding: '6px 0 0 6px',
    minWidth: '30px',
    minHeight: '30px',
    fontFamily: 'Permanent Marker, cursive',
    border: 'solid 2px black',
  }
}

const PrimaryNav = () => (
  <div style={style.navContainer}>
    <div style={style.rr}>RR</div>
  </div>
)

export default PrimaryNav
