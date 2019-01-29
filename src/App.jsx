import React, { Component } from 'react';
import SVGWave from './SVGWave';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SVGWave 
          strokeWidth="5"
        />
      </div>
    );
  }
}

export default App;
