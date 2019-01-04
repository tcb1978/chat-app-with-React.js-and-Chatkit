import React, { Component } from 'react'
import Chat from './containers/Chat'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <main>
          <Chat/>
        </main>
      </div>
    );
  }
}

export default App;
