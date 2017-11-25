import React, { Component } from 'react'

class ContactForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "name",
      email: "email",
      phone: "phone",
      website: "website",
      details: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
    console.log(this.state.details)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('do something with your form data')
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="names" value={this.state.names} onChange={this.handleChange}/><br />
        <input name="email" value={this.state.email} onChange={this.handleChange}/><br />
        <input name="phone" value={this.state.phone} onChange={this.handleChange}/><br />
        <input name="website" value={this.state.website} onChange={this.handleChange}/><br />
        <textarea name="details" value={this.state.details} onChange={this.handleChange}/><br />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default ContactForm
