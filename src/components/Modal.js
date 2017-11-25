import React from 'react'

// The gray background
const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#333',
  padding: 50
};

// The modal "window"
const modalStyle = {
  backgroundColor: '#333',
  color: '#fff',
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30
};

const Modal = (props) => {
  if(!props.show) {
    return null;
  }

  return (
    <div
      className="backdrop"
      style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {props.children}
          <div className="footer">
            <button onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
    </div>
  )
}

export default Modal
