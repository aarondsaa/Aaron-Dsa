import logo from './logo.svg';
import './App.css';
import House from './components/House';
import Room from './components/rooms';
import React from 'react';
import PrettyCounter from './components/PrettyCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <House>
              <Room name="Livingroom">
              </Room>
              <Room name="Kitchen">
              </Room>
            </House>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
