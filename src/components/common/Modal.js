import React from 'react'

import './Modal.css'

const Modal = ({ isOpen, children, onClose, imageUrl }) => {
  const hasImage = imageUrl !== undefined ? 'has-image cover-image' : ''
  const inlineStyle = imageUrl ? { backgroundImage: `url('${imageUrl}')` } : {}

  return (
    isOpen ? (
      <div className="modal-backdrop">
        <div className="modal-window">
          <div 
            className={`modal-header ${hasImage}`}
            style={inlineStyle}>
            <div onClick={onClose} className="modal-header-close-icon">
              <span>X</span>
            </div>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    ) : null
  )
}

export default Modal
