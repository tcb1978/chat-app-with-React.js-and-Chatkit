import React, { Component, Fragment } from 'react'
import Message from './Message'

export default class MessageList extends Component {
  render() {
    const messages = this.props.messages
    return (
      <Fragment>
        {
          messages.map((message, index) => {
            return (
              <Message
                key={index}
                username={message.senderId}
                text={message.text}
              />
            )
          })
        }
      </Fragment>
    )
  }
}

