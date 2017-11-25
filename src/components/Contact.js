import React, { Component } from 'react'

import Modal from './Modal'
import ContactForm from './ContactForm'

import './Button.css'
import './Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { modalIsOpen: false }
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  render() {
    return (
      <div>
        <div className="container flex-column contact">
          <h1 className="header secondary">Want to work together?</h1>
          <p>I&#39;m currently accepting new projects and would love to hear about yours.</p>
          <p>Please take a few minutes to tell me about it.</p>
          <div className='btn yellow' onClick={this.toggleModal}>GET STARTED</div>
        </div>
        <Modal
          show={this.state.modalIsOpen}
          onClose={this.toggleModal}
        >
          <ContactForm />
        </Modal>
      </div>
    )
  }
}

export default Contact
