import React from 'react'
import './PrimaryNav.css'

const PrimaryNav = () => (
  <div style={styles.navContainer}>
    <div style={styles.rr}>RR</div>
  </div>
)

const styles = {
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

export default PrimaryNav
