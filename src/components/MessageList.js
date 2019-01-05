import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Message from './Message'

export default class MessageList extends Component {

  componentDidUpdate = () => {
    const node = ReactDom.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollheight
  }


  componentDidUpdate = () => {
    if (this.shouldScrollToBottom) {
      const node = ReactDom.findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }
  }


  render() {
    const messages = this.props.messages
    return (
      <div className="message-list">
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
      </div>
    )
  }
}

