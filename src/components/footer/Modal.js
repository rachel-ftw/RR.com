import React from 'react'
import '../styles/Modal.css'

const Modal = (props) => {
  if(!props.show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-window">
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
