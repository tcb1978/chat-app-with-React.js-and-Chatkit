import React from 'react'

export default function Message() {
  return (
    <div className="message">
      <div>{this.props.username}</div>
      <div>{this.props.text} </div>
    </div>
  )
}
