import React from 'react'

import './Modal.css'

const Modal = ({ isOpen, children, onClose}) => (
  isOpen ? (
    <div className="modal-backdrop">
      <div className="modal-window">
        <div className="modal-header">
          <div onClick={onClose} className="modal-header-close-icon">
            <span>Close</span>
          </div>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  ) : null
)

export default Modal
