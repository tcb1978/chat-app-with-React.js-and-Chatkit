import React from 'react'

export default function RoomList(props) {
  const orderedRooms = [...props.rooms].sort((a, b) => a.id - b.id)
  return (
    <ul className="rooms-list">
      <h3>Your Rooms</h3>
      {orderedRooms.map(room => {
        const activeClass = props.roomId === room.id ? 'active' : ''
        return (
          <li className={`room ${activeClass}`} key={room.id}>
            <a
              onClick={() => props.subscribeToRoom(room.id)}
              href="#"># {room.name}</a>
          </li>
        )
      })}
    </ul>
  )
}
