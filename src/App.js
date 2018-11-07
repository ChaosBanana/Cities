import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cities from './components/Cities/Cities';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route path="/" component={Cities} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
