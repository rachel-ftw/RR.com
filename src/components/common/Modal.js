import React, { Component } from 'react'
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

import './Modal.css'

class Modal extends Component {
  // constructor(props) {
  //   super(props);
  //   this.myRef = React.createRef();
  //   // this.targetRef = React.createRef();
  // }
  targetElement = null;

  componentDidMount() {
    // 3. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav). 
    // this.targetElement = this.targetRef.current;
    this.targetElement = document.querySelector('#modal');
 
  }

  // showTargetElement = () => {
  //   // ... some logic to show target element
    
  //   // 4. Disable body scroll
  //   disableBodyScroll(this.targetElement);
  // };

  // hideTargetElement = () => {
  //   // ... some logic to hide target element
    
  //   // 5. Re-enable body scroll
  //   enableBodyScroll(this.targetElement);
  // }

  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor 
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks();
  }

  render () {
    const { isOpen, children, onClose, imageUrl } = this.props
    const hasImage = imageUrl !== undefined ? 'has-image cover-image' : ''
    const inlineStyle = imageUrl ? { backgroundImage: `url('${imageUrl}')` } : {}

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
