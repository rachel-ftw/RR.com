import React, { Component } from 'react'

class ContactForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "name",
      email: "email",
      phone: "phone",
      website: "website",
      details: "What kind of project is it? Supply some details including budget, timeline, and any other details.",
    }
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('do something with your form data')
    console.log(this.state)
  }

  render() {
    return (
      <form action="https://formspree.io/rachel@rachelralston.com"
      method="POST" encType="multipart/form-data">
        <input
          className="contact-input-text"
          type="text"
          name="names"
          placeholder={this.state.names}
          onChange={(e) => this.handleChange(e)} /><br />
        <input
          className="contact-input-text"
          type="email"
          name="email"
          placeholder={this.state.email}
          onChange={(e) => this.handleChange(e)} /><br />
        <input
          className="contact-input-text"
          type="text"
          name="phone"
          placeholder={this.state.phone}
          onChange={(e) => this.handleChange(e)} /><br />
        <input
          className="contact-input-text"
          type="text"
          name="website"
          placeholder={this.state.website}
          onChange={(e) => this.handleChange(e)} /><br />
        <textarea
          name="details"
          placeholder={this.state.details}
          onChange={(e) => this.handleChange(e)} /><br />

        <input type="hidden" name="_replyto" value="rachel@rachelralston.com" />
        <input type="hidden" name="_subject" value="RR.com: Contact form submitted"/>
        <input type="hidden" name="_next" value="/"/>
        <input type="hidden" name="_gotcha" value=""/>
        <input type="submit" value="send" />
      </form>
    )
  }
}

////// HANDLE SUBMIT REACT WAY TODO
// event.preventDefault()
// console.log('do something with your form data')
// // console.log(this.state)
// let headers = new Headers();
// let form = {
//
// }
// let url = 'https://formspree.io/rachel@rachelralston.com'
// let submitInfo = {
//   method='POST',
//   headers,
//   credentials: 'omit',
//   body: form
// }
// fetch(url, submitInfo)

export default ContactForm
