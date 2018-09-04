import React, { Component } from 'react';
import PrimeFinder from './components/PrimeFinder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Finder</h1>
        </header>
        <p className="App-intro">
          Enter a number as an upper limit, and I'll tell you the median(s) of the set of prime numbers less than the upper limit.
        </p>

        <PrimeFinder />
      </div>
    );
  }
}

export default App;
