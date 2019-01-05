import React, { Component } from 'react'

export default class SendMessageForm extends Component {

  state = {
    message: ''
  }

  onHandleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
  }

  render() {
    return (
      <form
        className="send-message-form"
        onSubmit={this.handleSubmit}
      >
        <input
          name="message"
          onChange={this.onHandleChange}
          placeholder="Type your message and hit ENTER"
          value={this.state.message}
          type="text"
        />
      </form>
    )
  }
}

