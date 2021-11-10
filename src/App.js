import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [display, setDisplay] = useState(true);

  const triggerCustomEvent = () => {
    const event = new CustomEvent('myCustomEvent', { detail: 'Hello from React' });
    window.dispatchEvent(event);
  }

  const onClose = () => {
    setDisplay(false)
    setTimeout(() => {
      const event = new CustomEvent('onUnmount', { detail: './Sales' });
      window.dispatchEvent(event);
    }, 500);
  }

  return (
    <div className={`App ${display ? '' : 'App-closed'}`}>
      <button className="App-close-button" onClick={onClose}>Close</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={triggerCustomEvent}>Trigger Custom Event</button>
      </header>
    </div>
  );
}

export default App;
