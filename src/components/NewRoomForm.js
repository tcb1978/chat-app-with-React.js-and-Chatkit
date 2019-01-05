import React, { Component } from 'react'

export default class NewRoomForm extends Component {

  state = {
    roomName: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name] : value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createRoom(this.state.roomName)
    this.setState({
      roomName: ''
    })
  }
  render() {
    return (
      <div className="new-room-form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="roomName"
            onChange={this.handleChange}
            placeholder="NewRoomForm"
            type="text"
            required
            value={this.state.roomName} />
          <button id="create-room-btn" type="submit">+</button>
        </form>
      </div>
    )
  }
}
