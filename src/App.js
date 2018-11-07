import React, { Component } from 'react';
import './App.css';
import Cities from './components/Cities/Cities';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Cities />
        </header>
      </div>
    );
  }
}

export default App;
