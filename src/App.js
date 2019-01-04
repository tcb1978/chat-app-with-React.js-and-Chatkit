import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import './App.css';

import { tokenUrl, instanceLocator } from './config'

class App extends Component {

  state = {
   messages: []
  }

  componentDidMount = () => {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'tcb1978',
      tokenProvider: new Chatkit.TokenProvider({          url: tokenUrl
      })
    })

    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 24902028,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
        }
      }
    })
  })
}

  render() {
    return (
      <div className="App">
        <MessageList/>
        <SendMessageForm/>
        <RoomList/>
        <NewRoomForm/>
      </div>
    );
  }
}

export default App;
