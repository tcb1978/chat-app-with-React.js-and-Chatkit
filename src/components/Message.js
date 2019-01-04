import React from 'react'

export default function Message(props) {
  return (
    <div className="message">
      <div>{props.username}</div>
      <div>{props.text} </div>
    </div>
  )
}
