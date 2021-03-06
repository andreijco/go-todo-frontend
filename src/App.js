import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
    //connect();
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message");
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }));
      console.log(this.state);
    });
  }

  send(event) {
    // console.log("hello");
    // sendMsg("hello msg");
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        {/* <button onClick={this.send}>Hit</button>  */}
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
