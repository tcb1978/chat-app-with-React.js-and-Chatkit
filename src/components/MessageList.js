import React, { Component, Fragment } from 'react'

const DUMMY_DATA = [
  {
      senderId: 'perborgen',
      text: 'Hey, how is it going?'
  },
  {
      senderId: 'janedoe',
      text: 'Great! How about you?'
  },
  {
      senderId: 'perborgen',
      text: 'Good to hear! I am great as well'
  }
]

export default class MessageList extends Component {
  render() {
    return (
      <Fragment>
        {
          DUMMY_DATA.map((message, index) => {
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

