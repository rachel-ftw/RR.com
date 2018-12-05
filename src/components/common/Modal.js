import React, { Component } from 'react'
import { clearAllBodyScrollLocks } from 'body-scroll-lock'

import './Modal.css'

class Modal extends Component {
  targetElement = null

  componentDidMount() {
    this.targetElement = document.querySelector('#modal')
  }

  componentWillUnmount() {
     clearAllBodyScrollLocks()
  }

  render () {
    const { isOpen, children, onClose, images } = this.props
    const hasImage = images !== undefined ? 'has-image cover-image' : ''

    //TODO sort out carousel for array of images
    const image = Array.isArray(images) ? images[0] : images
    const inlineStyle = images ? { backgroundImage: `url('${image}')` } : {}

    return (
      isOpen ? (
        <div id="modal" className="modal-backdrop">
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
}

export default Modal
