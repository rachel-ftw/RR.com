import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {

  render() {
    const { isOpen, children, onClose} = this.props
    return (
      isOpen ? (
        <div className="modal-backdrop">
          <div className="modal-window">
            {children}
            <div className="modal-footer">
              <button onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null
    )
  }
}

export default Modal
