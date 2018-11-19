import React from 'react'
import './Modal.css'

const Modal = ({ show, children, onClose}) => (
  show && (
    <div className="modal-backdrop">
      <div className="modal-window">
        {children}
        <div className="footer">
          <button onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  ) 
)

export default Modal
