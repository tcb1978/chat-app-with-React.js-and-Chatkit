import React, { Component, Fragment } from 'react'

export default class MessageList extends Component {
  render() {
    const messages = this.props.messages
    return (
      <Fragment>
        {
          messages.map((message, index) => {
            return (
              <div className="message" key={index}>
                <div>{message.senderId}</div>
                <div>{message.text} </div>
              </div>
            )
          })
        }
      </Fragment>
    )
  }
}

