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
    const { isOpen, children, onClose } = this.props
    return (
      isOpen ? (
        <div id="modal" className="modal--backdrop">
          <div className="modal--window">
            <div className="modal--header flex-row">
              <div onClick={onClose} className="modal--header-close-icon">
                <span>&times;</span>
              </div>
            </div>
            <div className="modal--body">
              {children}
            </div>
          </div>
        </div>
      ) : null
    )
  }
}

export default Modal