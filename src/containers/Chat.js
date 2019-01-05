import React, {Component} from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from '../components/MessageList'
import SendMessageForm from '../components/SendMessageForm'
import RoomList from '../components/RoomList'
import NewRoomForm from '../components/NewRoomForm'

import { tokenUrl, instanceLocator } from '../config'

class Chat extends Component {

  state = {
    roomId: null,
    messages: [],
    joinableRooms: '',
    joinedRooms: ''
  }

  componentDidMount = () => {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'tcb1978',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()
      })
      .catch(err => console.log('error on connecting: ', err))
  }

  getRooms = () => {
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms: ', err))
  }

  subscribeToRoom = (roomId) => {
    //clear out our messages
    this.setState({messages: []})
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onNewMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
    .then(room => {
      this.setState({
          roomId: room.id
      })
      this.getRooms()
    })
    .catch(err => console.log('error on subscribing to room: ', err))
  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }

  createRoom = (roomName) => {
    this.currentUser.createRoom({
      name: roomName
    })
    .then(room => this.subscribeToRoom(room.id))
    .catch(err => console.log('error eith createRoom: ', err))
  }

  render() {
    return (
      <section className="ChatKit">
        <RoomList
        roomId={this.state.roomId}
        rooms={
          [...this.state.joinableRooms, ...this.state.joinedRooms]
        }
        subscribeToRoom={this.subscribeToRoom}/>
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage}/>
        <NewRoomForm createRoom={this.createRoom}/>
      </section>
    );
  }
}

export default Chat;