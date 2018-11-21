import React, { Component } from 'react'

import './Modal.css'

class Modal extends Component {

  render() {
    const { isOpen, children, onClose} = this.props
    return (
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
  }
}

export default Modal
